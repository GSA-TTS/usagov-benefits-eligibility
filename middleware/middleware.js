// nuxt i18n is not handling our rootRedirect with a prefix - so we force a redirect here
export default function (ctx) {
  if (ctx.route.fullPath === "/es" || ctx.route.fullPath === "/es/") ctx.redirect(301, "/es/death-of-a-loved-one")
}
