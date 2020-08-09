const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
	username: String,								//用户账号
	password: String,								//用户密码
	nick_name: String,							//用户真实姓名
	super: String,										//用户权限，目前只有1和0
	other: String
}))