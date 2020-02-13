const express= require('express')
const app= express()
const connectDB= require('./config/db')

// Connect to the DB
connectDB()

// Access the body of request, no need for body-parser
app.use(express.json({ extended: false }))

const PORT= process.env.PORT || 5000

app.get("/", (req, res) => res.send("Hello World"))

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})