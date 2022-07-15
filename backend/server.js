const { urlencoded } = require('express')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

const app = express()

//Connect to DB
connectDB()

app.use(express.json())
app.use(urlencoded({extended: false}))

//Routing
app.use('/api/users', require('./routes/userRoutes'))

//Error Middleware
app.use(errorHandler)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))