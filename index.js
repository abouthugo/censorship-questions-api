import express from 'express'
import bodyParser from 'body-parser'
import * as DB from './models'
const app = express()
const port = process.env.PORT || 8080
// Middleware setup
app.use(bodyParser.json()) // allows body to be received as json
app.use(bodyParser.urlencoded({ extended: false })) // allows body to be received as url encoded

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Routes
app.get('/', (req, res) => {
  res.json({
    message:
      "Welcome to the questions API, checkout the available routes in the 'routes' field",
    routes: ['/questions', '/questions/:id']
  })
})

app.get('/questions', (req, res) => {
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
      res.json({ error: 'your id has not been found' })
    })
})

app.post('/question/:id', (req, res) => {
  const { id: _id } = req.params
  const { answer } = req.body
  DB.incrementAnswer(_id, answer)
    .then(confirm => {
      res.json(confirm)

    })
    .catch(err => {
      res.json({ error: err })
    })
})

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
