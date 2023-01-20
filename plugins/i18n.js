export default function ({ app }) {
    // onBeforeLanguageSwitch called right before setting a new locale
    app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, context) => {
        app.store.dispatch("criteria/clear")
    }
}