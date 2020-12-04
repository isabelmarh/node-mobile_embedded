const db = require('./db');
const inventoryRouter = require('./routes/inventory.route');
db();

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/inventory', inventoryRouter)

app.listen(5000, () => {
    console.log('Server started at port 5000');
})