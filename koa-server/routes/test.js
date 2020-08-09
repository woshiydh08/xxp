const router = require('koa-router')()
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const { resBody } = require('../util')
const { getUserInfo } = require('../services/user')
router.prefix('/user') // 配置路由层级, koa-router提供一种router.prefix方法，此方法对于某一个router来说，是一个全局配置，此router的所有路径都会自动被添加该前缀。

router.get('/', async (ctx, next) => {
  ctx.body = resBody.success({test: 123},'msg')
})

router.get('/test', async (ctx, next) => {
  console.log(ctx)
  ctx.body = resBody.success('123')
})

/**
 * 用户登录
 */
router.post('/login.json', async (ctx) => {
  const { username, password } = ctx.request.body
  if (!username || !password) {
    ctx.body = resBody.error('请补充账号密码')
    return
  }
  const user = await User.findOne({
    username,
    password
  })
  if (!user) {
    ctx.body = resBody.error('请检查账号密码是否正确')
    return
  }
  const token = jwt.sign({ _id: user._id }, 'guagua', { expiresIn: '30 days'})
  user.password = token
  ctx.cookies.set(
    'guagua', token, {
      domain:'127.0.0.1',
      path:'/',       
      maxAge: 30*24*60*60*1000,
      httpOnly:false,  
      overwrite:false 
    }
  )
  ctx.body = resBody.success(user)
})

/**
 * 获取用户信息
 */
router.get('/getUserInfo.json', async (ctx) => {
  const	user = await getUserInfo(ctx)
  ctx.body = resBody.error('用户信息失效，请重新登录', '001')
  ctx.body = resBody.success(user)
})

/**
 * 退出登录
 */
router.get('/loginout.json', async (ctx) => {
  ctx.cookies.set(
    'yj_cdn', '', {
      domain:'t.yunjiglobal.com',
      path:'/',       
      maxAge: 1,
      httpOnly:false,  
      overwrite:false 
    }
  )
  ctx.body = resBody.success('ok')
})

/**
 * 获取所有用户信息
 */
// router.get('/getAllUserInfo.json', async (ctx) => {
//   let isAllow = false
//   const token = ctx.cookies.get('yj_cdn')
//   console.log(token)
//   jwt.verify(token, 'jiong', (error, decoded) => {
//     if (error) {
//       console.log('error：',error.message)
//       return isAllow = false
//     }
//     console.log('decoded：',decoded)
//     if(decoded.username == 'yjadmin'){
//       return isAllow = true
//     }
//   })
//   if(isAllow){
//     const query = ctx.query
//     for (let key in query) {
//       if (query[key] === '') {
//         delete query[key]
//       }else{
//         query[key] = {
//           $regex: query[key]
//         }
//       }
//     }
//     const users = await User.find(query)
//     users.map(i => {
//       return Object.assign(i,{password:null})
//     })
//     ctx.body = resBody.success(users)
//   }else{
//     ctx.body = resBody.error('用户信息失效，请重新登录')
//   }
// })

/**
 * 注册
 */
router.post('/signup.json', async (ctx) => {
  let isAllow = false
  // const token = ctx.cookies.get('yj_cdn')
  // console.log(token)
  // jwt.verify(token, 'jiong', (error, decoded) => {
  //   if (error) {
  //     console.log('error：',error.message)
  //     return isAllow = false
  //   }
  //   console.log('decoded：',decoded)
  //   if(decoded.username == 'yjadmin'){
  //     return isAllow = true
  //   }
  // })
  if(true){
    const user = ctx.request.body
    console.log('这是user信息', user)
    if (!user.username || !user.password || !user.nick_name || !user.super) {
      ctx.body = resBody.error('信息不完整')
      return
    }
    console.log(User,'=====')
    const isRepeat = await User.findOne({
      username:user.username
    })
    if (isRepeat) {
      ctx.body = resBody.error('该账号已存在')
      return
    }
    User.create(user).then(saveDoc => {
      console.log('保存成功', saveDoc)
    }).catch(error => {
      console.log('保存失败', error)
    })
    ctx.body = resBody.success('保存成功')
  }else{
    ctx.body = resBody.error('用户信息失效，请重新登录')
  }
})

module.exports = router

