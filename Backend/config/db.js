const MongoClient = require('mongodb').MongoClient
const state = {
    db: null
}

module.exports.connect = function (done) {

    const dbname = 'CarBooking'

    MongoClient.connect(process.env.MONGO_URI, (err, data) => {
        if (err) return done(err)
        state.db = data.db(dbname)

    })

    done()
}

module.exports.get = function () {
    return state.db
} 