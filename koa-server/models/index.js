const mongoose = require('mongoose')
// const config = require('../config')

mongoose.connect('mongodb://127.0.0.1:27017/xxp', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (err) console.error('连接失败~~', err)
})

module.exports = {
	// Test: require('./test'),
	User: require('./user'),
}
