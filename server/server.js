const Koa = require('koa')
const send = require('koa-send')
// const koaCros = require('koa-cors')
const koaBody = require('koa-body')
const koaSession = require('koa-session')
// const koaBodyparser = require('koa-bodyparser')
const path = require('path')

const staticRouter = require('./routers/static')
const userRouter = require('./routers/user')
const apiRouter = require('./routers/api')
const createDb = require('./db/db')
const config = require('../app.config')

const isDev = process.env.NODE_ENV === 'development'

const db = createDb(config.db.appId, config.db.appKey)

const app = new Koa()

app.keys = ['vue ssr teach']
app.use(koaSession({
  key: 'v-ssr-id',
  maxAge: 2 * 60 * 60 * 1000
}, app))
// app.use(koaBodyparser())
// app.use(koaCros())

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (error) {
    console.log(error)
    ctx.status = 500
    if (isDev) {
      ctx.body = error.message
    } else {
      ctx.body = 'please try again'
    }
  }
})

app.use(async (ctx, next) => {
  ctx.db = db
  await next()
})

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../') })
  } else {
    await next()
  }
})

app.use(koaBody())
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())

let pageRouter
if (isDev) {
  pageRouter = require('./routers/dev-ssr.js')
} else {
  pageRouter = require('./routers/ssr.js')
}
app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 8002

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
