import express from 'express'
import bodyParser from 'body-parser'
import * as DB from './models'
const app = express()
const port = 8080
// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.get('/', (req, res) => {
  DB.getQuestions()
    .then(questions => {
      res.json(questions)
    })
    .catch(error => {
      res.json({ error })
    })
})

app.get('/question/:id', (req, res) => {
  let { id } = req.params
  DB.findQuestion(id)
    .then(q => {
      res.json(q)
    })
    .catch(err => {
      res.json({ error: "your id has not been found" })
    })
})

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
