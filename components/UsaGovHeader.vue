<template>
  <div>
    <a
      class="usa-skipnav"
      href="#main-content"
      >{{ $t("skipnav") }}</a
    >
    <TheBanner />
    <p>
      {{ this.$i18n.locale === "en" ? "English" : "Español" }}
    </p>
    <header
      class="usa-header usa-header--extended"
      data-stickyheight="22">
      <div class="usa-navbar">
        <div
          id="extended-mega-logo"
          class="usa-logo">
          <em class="usa-logo__text">
            <a
              href="https://www.usa.gov/"
              title="USAGov Logo"
              ><img
                class="circle-5 desktop:circle-10 margin-right-2 tablet:margin-right-1"
                src="@/assets/img/logo-img-usagov.png"
                alt="USAGov Logo"
                width="80"
            /></a>
          </em>
        </div>

        <button class="usa-menu-btn">{{ $t("header.menu") }}</button>
      </div>

      <nav
        aria-labelledby="navi"
        class="usa-nav border-base-lighter border-bottom-1px"
        aria-hidden="false">
        <div
          id="navi"
          class="usa-sr-only">
          {{ $t("header.main") }}
        </div>
        <div class="usa-nav__inner">
          <button class="usa-nav__close">
            <img
              src="@/assets/img/close.svg"
              alt="Close" />
          </button>

          <ul class="usa-nav__primary usa-accordion usa-accordion-escapable">
            <li class="usa-nav__primary-item">
              <a
                class="usa-nav__link"
                href="https://www.usa.gov/#tpcs">
                <span>{{ $t("header.GroupOne") }}</span>
              </a>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-1">
                <span>{{ $t("header.GroupTwo.title") }}</span>
              </button>
              <div
                id="megamenu-1"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/branches-of-government">{{ $t("header.GroupTwo.linkOne") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/budget">{{ $t("header.GroupTwo.linkTwo") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/statistics">{{ $t("header.GroupTwo.linkThree") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/history">{{ $t("header.GroupTwo.linkFour") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/flag">{{ $t("header.GroupTwo.linkFive") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/life-in-the-us">{{ $t("header.GroupTwo.linkSix") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/presidents">{{ $t("header.GroupTwo.linkSeven") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/agencies">{{ $t("header.GroupTwo.linkEight") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/laws">{{ $t("header.GroupTwo.linkNine") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-flag">
                  <img
                    src="https://www.usa.gov/images/Topic_Icon_About_USA_White.svg"
                    alt="U.S. Flag"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    href="https://www.usa.gov/about-the-us">
                    {{ $t("header.GroupTwo.title") }}
                  </a>
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-2">
                <span>{{ $t("header.GroupThree.title") }}</span>
              </button>
              <div
                id="megamenu-2"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/benefits">{{ $t("header.GroupThree.linkOne") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/state-social-services">{{ $t("header.GroupThree.linkTwo") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/help-with-bills">{{ $t("header.GroupThree.linkThree") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/grants">{{ $t("header.GroupThree.linkFour") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/food-help">{{ $t("header.GroupThree.linkFive") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/about-social-security">{{ $t("header.GroupThree.linkSix") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/finding-home">{{ $t("header.GroupThree.linkSeven") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/financial-aid">{{ $t("header.GroupThree.linkEight") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/military-assistance">{{ $t("header.GroupThree.linkNine") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/retirement">{{ $t("header.GroupThree.linkTen") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/unemployment">{{ $t("header.GroupThree.linkEleven") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-benefit">
                  <img
                    src="https://www.usa.gov/images/Topic_Icon_Benefit_White.svg"
                    alt="U.S. Money"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    href="https://www.usa.gov/benefits-grants-loans"
                    >{{ $t("header.GroupThree.title") }}</a
                  >
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-3">
                <span>{{ $t("header.GroupFour.title") }}</span>
              </button>
              <div
                id="megamenu-3"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/federal-agencies">{{ $t("header.GroupFour.linkOne") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/state-tribal-governments">{{ $t("header.GroupFour.linkTwo") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/elected-officials">{{ $t("header.GroupFour.linkThree") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/forms">{{ $t("header.GroupFour.linkFour") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/buy-from-government">{{ $t("header.GroupFour.linkFour") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/about-the-us">{{ $t("header.GroupFour.linkFive") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/branches-of-government">{{ $t("header.GroupFour.linkSix") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/budget">{{ $t("header.GroupFour.linkSeven") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-agencies">
                  <img
                    src="https://www.usa.gov/images/Topic_Icon_Elected_Officials_White.svg"
                    alt="person in front of government building"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    href="https://www.usa.gov/agencies"
                    >{{ $t("header.GroupFour.title") }}</a
                  >
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-4">
                <span>{{ $t("header.GroupFive.title") }}</span>
              </button>
              <div
                id="megamenu-4"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/job-search">{{ $t("header.GroupFive.linkOne") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/unemployment">{{ $t("header.GroupFive.linkTwo") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/labor-laws">{{ $t("header.GroupFive.linkThree") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/federal-employees">{{ $t("header.GroupFive.linkFour") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/retirement">{{ $t("header.GroupFive.linkFive") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/business">{{ $t("header.GroupFive.linkSix") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-job">
                  <img
                    src="	https://www.usa.gov/images/Topic_Icon_Job_White.svg"
                    alt="suitcase"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    href="https://www.usa.gov/jobs-and-unemployment"
                    >{{ $t("header.GroupFive.title") }}</a
                  >
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-5">
                <span>{{ $t("header.GroupSix.title") }}</span>
              </button>
              <div
                id="megamenu-5"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/taxes">{{ $t("header.GroupSix.linkOne") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/credit-and-debt">{{ $t("header.GroupSix.linkTwo") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/spend-save-invest">{{ $t("header.GroupSix.linkThree") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/unclaimed-money">{{ $t("header.GroupSix.linkFour") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/currency">{{ $t("header.GroupSix.linkFive") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/benefits-grants-loans">{{ $t("header.GroupSix.linkSix") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/consumer">{{ $t("header.GroupSix.linkSeven") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/housing">{{ $t("header.GroupSix.linkEight") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/retirement">{{ $t("header.GroupSix.linkNine") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-tax">
                  <img
                    src="https://www.usa.gov/images/Topic_Icon_Money_White.svg"
                    alt="money sign"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    href="https://www.usa.gov/money"
                    >{{ $t("header.GroupSix.title") }}</a
                  >
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-6">
                <span>{{ $t("header.GroupSeven.title") }}</span>
              </button>
              <div
                id="megamenu-6"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/travel-abroad">{{ $t("header.GroupSeven.linkOne") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/immigration-and-citizenship">{{
                          $t("header.GroupSeven.linkTwo")
                        }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/visas-and-visitors">{{ $t("header.GroupSeven.linkThree") }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/recreation-and-travel">{{ $t("header.GroupSeven.linkFour") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <li class="topic-link topic-nav-globe">
                  <img
                    src="https://www.usa.gov/images/Topic_Icon_Immigration_White.svg"
                    alt="earth globe"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    href="https://www.usa.gov/travel-and-immigration"
                    >{{ $t("header.GroupSeven.title") }}</a
                  >
                </li>
              </div>
            </li>
          </ul>

          <div class="usa-nav__secondary flex-row">
            <form
              action="https://search.usa.gov/search"
              method="get"
              name="search_form"
              accept-charset="UTF-8"
              class="usa-search usa-search--small">
              <div
                role="search"
                aria-labelledby="top-srch">
                <label
                  id="top-srch"
                  class="usa-sr-only"
                  for="search-field-small"
                  >{{ $t("header.meta.search") }}</label
                >
                <input
                  id="affiliate"
                  name="affiliate"
                  type="hidden"
                  value="usagov" />
                <input
                  id="search-field-small"
                  type="search"
                  name="query"
                  placeholder=""
                  onfocus="this.placeholder = ''"
                  class="usa-input text usagov-search-autocomplete ui-autocomplete-input"
                  autocomplete="off"
                  aria-autocomplete="list"
                  aria-haspopup="true" />
                <button
                  class="usa-button"
                  type="submit">
                  <img
                    src="https://www.usa.gov/images/search-dark.svg"
                    class="usa-search__submit-icon"
                    alt="Search" />
                </button>
              </div>
            </form>
            <ul class="usa-nav__secondary-links width-full">
              <li class="usa-nav__secondary-item">
                <a href="https://www.usa.gov/phone">1-844-USA-GOV1</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="grid-container margin-y-2">
      <div class="display-row display-flex flex-justify flex-align-center">
        <a
          href="https://www.usa.gov/benefits-grants-loans"
          class="back-benefit font-serif-md">
          {{ $t("header.meta.back") }}
        </a>
        <a
          class="language-toggle-mobile"
          href="https://www.usa.gov/espanol/"
          lang="es"
          xml:lang="es">
          {{ $t("header.meta.language") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style
  lang="scss"
  scoped>
// Primary Colors
$dark-blue: #11385b; //NOTE not currently in our code
$aqua-blue: #02bfe7; //highlights action items and key areas (buttons, borders, etc)
$white: #ffffff; //site background, text on dark
// Supporting Colors
$dark-gray: #4b4b4d; //footer primary
$light-gray: #d9d9d9; //footer secondary
$beige: #ebe6de; //leftnav
$red: #c61f0c; //h1, leftnav current item, featurebox h2
$blue: #154285; //standard links, h2, leftnav header
$black: #000000; //standard text, h3
// Other Colors
$h3: $dark-gray;
$button-text: $black;
$aqua-darker: #00a6d2; //hover
$lang-toggle: $dark-blue;
$AZ-button: $blue;
$AZ-button-disabled: #859cba;
.va-middle {
  vertical-align: middle;
}
.back-benefit {
  color: #154285;
  text-decoration: none;
  &:before {
    content: "< ";
    font-weight: normal;
  }
  &:hover {
    text-decoration: underline;
  }
}
.language-toggle-mobile {
  color: #fff;
  text-decoration: none;
  padding: 5px 20px 5px 20px;
  background: $dark-blue;
  font-size: 90%;
}
// NAVIGATION
.usa-header-extended .usa-nav-primary {
  background-color: $dark-blue;
}
.usa-nav__submenu-list {
  background-color: $dark-blue;
}
.usa-nav__submenu.usa-megamenu {
  background-color: $dark-blue;
}
.usa-nav__primary button[aria-expanded="true"] {
  background-color: $dark-blue;
}
.usa-nav__primary button[aria-expanded="true"] span {
  color: white;
}
.topic-link {
  margin-top: 1rem;
}
.topic-link .usa-button {
  background-color: $aqua-blue;
  color: $black;
}
// SEARCH
@media only screen and(min-width: 60em) {
  header [role="search"] {
    min-width: 20rem;
  }
}
@media only screen and (min-width: 30em) {
  input#search-field-small {
    width: calc(100% - 4.5rem);
  }
}
@media only screen and (min-width: 64em) {
  .usa-megamenu.usa-nav__submenu::before,
  .usa-megamenu.usa-nav__submenu::after {
    background-color: $dark-blue;
    border-bottom: 3px solid $aqua-blue;
    margin-bottom: -3px;
  }
  .usa-nav__submenu {
    border-bottom: 3px solid $aqua-blue;
  }
  .usa-nav__primary .usa-accordion__button span {
    color: #154285;
  }
}
@media only screen and (max-width: 64em) {
  .usa-nav__primary a:not(.usa-button):not(.usa-current):not(.usa-nav__link) {
    color: white;
  }
}
</style>
