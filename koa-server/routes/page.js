const router = require('koa-router')()
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const { resBody } = require('../util')
const { getUserInfo } = require('../services/user')
// router.prefix('/cdn-system/user')
const static = require('koa-static');

/**
 * 获取用户信息
 */
router.get('/', async (ctx) => {
  ctx.body = resBody.success('success~~')
})



module.exports = router

