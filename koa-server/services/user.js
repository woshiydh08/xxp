const jwt = require('jsonwebtoken')
const { Test } = require('../models')

/**
 * 获取用户信息
 *  @param {*} ctx 
 */
const getUserInfo = (ctx) => {
  return new Promise(async (resolve, reject) => {
    // if (process.env.NODE_ENV !== 'production') {
    //   resolve({
    //     username: 'yjadmin',
    //     password: '123',
    //     nick_name: 'jiong',
    //     jurisdiction: 'h5',
    //     super: '1'
    //   })
    //   return
    // }

    const token = ctx.cookies.get('guagua') || 'guagua'
    try {
      var { _id } = jwt.verify(token, 'jiong') 
    }catch (err) {
      reject(-1)
      return
    }
    const test = await Test.findById(_id)
    if (!user) {
      console.log('查无此号')
      reject(-1)
      return
    }
    user.password = null
    resolve(user)
  })
}

/**
 * 获取用户ID
 * @param {*} ctx 
 */
const getUserId = (ctx) => {
  const token = ctx.cookies.get('yj_cdn')
  const { _id } = jwt.verify(token, 'jiong')
  return _id
}

module.exports = {
  getUserInfo,
  getUserId,
}