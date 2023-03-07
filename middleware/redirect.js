/**
 * This redirects the index page to death-of-a-loved-one since it
 * was agreed there would be no "BEARS" landing page.
 * This solves the issue of having unreliable redirects in place
 * that go to https://beta.usa.gov/life-experiences at unexpected times.
 * Usage in pages/index.vue -> middleware: "redirect",
 * @returns
 */
export default function ({ store, redirect, app }) {
  // Get the current locale from the i18n module.
  const locale = app.i18n.locale

  // Redirect to the home page to death-of-a-loved-one
  // based on the locale.
  if (locale === "es") {
    return redirect("/es/death-of-a-loved-one")
  } else {
    return redirect("/death-of-a-loved-one")
  }
}
