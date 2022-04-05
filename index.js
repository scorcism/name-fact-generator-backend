const express = require('express')
const app = express()
const port = process.env.PORT ||  5000
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/api/v1/fact',require('./routes/fact.js'));
app.use('/api/v2/fact',require('./routes/facts.js'));
app.use('/',require('./routes/home.js'));


app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})