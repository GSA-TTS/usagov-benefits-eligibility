export default function(ctx) {
    if(ctx.route.fullPath === '/es' || ctx.route.fullPath === '/es/')
      ctx.redirect(301, '/es/death-of-a-loved-one')
  }