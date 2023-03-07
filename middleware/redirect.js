export default function ({ store, redirect, app }) {
  const locale = app.i18n.locale // get the current locale from the i18n module

  // redirect to the appropriate page based on the locale
  if (locale === "es") {
    return redirect("/es/death-of-a-loved-one")
  } else {
    return redirect("/death-of-a-loved-one")
  }
}
