import express from 'express'
import bodyParser from 'body-parser'
import * as DB from './models'
const app = express()
const port = 8080
// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.get('/', (req, res) => {
  DB.getQuestions().then(questions => {
    res.json(questions)
  })
})

app.get('/question/:id', (req, res) => {
  let { id } = req.params
  DB.findQuestion(id).then(q => {
    res.json(q)
  }).catch(err => {
    res.json({error: err})
  })
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
