const mongoose = require('mongoose')
require('dotenv/config')

mongoose
  .connect(process.env.DB_CONNNECTION, { useNewUrlParser: true })
  .then(() => console.log('We are connected to Mongo....'))
  .catch(err => console.log('you forgot your password', err))

const movieSchema = mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  color: String,
})

const car = mongoose.model('cars', carSchema)

function createCar() {
  const newCar = new car({
    make: 'Nissan',
    model: '350z',
    year: 2021,
    color: 'Black',
  })
}
createCar()
