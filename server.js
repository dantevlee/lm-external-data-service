require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port || 3000
const cors = require('cors');
app.use(cors())


app.use('/api', require('./components/controller/NutritionController'))
app.use('/api', require('./components/controller/AccountsController') )
app.listen(port, () => console.log(`Server is listening on port ${port}`))