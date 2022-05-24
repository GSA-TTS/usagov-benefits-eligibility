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
              title="USAGov Logo">
              <img
                v-if="$i18n.locale === 'en'"
                class="circle-5 desktop:circle-10 margin-right-2 tablet:margin-right-1"
                src="@/assets/img/logo-img-usagov.png"
                alt="USAGov Logo"
                width="80" />
              <img
                v-if="$i18n.locale === 'es'"
                class="margin-right-2 tablet:margin-right-1 width-10 tablet:width-card"
                src="https://app-usa-modeast-prod-a01239f-ecas.s3.amazonaws.com/Logo_USAGov_Spanish.png"
                alt="USAGov Logo" />
            </a>
          </em>
        </div>
        <button class="usa-menu-btn print:display-none">{{ $t("header.menu") }}</button>
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
                  v-if="$i18n.locale === 'en'"
                  id="affiliate"
                  name="affiliate"
                  type="hidden"
                  value="usagov" />
                <input
                  v-if="$i18n.locale === 'es'"
                  id="affiliate"
                  name="affiliate"
                  type="hidden"
                  value="gobiernousa_only" />
                <input
                  id="search-field-small"
                  type="search"
                  name="query"
                  :placeholder="$t('header.meta.placeholder')"
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
          <ul class="usa-nav__primary usa-accordion usa-accordion-escapable">
            <li class="usa-nav__primary-item">
              <a
                class="usa-nav__link"
                :href="$i18n.locale === 'en' ? 'https://www.usa.gov/#tpcs' : 'https://www.usa.gov/espanol/#tpcs'">
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
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/branches-of-government'
                              : 'https://www.usa.gov/espanol/programas-sociales'
                          "
                          >{{ $t("header.GroupTwo.linkOne") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/budget'
                              : 'https://www.usa.gov/espanol/prestamos-y-subvenciones'
                          "
                          >{{ $t("header.GroupTwo.linkTwo") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/statistics'
                              : 'https://www.usa.gov/espanol/ayuda-financiera-para-estudiantes'
                          "
                          >{{ $t("header.GroupTwo.linkThree") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/history'
                              : 'https://www.usa.gov/espanol/seguro-social'
                          "
                          >{{ $t("header.GroupTwo.linkFour") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/flag'
                              : 'https://www.usa.gov/espanol/asistencia-alimentaria'
                          "
                          >{{ $t("header.GroupTwo.linkFive") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/life-in-the-us'
                              : 'https://www.usa.gov/espanol/pago-facturas'
                          "
                          >{{ $t("header.GroupTwo.linkSix") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/presidents'
                              : 'https://www.usa.gov/espanol/desempleo'
                          "
                          >{{ $t("header.GroupTwo.linkSeven") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/agencies'
                              : 'https://www.usa.gov/espanol/beneficios-familias-militares'
                          "
                          >{{ $t("header.GroupTwo.linkEight") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/laws'
                              : 'https://www.usa.gov/espanol/jubilacion'
                          "
                          >{{ $t("header.GroupTwo.linkNine") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div
                    v-if="$i18n.locale === 'es'"
                    class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/espanol/vivienda-accesible">{{ $t("header.GroupTwo.linkTen") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-flag">
                  <img
                    v-if="$i18n.locale === 'en'"
                    src="https://www.usa.gov/images/Topic_Icon_About_USA_White.svg"
                    alt="U.S. Flag"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <img
                    v-if="$i18n.locale === 'es'"
                    src="https://www.usa.gov/images/Topic_Icon_Benefit_White.svg"
                    alt="Dinero"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    :href="
                      $i18n.locale === 'en'
                        ? 'https://www.usa.gov/about-the-us'
                        : 'https://www.usa.gov/espanol/ayuda-financiera-becas-beneficios'
                    "
                    class="usa-button">
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
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/benefits'
                              : 'https://www.usa.gov/espanol/deportacion'
                          "
                          >{{ $t("header.GroupThree.linkOne") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/state-social-services'
                              : 'https://www.usa.gov/espanol/viajes-dentro-estados-unidos'
                          "
                          >{{ $t("header.GroupThree.linkTwo") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/help-with-bills'
                              : 'https://www.usa.gov/espanol/viajes-al-exterior'
                          "
                          >{{ $t("header.GroupThree.linkThree") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/grants'
                              : 'https://www.usa.gov/espanol/pasaportes-documentos-de-viaje'
                          "
                          >{{ $t("header.GroupThree.linkFour") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/food-help'
                              : 'https://www.usa.gov/espanol/naturalizacion'
                          "
                          >{{ $t("header.GroupThree.linkFive") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/about-social-security'
                              : 'https://www.usa.gov/espanol/residencia-permanente'
                          "
                          >{{ $t("header.GroupThree.linkSix") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/finding-home'
                              : 'https://www.usa.gov/espanol/registros-de-entrada'
                          "
                          >{{ $t("header.GroupThree.linkSeven") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/financial-aid'
                              : 'https://www.usa.gov/espanol/inmigrantes-noresidentes'
                          "
                          >{{ $t("header.GroupThree.linkEight") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/military-assistance'
                              : 'https://www.usa.gov/espanol/tramites-migratorios'
                          "
                          >{{ $t("header.GroupThree.linkNine") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/retirement">{{ $t("header.GroupThree.linkTen") }}</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/unemployme'">{{ $t("header.GroupThree.linkEleven") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-benefit">
                  <img
                    v-if="$i18n.locale === 'en'"
                    src="https://www.usa.gov/images/Topic_Icon_Benefit_White.svg"
                    alt="U.S. Money"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <img
                    v-if="$i18n.locale === 'es'"
                    src="https://www.usa.gov/images/Topic_Icon_Immigration_White.svg"
                    alt="World Globe"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    :href="
                      $i18n.locale === 'en'
                        ? 'https://www.usa.gov/benefits-grants-loans'
                        : 'https://www.usa.gov/espanol/ciudadania-inmigracion-viajes'
                    "
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
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/federal-agencies'
                              : 'https://www.usa.gov/espanol/seguros-personales'
                          "
                          >{{ $t("header.GroupFour.linkOne") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/state-tribal-governments'
                              : 'https://www.usa.gov/espanol/gasto-ahorro-inversion'
                          "
                          >{{ $t("header.GroupFour.linkTwo") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/elected-officials'
                              : 'https://www.usa.gov/espanol/credito'
                          "
                          >{{ $t("header.GroupFour.linkThree") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/forms'
                              : 'https://www.usa.gov/espanol/impuestos'
                          "
                          >{{ $t("header.GroupFour.linkFour") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/buy-from-government'
                              : 'https://www.usa.gov/espanol/dinero-sin-reclamar'
                          "
                          >{{ $t("header.GroupFour.linkFive") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/about-the-us'
                              : 'https://www.usa.gov/espanol/ayuda-financiera-becas-beneficios'
                          "
                          >{{ $t("header.GroupFour.linkSix") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/branches-of-government'
                              : 'https://www.usa.gov/espanol/proteccion-consumidor'
                          "
                          >{{ $t("header.GroupFour.linkSeven") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/budget">{{ $t("header.GroupFour.linkEight") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-agencies">
                  <img
                    v-if="$i18n.locale === 'en'"
                    src="https://www.usa.gov/images/Topic_Icon_Elected_Officials_White.svg"
                    alt="person in front of government building"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <img
                    v-if="$i18n.locale === 'es'"
                    src="https://www.usa.gov/images/Topic_Icon_Money_White.svg"
                    alt="person in front of government building"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    :href="
                      $i18n.locale === 'en' ? 'https://www.usa.gov/agencies' : 'https://www.usa.gov/espanol/dinero'
                    "
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
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/job-search'
                              : 'https://www.usa.gov/espanol/funcionarios-elegidos'
                          "
                          >{{ $t("header.GroupFive.linkOne") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/unemployment'
                              : 'https://www.usa.gov/espanol/agencias-estatales'
                          "
                          >{{ $t("header.GroupFive.linkTwo") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/labor-laws'
                              : 'https://www.usa.gov/espanol/consulados-embajadas'
                          "
                          >{{ $t("header.GroupFive.linkThree") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/federal-employees'
                              : 'https://www.usa.gov/espanol/agencias-gobierno'
                          "
                          >{{ $t("header.GroupFive.linkFour") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/retirement'
                              : 'https://www.usa.gov/espanol/acerca-de-estados-unidos'
                          "
                          >{{ $t("header.GroupFive.linkFive") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="https://www.usa.gov/business">{{ $t("header.GroupFive.linkSix") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="topic-link topic-nav-job">
                  <img
                    v-if="$i18n.locale === 'en'"
                    src="https://www.usa.gov/images/Topic_Icon_Job_White.svg"
                    alt="suitcase"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <img
                    v-if="$i18n.locale === 'es'"
                    src="https://www.usa.gov/images/Topic_Icon_Elected_Officials_White.svg"
                    alt="building with people"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    :href="
                      $i18n.locale === 'en'
                        ? 'https://www.usa.gov/jobs-and-unemployment'
                        : 'https://www.usa.gov/espanol/directorios'
                    "
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
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/taxes'
                              : 'https://www.usa.gov/espanol/presentar-queja'
                          "
                          >{{ $t("header.GroupSix.linkOne") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/credit-and-debt'
                              : 'https://www.usa.gov/espanol/telecomunicaciones'
                          "
                          >{{ $t("header.GroupSix.linkTwo") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/spend-save-invest'
                              : 'https://www.usa.gov/espanol/telemercadeo-correo-basura'
                          "
                          >{{ $t("header.GroupSix.linkThree") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/unclaimed-money'
                              : 'https://www.usa.gov/espanol/estafas-fraudes'
                          "
                          >{{ $t("header.GroupSix.linkFour") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/currency'
                              : 'https://www.usa.gov/espanol/dinero'
                          "
                          >{{ $t("header.GroupSix.linkFive") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/benefits-grants-loans'
                              : 'https://www.usa.gov/espanol/estados-consumidor'
                          "
                          >{{ $t("header.GroupSix.linkSix") }}</a
                        >
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
                    v-if="$i18n.locale === 'en'"
                    src="https://www.usa.gov/images/Topic_Icon_Money_White.svg"
                    alt="money sign"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <img
                    v-if="$i18n.locale === 'es'"
                    src="https://www.usa.gov/images/Topic_Icon_Consumer_White.svg"
                    alt="hand  holding a credit card"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    :href="
                      $i18n.locale === 'en'
                        ? 'https://www.usa.gov/money'
                        : 'https://www.usa.gov/espanol/proteccion-consumidor'
                    "
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
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/travel-abroad'
                              : 'https://www.usa.gov/espanol/empleo-capacitacion-laboral'
                          "
                          >{{ $t("header.GroupSeven.linkOne") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/immigration-and-citizenship'
                              : 'https://www.usa.gov/espanol/jubilacion'
                          "
                          >{{ $t("header.GroupSeven.linkTwo") }}</a
                        >
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/visas-and-visitors'
                              : 'https://www.usa.gov/espanol/desempleo'
                          "
                          >{{ $t("header.GroupSeven.linkThree") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a
                          :href="
                            $i18n.locale === 'en'
                              ? 'https://www.usa.gov/recreation-and-travel'
                              : 'https://www.usa.gov/espanol/negocios-y-organizaciones-ONG'
                          "
                          >{{ $t("header.GroupSeven.linkFour") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <li class="topic-link topic-nav-globe">
                  <img
                    v-if="$i18n.locale === 'en'"
                    src="https://www.usa.gov/images/Topic_Icon_Immigration_White.svg"
                    alt="earth globe"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <img
                    v-if="$i18n.locale === 'es'"
                    src="https://www.usa.gov/images/Topic_Icon_Job_White.svg"
                    alt="briefcase"
                    width="55"
                    class="display-none tablet:display-inline va-middle" />
                  <a
                    class="usa-button"
                    :href="
                      $i18n.locale === 'en'
                        ? 'https://www.usa.gov/travel-and-immigration'
                        : 'https://www.usa.gov/espanol/trabajo-y-desempleo'
                    "
                    >{{ $t("header.GroupSeven.title") }}</a
                  >
                </li>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <nav
      class="grid-container margin-y-2 print:display-none"
      aria-label="secondary navigation">
      <div class="display-row display-flex flex-justify flex-align-center">
        <a
          href="https://www.usa.gov/benefits-grants-loans"
          class="back-benefit font-serif-md text-bold">
          {{ $t("header.meta.back") }}
        </a>
        <button
          v-if="$config.languageToggleActive"
          id="language-toggle-button"
          class="language-toggle-mobile"
          @click="switchLanguage">
          {{ $t("header.meta.language") }}
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    switchLanguage() {
      let route = ""
      const locale = this.$i18n.locale
      const oneEventString = !this.$config.oneEventVersion ? this.$config.oneEventVersion : ""
      if (locale === "en") {
        route = `/es/${oneEventString}`
        this.$i18n.setLocale("es")
      } else {
        route = `/${oneEventString}`
        this.$i18n.setLocale("en")
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
@media (min-width: 64em) {
  .usa-nav__primary button {
    padding-right: 2rem;
    padding-bottom: 1.9rem;
    padding-left: 1rem;
    color: #4b4b4d;
    font-size: 1rem;
    font-weight: 700;
    width: initial;
  }
  .usa-nav__primary > .usa-nav__primary-item {
    font-size: 1rem;
  }
}
</style>
