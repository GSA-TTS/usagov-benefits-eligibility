/* eslint-disable sonarjs/cognitive-complexity */
// nuxt i18n is not handling our rootRedirect with a prefix - so we force a redirect here
export default function (ctx) {
  // https://benefits-tool.usa.gov	https://usa.gov/benefit-finder
  if (ctx.route.fullPath === "/" || ctx.route.fullPath === "") ctx.redirect(301, "https://www.usa.gov/benefit-finder")

  // https://benefits-tool.usa.gov/es	https://usa.gov/es/buscador-beneficios
  if (ctx.route.fullPath === "/es" || ctx.route.fullPath === "/es/") ctx.redirect(301, "https://www.usa.gov/es/buscador-beneficios")

  // https://benefits-tool.usa.gov/death-of-a-loved-one	https://usa.gov/benefit-finder/death
  if (ctx.route.fullPath === "/death-of-a-loved-one" || ctx.route.fullPath === "/death-of-a-loved-one/") ctx.redirect(301, "https://www.usa.gov/benefit-finder/death")

  // https://benefits-tool.usa.gov/es/death-of-a-loved-one	https://usa.gov/es/buscador-beneficios/muerte
  if (ctx.route.fullPath === "/es/death-of-a-loved-one" || ctx.route.fullPath === "/es/death-of-a-loved-one/") ctx.redirect(301, "https://www.usa.gov/es/buscador-beneficios/muerte")

  // https://benefits-tool.usa.gov/disability	https://usa.gov/benefit-finder/disability
  if (ctx.route.fullPath === "/disability" || ctx.route.fullPath === "/disability/") ctx.redirect(301, "https://usa.gov/benefit-finder/disability")

  // https://benefits-tool.usa.gov/es/disability	https://usa.gov/es/buscador-beneficios/discapacidad
  if (ctx.route.fullPath === "/es/disability" || ctx.route.fullPath === "/es/disability/") ctx.redirect(301, "https://usa.gov/es/buscador-beneficios/discapacidad")

  // https://benefits-tool.usa.gov/retirement	https://usa.gov/benefit-finder/retirement
  if (ctx.route.fullPath === "/retirement" || ctx.route.fullPath === "/retirement/") ctx.redirect(301, "https://usa.gov/benefit-finder/retirement")

  // https://benefits-tool.usa.gov/es/retirement	https://usa.gov/es/buscador-beneficios/jubilacion
  if (ctx.route.fullPath === "/es/retirement" || ctx.route.fullPath === "/es/retirement/") ctx.redirect(301, "https://usa.gov/es/buscador-beneficios/jubilacion")

}
