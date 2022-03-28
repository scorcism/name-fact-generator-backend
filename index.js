const express = require('express')
const app = express()
const port = process.env.PORT ||  5000
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/api/fact',require('./routes/fact.js'));
app.use('/',require('./routes/home.js'));


// app.get('/', (req, res) => {
//   res.send('Hello Abhishek!')
// })

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})