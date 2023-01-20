<template>
  <header
    id="header"
    class="usa-header usa-header--extended">
    <div class="usa-banner-inner">
      <div
        id="block-languageswitcher"
        class="language-switcher-language-url settings-tray-editable block block-language block-language-blocklanguage-interface"
        role="navigation"
        data-drupal-settingstray="editable">
        <ul class="links usa-nav__primary usa-accordion">
          <li
            hreflang="es"
            class="usa-nav__primary-item">
            <a
              href="/es"
              class="language-link"
              hreflang="es"
              >Español</a
            >
          </li>
        </ul>
      </div>
      <div
        id="block-englishheadercode"
        class="settings-tray-editable block block-block-content block-block-content644b7adb-94b1-497d-bd4d-c1f2a2bf9909"
        data-drupal-settingstray="editable">
        <div class="field field--name-body field--type-text-with-summary field--label-hidden field__item">
          <div class="usa-navbar">
            <div
              id="extended-logo"
              class="usa-logo">
              <em class="usa-logo-text">
                <a
                  href="/"
                  title="USAGov Logo"
                  ><img
                    src="/themes/custom/usagov/images/LOGO_betasite_USAGOV_v2.png"
                    alt="USAGov Logo"
                /></a>
              </em>
            </div>
            <button class="usa-menu-btn">Menu</button>
          </div>
          <nav
            aria-label="Primary navigation"
            class="usa-nav">
            <div class="usa-nav__inner">
              <button class="usa-nav__close">
                <img
                  src="/themes/custom/usagov/assets/img/usa-icons/close.svg"
                  alt="Close" />
              </button>
              <ul class="usa-nav__primary usa-accordion">
                <li class="usa-nav__primary-item">
                  <a
                    href="/#all_topics"
                    class="usa-nav__link"
                    ><span>All topics and services</span></a
                  >
                </li>
                <li
                  id="usa-nav__about"
                  class="usa-nav__primary-item">
                  <a
                    href="/about-the-us"
                    class="usa-nav__link"
                    ><span>About the U.S. and its government</span></a
                  >
                </li>
                <li
                  id="usa-nav__money"
                  class="usa-nav__primary-item">
                  <a
                    href="/money"
                    class="usa-nav__link"
                    ><span>Money</span></a
                  >
                </li>
                <li
                  id="usa-nav__law"
                  class="usa-nav__primary-item">
                  <a
                    href="/laws-and-legal-issues"
                    class="usa-nav__link"
                    ><span>Laws and legal issues</span></a
                  >
                </li>
                <li
                  id="usa-nav__scams"
                  class="usa-nav__primary-item">
                  <a
                    href="/scams-and-fraud"
                    class="usa-nav__link"
                    ><span>Scams and fraud</span></a
                  >
                </li>
              </ul>
              <div class="usa-nav__secondary">
                <span class="usa-nav__secondary-links">
                  <span
                    id="top-phone"
                    class="usa-nav__secondary-item">
                    <a href="/phone">Call us at 1-844-USAGOV1</a>
                  </span>
                </span>

                <form
                  class="usa-search usa-search--small"
                  action="https://search.usa.gov/search"
                  method="get"
                  name="search_form"
                  accept-charset="UTF-8"
                  role="search">
                  <label
                    id="top-srch"
                    class="usa-sr-only"
                    for="search-field-small"
                    >Search</label
                  >
                  <input
                    id="affiliate"
                    name="affiliate"
                    type="hidden"
                    value="usagov_all_gov" />
                  <input
                    id="search-field-small"
                    class="usa-input text usagov-search-autocomplete ui-autocomplete-input"
                    type="search"
                    name="query"
                    placeholder="Search all government"
                    onfocus="this.placeholder = ''"
                    autocomplete="off"
                    aria-autocomplete="list"
                    aria-haspopup="true" />
                  <button
                    class="usa-button"
                    type="submit">
                    <img
                      src="/themes/custom/usagov/images/search--dark.svg"
                      class="usa-search__submit-icon"
                      alt="Search" />
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
