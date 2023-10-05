require('dotenv').config()

const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = process.env.mongo_key
// Customer change url to your db you created in atlas
// mongo_key="mongodb+srv://shihab:815556848@ffd.zrx1n4b.mongodb.net/FFDMERN?retryWrites=true&w=majority"
module.exports = function (callback) {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
    if (err) console.log('---' + err)
    else {
      // var database =
      console.log('connected to mongo')
      const foodCollection = await mongoose.connection.db.collection(
        'FoodCatagory'
      )

      foodCollection.find({}).toArray(async function (err, data) {
        const categoryCollection = await mongoose.connection.db.collection(
          'foodname'
        )
        // console.log(data)
        categoryCollection.find({}).toArray(async function (err, Catdata) {
          callback(err, data, Catdata)
          // global.foodData = data
          // global.foodCategory = Catdata
        })
      })

      // listCollections({name: 'food_items'}).toArray(function (err, database) {
      // });
      //     module.exports.Collection = database;
      // });
    }
  })
}
