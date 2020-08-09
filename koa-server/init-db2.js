const model = require('./models')

const user = [{
	username: 'totoro',
	password: '123',
	nick_name: 'gua',
	jurisdiction: 'h5',
	super: '1'
}]

// 	初始化账号数据库信息
async function go() {
	user.forEach(v => {
		const _user = new model.User(v)
		_user.save()
		console.log(v)
		console.log(_user)
	})
}

go()