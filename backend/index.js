global.foodData = require('./db')(function callback(err, data, Catdata) {
  if (err) console.log(err)
  global.foodData = data
  global.foodCategory = Catdata
  // console.log(Catdata)
  // console.log(global.foodCategory)
})

const express = require('express')
const app = express()
const port = 5000
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(express.json())

app.use('/api/auth', require('./Routes/Auth'))

app.listen(port, () => {
  console.log(
    `listening on http://localhost:${port}...............................`
  )
})
