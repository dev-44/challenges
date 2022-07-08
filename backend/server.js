const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

//Routing
app.use('/api/users', require('./routes/userRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))