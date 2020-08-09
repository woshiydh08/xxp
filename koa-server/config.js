let config = {}
config.database = 'mongodb://127.0.0.1:27017/cdn-system'
config.qiniuConfig = {
  //  暂不提供cdn的key
}
config.baseConfig = {
  paths: [
    {
      name: 'OMS',
      jurisdiction: 'h5',
      path: 'oms/'
    },
    {
      name: '前端组',
      jurisdiction: 'h5',
      path: 'qnUpload/frontend/'
    },
    {
      name: '自定义',
      jurisdiction: 'all',
      path: ''
    }
  ],
	urlPrefix: 'https://static.yunjiglobal.com',
}

config.noUserApi = ['/user/login.json', '/cdnbuild/cdnVersionLists.json']

module.exports = config