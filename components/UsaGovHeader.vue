<template>
  <div>
    <a
      class="usa-skipnav"
      href="#main-content"
      >{{ $t("skipnav") }}</a
    >
    <TheBanner />
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

        <button class="usa-menu-btn">MENU</button>
      </div>

      <nav
        aria-labelledby="navi"
        class="usa-nav border-base-lighter border-bottom-1px"
        aria-hidden="false">
        <div
          id="navi"
          class="usa-sr-only">
          Main Navigation
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
                <span>All Topics and Services</span>
              </a>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-1">
                <span>About the U.S.</span>
              </button>
              <div
                id="megamenu-1"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/branches-of-government">Branches of the U.S. Government</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/budget">Budget of the U.S. Government</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/statistics">Data and Statistics About the U.S.</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/history">History and Historical Documents</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/flag">American Flag</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/life-in-the-us">Learn About Life in the U.S.</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/presidents">Presidents, Vice Presidents, and First Ladies</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/agencies">Government Agencies and Elected Officials</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/laws">Laws and Legal Issues</a>
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
                    About the U.S.
                  </a>
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-2">
                <span>Benefits, Grants, Loans</span>
              </button>
              <div
                id="megamenu-2"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/benefits">Benefits</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/state-social-services">State Social Service Agencies</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/help-with-bills">Help with Bills</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/grants">Grants and Loans</a></li>
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/food-help">Food Assistance</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/about-social-security">Social Security Questions</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/finding-home">Affordable Rental Housing</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/financial-aid">Financial Aid for Students</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/military-assistance">Military Programs and Benefits</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/retirement">Retirement</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/unemployment">Unemployment Help</a>
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
                    >Benefits, Grants, Loans</a
                  >
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-3">
                <span>Government Agencies and Elected Officials</span>
              </button>
              <div
                id="megamenu-3"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/federal-agencies">A-Z Index of U.S. Government Agencies</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/state-tribal-governments">State, Local, and Tribal Governments</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/elected-officials">Contact Elected Officials</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/forms">Forms, by Agency</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/buy-from-government">Buying from the U.S. Government</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/about-the-us">About the U.S.</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/branches-of-government">Branches of the U.S. Government</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/budget">Budget of the U.S. Government</a>
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
                    >Government Agencies and Elected Officials</a
                  >
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-4">
                <span>Jobs and Unemployment</span>
              </button>
              <div
                id="megamenu-4"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/job-search">Looking for a New Job</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/unemployment">Unemployment Help</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/labor-laws">Labor Laws and Issues</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/federal-employees">U.S. Government Employees</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/retirement">Retirement</a></li>
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/business">Small Business</a></li>
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
                    >Jobs and Unemployment</a
                  >
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-5">
                <span>Money and Taxes</span>
              </button>
              <div
                id="megamenu-5"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/taxes">Taxes</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/credit-and-debt">Credit and Debt</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/spend-save-invest">Spending, Saving and Investing</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/unclaimed-money">Unclaimed Money from the Government</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/currency">Currency</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/benefits-grants-loans">Benefits, Grants, Loans</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/consumer">Consumer Issues</a></li>
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/housing">Housing</a></li>
                      <li class="usa-nav__submenu-item"><a href="https://www.usa.gov/retirement">Retirement</a></li>
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
                    >Money and Taxes</a
                  >
                </div>
              </div>
            </li>
            <li class="usa-nav__primary-item">
              <button
                class="usa-accordion__button usa-nav__link initialized"
                aria-expanded="false"
                aria-controls="megamenu-6">
                <span>Travel and Immigration</span>
              </button>
              <div
                id="megamenu-6"
                class="usa-nav__submenu usa-megamenu"
                hidden>
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/travel-abroad">Passports and International Travel</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/immigration-and-citizenship">Immigration and Citizenship</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/visas-and-visitors">Visas and Visiting the U.S.</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/recreation-and-travel">Recreation and Travel within the U.S.</a>
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
                    >Travel and Immigration</a
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
                  >Search</label
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
          Benefits, Grants, Loans
        </a>
        <button
          class="language-toggle-mobile"
          lang="es"
          xml:lang="es"
          @click="changeLanguage()">
          {{ this.$i18n.locale === "en" ? "Español" : "English" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage() {
      let route = ""
      const oneEventString = this.$config.oneEventVersion ? this.$config.oneEventVersion : ""
      if (this.$i18n.locale === "en") {
        route = `/es/${oneEventString}`
      } else {
        route = `/${oneEventString}`
      }
      this.$router.push(route)
    },
  },
}
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
