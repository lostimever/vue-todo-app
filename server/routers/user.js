const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

// const createError = (code, resp) => {
//   console.log('code', code, 'resp', resp)
//   const err = new Error(resp.message)
//   err.code = code
//   return err
// }

// const handleRequest = ({ status, data, ...rest }) => {
//   if (status === 200) {
//     return data
//   } else {
//     throw createError(status, rest)
//   }
// }

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'wlf' && user.password === 'wlf111') {
    ctx.session.user = {
      userame: 'wlf'
    }
    ctx.body = {
      success: true,
      data: {
        userame: 'wlf'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
    // return handleRequest({
    //   status: 400,
    //   data: 'error',
    //   body: {
    //     success: false,
    //     message: 'username or password error'
    //   }
    // })
  }
})

module.exports = userRouter
