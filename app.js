const express = require('express')
const app = express();
const { cars } = require('./data')
const path = require('path')
const cors = require('cors')

app.use(cors())



app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})

app.get('/cars', (req, res) => {
    res.sendFile(path.join(__dirname, "cars.html"))
})


app.get('/api/:carId', (req, res) => {

    const { carId } = req.params


    const theCar = cars.find((car) => car.id === Number(carId))

    res.json(theCar)



})

app.listen(5555)