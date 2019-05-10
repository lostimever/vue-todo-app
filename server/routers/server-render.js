const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  // ctx.headers['Content-Type'] = 'text/html'
  // ctx.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  ctx.headers['Content-Type'] = 'application/json'

  const context = { url: ctx.path }

  try {
    const appString = await renderer.renderToString(context)

    const {
      title
    } = context.meta.inject()
    const html = ejs.render(template, {
      appString: appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text()
    })

    ctx.body = html
  } catch (error) {
    console.log('render error', error)
    throw error
  }
}
