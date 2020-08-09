const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const cors = require('@koa/cors')


const test = require('./routes/test')
const page = require('./routes/page')

// error handler
onerror(app)

// middlewares
app.use(cors())
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

app.use(async (ctx, next) => {
  const start = new Date().getTime()
  await next()
  const ms = new Date().getTime() - start
  console.log(`--> ${ctx.request.method} ${ctx.request.url}   time: ${ms}ms`)
})

app.use(test.routes(), test.allowedMethods())
app.use(page.routes(), page.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(8089, () => {
	console.log('starting at port 8089')
})
