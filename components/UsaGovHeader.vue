<template>
  <div>
    <a
      class="usa-skipnav"
      href="#main-content"
      >{{ $t("skipnav") }}</a
    >

    <section
      class="usa-banner"
      aria-label="Official government website">
      <div class="usa-accordion">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img
                class="usa-banner__header-flag"
                src="../assets/img/us_flag_small.png"
                alt="U.S. flag" />
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">{{ $t("banner.official") }}</p>
              <p
                class="usa-banner__header-action print:display-none"
                aria-hidden="true">
                {{ $t("banner.know") }}
              </p>
            </div>
            <button
              class="usa-accordion__button usa-banner__button print:display-none"
              aria-expanded="false"
              aria-controls="gov-banner">
              <span class="usa-banner__button-text">{{ $t("banner.know") }}</span>
            </button>
          </div>
        </header>

        <div
          id="gov-banner"
          class="usa-banner__content usa-accordion__content">
          <div class="grid-row grid-gap-lg">
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../assets/img/icon-dot-gov.svg"
                alt="government"
                aria-hidden="true" />
              <div class="usa-media-block__body">
                <p>
                  <strong>
                    {{ $t("banner.dropdown.official") }}
                  </strong>
                  <br />
                  <span>
                    {{ $t("banner.dropdown.officialDetailsDotGovPrefix") }}
                    <strong>.gov</strong>{{ $t("banner.dropdown.officialDetails") }}
                  </span>
                </p>
              </div>
            </div>
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../assets/img/icon-https.svg"
                alt="https secure"
                aria-hidden="true" />
              <div class="usa-media-block__body">
                <p>
                  <strong>
                    {{ $t("banner.dropdown.secure") }}
                  </strong>
                  <br />
                  {{ $t("banner.dropdown.secureDetailsLockPrefix") }}
                  <strong>{{ $t("banner.dropdown.secureDetailsLockStrong") }}</strong>
                  (
                  <span class="icon-lock">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="64"
                      viewBox="0 0 52 64"
                      class="usa-banner__lock-image"
                      role="img"
                      aria-labelledby="banner-lock-title banner-lock-description"
                      focusable="false">
                      <title id="banner-lock-title">Lock</title>
                      <desc id="banner-lock-description">A locked padlock</desc>
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z" />
                    </svg>
                  </span>
                  ) {{ $t("banner.dropdown.secureDetailsLockPostfix") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <header
      class="usa-header usa-header--extended"
      data-stickyheight="22">
      <div class="usa-navbar">
        <div
          id="extended-mega-logo"
          class="usa-logo">
          <em class="usa-logo__text">
            <a
              href="/"
              title="USAGov Logo"
              ><img
                src="https://app-usa-modeast-prod-a01239f-ecas.s3.amazonaws.com/Logo_USAGov.png"
                alt="USAGov Logo"
            /></a>
          </em>
        </div>
        <a
          class="language-toggle-mobile"
          href="/espanol/"
          lang="es"
          xml:lang="es">
          Español
        </a>
        <button class="usa-menu-btn">MENU</button>
      </div>

      <nav
        aria-labelledby="navi"
        class="usa-nav"
        aria-hidden="false">
        <!-- TODO: Bring this back -->
        <!-- <div
          id="navi"
          class="usa-sr-only">
          Main Navigation
        </div> -->
        <div class="usa-nav__inner">
          <div class="usa-nav__secondary">
            <button class="usa-nav__close">Close</button>
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
                  class="text usagov-search-autocomplete ui-autocomplete-input"
                  autocomplete="off"
                  aria-autocomplete="list"
                  aria-haspopup="true" />
                <button type="submit">
                  <span class="usa-sr-only">Search</span>
                </button>
              </div>
            </form>
            <ul class="usa-unstyled-list usa-nav-secondary-links">
              <li class="js-search-button-container">
                <button class="usa-header-search-button js-search-button">Search</button>
              </li>
              <li>
                <a href="/phone">1-844-USA-GOV1</a>
              </li>
            </ul>
          </div>
          <!-- TODO: Mobile nav? -->
          <!-- <ul
            id="mobile-nav"
            class="">
            <div
              id="sr-expanded"
              class="usa-sr-only">
              expanded
            </div>
            <div
              id="sr-current-page"
              class="usa-sr-only">
              current page
            </div>
            <div
              id="sr-previous"
              class="usa-sr-only">
              previous
            </div>
            <div
              id="sr-next"
              class="usa-sr-only">
              next
            </div>
            <li class="open">
              <a
                id="MobileMenuAllTopics"
                href="/#tpcs"
                aria-describedby="sr-current-page sr-expanded"
                data-current-page="true"
                data-href="/#tpcs"
                >All Topics and Services
              </a>
              <ul>
                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/about-the-us"
                    href="#"
                    >About the U.S.</a
                  >

                  <ul>
                    <li><a href="/flag">American Flag</a></li>
                    <li><a href="/branches-of-government">Branches of the U.S. Government</a></li>
                    <li><a href="/budget">Budget of the U.S. Government</a></li>
                    <li><a href="/statistics">Data and Statistics About the U.S.</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/agencies"
                        href="#"
                        >Government Agencies and Elected Officials</a
                      >

                      <ul>
                        <li><a href="/federal-agencies">A-Z Index of U.S. Government Agencies</a></li>
                        <li><a href="/branches-of-government">Branches of the U.S. Government</a></li>
                        <li><a href="/budget">Budget of the U.S. Government</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/buy-from-government"
                            href="#"
                            >Buying from the U.S. Government</a
                          >

                          <ul>
                            <li><a href="/auctions-and-sales">Auctions and Sales</a></li>
                            <li><a href="/state-surplus-sales">Surplus Sales by State</a></li>
                          </ul>
                        </li>
                        <li><a href="/elected-officials">Contact Elected Officials</a></li>
                        <li><a href="/forms">Forms, by Agency</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/state-tribal-governments"
                            href="#"
                            >State, Local, and Tribal Governments</a
                          >

                          <ul>
                            <li><a href="/elected-officials">Contact Elected Officials</a></li>
                            <li><a href="/state-governor">Governors</a></li>
                            <li><a href="/tribes">Indian Tribes and Resources for Native Americans</a></li>
                            <li><a href="/local-governments">Local Governments</a></li>
                            <li><a href="/state-attorney-general">State Attorneys General</a></li>
                            <li><a href="/state-consumer">State Consumer Protection Offices</a></li>
                            <li><a href="/state-emergency-management">State Emergency Management Agencies</a></li>
                            <li><a href="/states-and-territories">State Governments</a></li>
                            <li><a href="/state-health">State Health Departments</a></li>
                            <li><a href="/state-courts">State, County, and Municipal Courts</a></li>
                            <li><a href="/state-travel-and-tourism">Travel and Tourism Information, by State</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="/history">History and Historical Documents</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/laws"
                        href="#"
                        >Laws and Legal Issues</a
                      >

                      <ul>
                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/complaints"
                            href="#"
                            >Complaints</a
                          >

                          <ul>
                            <li><a href="/complaint-against-government">Complaints Against the Government</a></li>
                            <li><a href="/consumer-complaints">Consumer Complaints</a></li>
                            <li><a href="/complaints-by-product">Consumer Complaints by Product Type</a></li>
                            <li><a href="/complaint-letter">Sample Complaint Letter</a></li>
                          </ul>
                        </li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/crime-prison"
                            href="#"
                            >Crime and Prisons</a
                          >

                          <ul>
                            <li><a href="/crimes-against-children">Crimes Involving Children</a></li>
                            <li><a href="/prisons">Prisons and Prisoners</a></li>
                            <li><a href="/report-crime">Reporting Crime</a></li>
                            <li><a href="/corrections">State Corrections Departments</a></li>
                          </ul>
                        </li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/laws-and-regs"
                            href="#"
                            >Federal Laws and Regulations</a
                          >

                          <ul>
                            <li><a href="/branches-of-government">Branches of the U.S. Government</a></li>
                            <li><a href="/laws-and-regulations">Commonly Requested U.S. Laws and Regulations</a></li>
                            <li><a href="/how-laws-are-made">How Laws Are Made and How to Research Them</a></li>
                            <li><a href="/pollution">Pollution Issues</a></li>
                          </ul>
                        </li>
                        <li><a href="/labor-laws">Labor Laws and Issues</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/family"
                            href="#"
                            >Personal Legal Issues, Documents, and Family History</a
                          >

                          <ul>
                            <li><a href="/child-care">Child Support</a></li>
                            <li><a href="/complaints">Complaints</a></li>
                            <li><a href="/family-legal">Family Legal Issues</a></li>
                            <li><a href="/genealogy">Genealogy and Family History</a></li>
                            <li><a href="/legal-aid">Lawyers and Legal Advice</a></li>
                            <li><a href="/replace-vital-documents">Replace Your Vital Records</a></li>
                          </ul>
                        </li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/scams-and-frauds"
                            href="#"
                            >Scams and Frauds</a
                          >

                          <ul>
                            <li><a href="/common-scams-frauds">Common Scams and Frauds</a></li>
                            <li><a href="/housing-scams">Housing Scams</a></li>
                            <li><a href="/identity-theft">Identity Theft</a></li>
                            <li><a href="/irs-scams">IRS Scams</a></li>
                            <li><a href="/online-safety">Online Safety</a></li>
                            <li><a href="/privacy">Privacy</a></li>
                            <li><a href="/stop-scams-frauds">Report Scams and Frauds</a></li>
                          </ul>
                        </li>
                        <li><a href="/government-works">U.S. Government Works</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/voting-laws-history"
                            href="#"
                            >Voting and Election Laws and History</a
                          >

                          <ul>
                            <li><a href="/election-results">Historical Election Results</a></li>
                            <li><a href="/voter-id">Voter ID Requirements</a></li>
                            <li><a href="/voting-laws">Voting and Election Laws</a></li>
                            <li><a href="/who-can-vote">Who Can and Can’t Vote in U.S. Elections</a></li>
                          </ul>
                        </li>
                        <li><a href="/disability-rights">Your Legal Disability Rights</a></li>
                      </ul>
                    </li>
                    <li><a href="/life-in-the-us">Learn About Life in the U.S.</a></li>
                    <li><a href="/presidents">Presidents, Vice Presidents, and First Ladies</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/benefits-grants-loans"
                    href="#"
                    >Benefits, Grants, Loans</a
                  >

                  <ul>
                    <li><a href="/finding-home">Affordable Rental Housing</a></li>
                    <li><a href="/benefits">Benefits</a></li>
                    <li><a href="/financial-aid">Financial Aid for Students</a></li>
                    <li><a href="/food-help">Food Assistance</a></li>
                    <li><a href="/grants">Grants and Loans</a></li>
                    <li><a href="/help-with-bills">Help with Bills</a></li>
                    <li><a href="/military-assistance">Military Programs and Benefits</a></li>
                    <li><a href="/retirement">Retirement</a></li>
                    <li><a href="/about-social-security">Social Security Questions</a></li>
                    <li><a href="/state-social-services">State Social Service Agencies</a></li>
                    <li><a href="/unemployment">Unemployment Help</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/consumer"
                    href="#"
                    >Consumer Issues</a
                  >

                  <ul>
                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/complaints"
                        href="#"
                        >Complaints</a
                      >

                      <ul>
                        <li><a href="/complaint-against-government">Complaints Against the Government</a></li>
                        <li><a href="/consumer-complaints">Consumer Complaints</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/complaints-by-product"
                            href="#"
                            >Consumer Complaints by Product Type</a
                          >

                          <ul>
                            <li><a href="/complaints-lender">Banks and Lender Complaints</a></li>
                            <li><a href="/car-complaints">Car Complaints</a></li>
                            <li><a href="/housing-complaints">Housing-Related Complaints</a></li>
                            <li><a href="/phone-tv-complaints">Phone and TV Complaints</a></li>
                            <li><a href="/travel-complaint">Travel Complaints</a></li>
                            <li><a href="/post-office">U.S. Postal Service Issues</a></li>
                          </ul>
                        </li>
                        <li><a href="/complaint-letter">Sample Complaint Letter</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/money"
                        href="#"
                        >Money and Taxes</a
                      >

                      <ul>
                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/benefits-grants-loans"
                            href="#"
                            >Benefits, Grants, Loans</a
                          >

                          <ul>
                            <li><a href="/finding-home">Affordable Rental Housing</a></li>
                            <li><a href="/benefits">Benefits</a></li>
                            <li><a href="/financial-aid">Financial Aid for Students</a></li>
                            <li><a href="/food-help">Food Assistance</a></li>
                            <li><a href="/grants">Grants and Loans</a></li>
                            <li><a href="/help-with-bills">Help with Bills</a></li>
                            <li><a href="/military-assistance">Military Programs and Benefits</a></li>
                            <li><a href="/retirement">Retirement</a></li>
                            <li><a href="/about-social-security">Social Security Questions</a></li>
                            <li><a href="/state-social-services">State Social Service Agencies</a></li>
                            <li><a href="/unemployment">Unemployment Help</a></li>
                          </ul>
                        </li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/credit-and-debt"
                            href="#"
                            >Credit and Debt</a
                          >

                          <ul>
                            <li><a href="/credit">Credit Issues</a></li>
                            <li><a href="/credit-reports">Credit Reports and Scores</a></li>
                            <li><a href="/debt">Dealing with Debt</a></li>
                          </ul>
                        </li>
                        <li><a href="/currency">Currency</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/housing"
                            href="#"
                            >Housing</a
                          >

                          <ul>
                            <li><a href="/finding-home">Affordable Rental Housing</a></li>
                            <li><a href="/foreclosure">Foreclosure</a></li>
                            <li><a href="/buying-home">Help Buying a Home</a></li>
                            <li><a href="/housing-help-audiences">Housing Help</a></li>
                            <li><a href="/housing-scams">Housing Scams</a></li>
                            <li><a href="/housing-complaints">Housing-Related Complaints</a></li>
                            <li><a href="/mortgages">Mortgages</a></li>
                            <li><a href="/moving">Moving</a></li>
                            <li><a href="/repairing-home">Repairing and Improving a Home</a></li>
                            <li><a href="/post-office">U.S. Postal Service Issues</a></li>
                          </ul>
                        </li>
                        <li><a href="/retirement">Retirement</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/spend-save-invest"
                            href="#"
                            >Spending, Saving and Investing</a
                          >

                          <ul>
                            <li><a href="/cars">Car Complaints and Motor Vehicle Services</a></li>
                            <li><a href="/donate-to-charity">Donating to Charity</a></li>
                            <li><a href="/mortgages">Mortgages</a></li>
                            <li><a href="/retirement">Retirement</a></li>
                          </ul>
                        </li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/taxes"
                            href="#"
                            >Taxes</a
                          >

                          <ul>
                            <li>
                              <a href="/covid-stimulus-checks"
                                >Advance Child Tax Credit and Economic Impact Payments - Stimulus Checks</a
                              >
                            </li>
                            <li><a href="/filing-taxes-topics">Filing Your Taxes</a></li>
                            <li><a href="/irs-scams">IRS Scams</a></li>
                            <li><a href="/resolve-tax-disputes">Resolve Tax Disputes</a></li>
                            <li><a href="/business-taxes">Small Business Taxes</a></li>
                            <li><a href="/state-taxes">State and Local Taxes</a></li>
                            <li><a href="/check-tax-status">Tax Return Status</a></li>
                            <li><a href="/check-tax-withholding">Tax Withholding</a></li>
                          </ul>
                        </li>
                        <li><a href="/unclaimed-money">Unclaimed Money from the Government</a></li>
                      </ul>
                    </li>
                    <li><a href="/recalls">Recalled Products</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/scams-and-frauds"
                        href="#"
                        >Scams and Frauds</a
                      >

                      <ul>
                        <li><a href="/common-scams-frauds">Common Scams and Frauds</a></li>
                        <li><a href="/housing-scams">Housing Scams</a></li>
                        <li><a href="/identity-theft">Identity Theft</a></li>
                        <li><a href="/irs-scams">IRS Scams</a></li>
                        <li><a href="/online-safety">Online Safety</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/stop-scams-frauds">Report Scams and Frauds</a></li>
                      </ul>
                    </li>
                    <li><a href="/state-consumer">State Consumer Protection Offices</a></li>
                    <li><a href="/telemarketing">Telemarketing and Unwanted Mail</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/coronavirus"
                    href="#"
                    >COVID-19</a
                  >

                  <ul>
                    <li>
                      <a href="/covid-stimulus-checks"
                        >Advance Child Tax Credit and Economic Impact Payments - Stimulus Checks</a
                      >
                    </li>
                    <li>
                      <a href="/covid-vaccine-and-testing">COVID-19 Health Information, Vaccines, and Testing</a>
                    </li>
                    <li><a href="/covid-small-business-loans">COVID-19 Small Business Loans and Assistance</a></li>
                    <li><a href="/covid-unemployment-benefits">COVID-19 Unemployment Benefits</a></li>
                    <li>
                      <a href="/covid-financial-help-from-the-government"
                        >Financial Assistance for Food, Housing, and Bills</a
                      >
                    </li>
                    <li><a href="/federal-covid-response">Government Response to Coronavirus, COVID-19</a></li>
                    <li>
                      <a href="/covid-passports-and-travel">Passports and Travel During the COVID-19 Pandemic</a>
                    </li>
                    <li><a href="/covid-scams">Scams Related to COVID-19</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/disability-services"
                    href="#"
                    >Disability Services</a
                  >

                  <ul>
                    <li><a href="/disability-benefits-insurance">Benefits and Insurance</a></li>
                    <li><a href="/disability-caregiver">Caregiver Support</a></li>
                    <li><a href="/disability-financial-support">Financial Assistance and Support Services</a></li>
                    <li><a href="/disability-programs">Government and Local Disability Programs</a></li>
                    <li><a href="/disability-jobs-education">Jobs and Education</a></li>
                    <li><a href="/disability-veterans-benefits">Veterans Disability Benefits</a></li>
                    <li><a href="/disability-rights">Your Legal Disability Rights</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/disasters-and-emergencies"
                    href="#"
                    >Disasters and Emergencies</a
                  >

                  <ul>
                    <li><a href="/after-disaster">After a Disaster</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/disaster-financial-help"
                        href="#"
                        >Disaster Financial Assistance</a
                      >

                      <ul>
                        <li>
                          <a href="/disaster-help-workers-businesses"
                            >Disaster Financial Assistance for Workers and Small Business Owners</a
                          >
                        </li>
                        <li>
                          <a href="/disaster-help-food-housing-bills"
                            >Disaster Financial Assistance with Food, Housing, and Bills</a
                          >
                        </li>
                        <li>
                          <a href="/disaster-area-help"
                            >Financial Assistance Within Designated Natural Disaster Areas</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li><a href="/help-disaster-survivors">Help Survivors of a Disaster</a></li>
                    <li><a href="/state-emergency-management">State Emergency Management Agencies</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/education"
                    href="#"
                    >Education</a
                  >

                  <ul>
                    <li><a href="/higher-education">College and Higher Education</a></li>
                    <li><a href="/financial-aid">Financial Aid for Students</a></li>
                    <li><a href="/study-in-US">Learn English and Attend College in the U.S.</a></li>
                    <li><a href="/libraries">Libraries and Archives</a></li>
                    <li><a href="/student-loans">Manage and Repay Student Loans</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/agencies"
                    href="#"
                    >Government Agencies and Elected Officials</a
                  >

                  <ul>
                    <li><a href="/federal-agencies">A-Z Index of U.S. Government Agencies</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/about-the-us"
                        href="#"
                        >About the U.S.</a
                      >

                      <ul>
                        <li><a href="/flag">American Flag</a></li>
                        <li><a href="/branches-of-government">Branches of the U.S. Government</a></li>
                        <li><a href="/budget">Budget of the U.S. Government</a></li>
                        <li><a href="/statistics">Data and Statistics About the U.S.</a></li>
                        <li><a href="/history">History and Historical Documents</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/laws"
                            href="#"
                            >Laws and Legal Issues</a
                          >

                          <ul>
                            <li><a href="/complaints">Complaints</a></li>
                            <li><a href="/crime-prison">Crime and Prisons</a></li>
                            <li><a href="/laws-and-regs">Federal Laws and Regulations</a></li>
                            <li><a href="/labor-laws">Labor Laws and Issues</a></li>
                            <li><a href="/family">Personal Legal Issues, Documents, and Family History</a></li>
                            <li><a href="/scams-and-frauds">Scams and Frauds</a></li>
                            <li><a href="/government-works">U.S. Government Works</a></li>
                            <li><a href="/voting-laws-history">Voting and Election Laws and History</a></li>
                            <li><a href="/disability-rights">Your Legal Disability Rights</a></li>
                          </ul>
                        </li>
                        <li><a href="/life-in-the-us">Learn About Life in the U.S.</a></li>
                        <li><a href="/presidents">Presidents, Vice Presidents, and First Ladies</a></li>
                      </ul>
                    </li>
                    <li><a href="/branches-of-government">Branches of the U.S. Government</a></li>
                    <li><a href="/budget">Budget of the U.S. Government</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/buy-from-government"
                        href="#"
                        >Buying from the U.S. Government</a
                      >

                      <ul>
                        <li><a href="/auctions-and-sales">Auctions and Sales</a></li>
                        <li><a href="/state-surplus-sales">Surplus Sales by State</a></li>
                      </ul>
                    </li>
                    <li><a href="/elected-officials">Contact Elected Officials</a></li>
                    <li><a href="/forms">Forms, by Agency</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/state-tribal-governments"
                        href="#"
                        >State, Local, and Tribal Governments</a
                      >

                      <ul>
                        <li><a href="/elected-officials">Contact Elected Officials</a></li>
                        <li><a href="/state-governor">Governors</a></li>
                        <li><a href="/tribes">Indian Tribes and Resources for Native Americans</a></li>
                        <li><a href="/local-governments">Local Governments</a></li>
                        <li><a href="/state-attorney-general">State Attorneys General</a></li>
                        <li><a href="/state-consumer">State Consumer Protection Offices</a></li>
                        <li><a href="/state-emergency-management">State Emergency Management Agencies</a></li>
                        <li><a href="/states-and-territories">State Governments</a></li>
                        <li><a href="/state-health">State Health Departments</a></li>
                        <li><a href="/state-courts">State, County, and Municipal Courts</a></li>
                        <li><a href="/state-travel-and-tourism">Travel and Tourism Information, by State</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/health"
                    href="#"
                    >Health</a
                  >

                  <ul>
                    <li><a href="/doctors">Doctors and Medical Facilities</a></li>
                    <li><a href="/health-resources">Health Information from the Government</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/health-insurance"
                        href="#"
                        >Health Insurance</a
                      >

                      <ul>
                        <li><a href="/finding-health-insurance">Finding Health Insurance</a></li>
                        <li><a href="/medicaid">Medicaid and CHIP</a></li>
                        <li><a href="/medicare">Medicare</a></li>
                        <li><a href="/paying-for-medical">Paying for Medical Care</a></li>
                      </ul>
                    </li>
                    <li><a href="/medicine">Medications</a></li>
                    <li><a href="/mental-health-substance-abuse">Mental Health and Substance Abuse</a></li>
                    <li><a href="/state-health">State Health Departments</a></li>
                    <li><a href="/vaccinations">Vaccines and Immunizations</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/housing"
                    href="#"
                    >Housing</a
                  >

                  <ul>
                    <li><a href="/finding-home">Affordable Rental Housing</a></li>
                    <li><a href="/foreclosure">Foreclosure</a></li>
                    <li><a href="/buying-home">Help Buying a Home</a></li>
                    <li><a href="/housing-help-audiences">Housing Help</a></li>
                    <li><a href="/housing-scams">Housing Scams</a></li>
                    <li><a href="/housing-complaints">Housing-Related Complaints</a></li>
                    <li><a href="/mortgages">Mortgages</a></li>
                    <li><a href="/moving">Moving</a></li>
                    <li><a href="/repairing-home">Repairing and Improving a Home</a></li>
                    <li><a href="/post-office">U.S. Postal Service Issues</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/jobs-and-unemployment"
                    href="#"
                    >Jobs and Unemployment</a
                  >

                  <ul>
                    <li><a href="/labor-laws">Labor Laws and Issues</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/job-search"
                        href="#"
                        >Looking for a New Job</a
                      >

                      <ul>
                        <li><a href="/government-jobs">Find a Federal Government Job</a></li>
                        <li><a href="/find-a-job">Find a Job</a></li>
                      </ul>
                    </li>
                    <li><a href="/retirement">Retirement</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/business"
                        href="#"
                        >Small Business</a
                      >

                      <ul>
                        <li><a href="/business-search">Business Keyword Search</a></li>
                        <li><a href="/funding-options">Finance Your Business</a></li>
                        <li><a href="/import-export">Importing and Exporting</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/government-contracting-for-beginners"
                            href="#"
                            >Introduction to Government Contracting</a
                          >

                          <ul>
                            <li><a href="/expand-business">Get Help with Government Contracting</a></li>
                            <li>
                              <a href="/find-government-contracts"
                                >The Contract Opportunities Search Tool on beta.SAM.gov</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li><a href="/business-taxes">Small Business Taxes</a></li>
                        <li><a href="/start-business">Start Your Own Business</a></li>
                        <li><a href="/state-business">State Business Resources</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/federal-employees"
                        href="#"
                        >U.S. Government Employees</a
                      >

                      <ul>
                        <li><a href="/government-jobs">Find a Federal Government Job</a></li>
                        <li><a href="/benefits-for-federal-employees">Pay and Benefits for Federal Employees</a></li>
                        <li><a href="/safer-federal-workforce">Protecting the Federal Workforce from COVID-19</a></li>
                      </ul>
                    </li>
                    <li><a href="/unemployment">Unemployment Help</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/laws"
                    href="#"
                    >Laws and Legal Issues</a
                  >

                  <ul>
                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/complaints"
                        href="#"
                        >Complaints</a
                      >

                      <ul>
                        <li><a href="/complaint-against-government">Complaints Against the Government</a></li>
                        <li><a href="/consumer-complaints">Consumer Complaints</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/complaints-by-product"
                            href="#"
                            >Consumer Complaints by Product Type</a
                          >

                          <ul>
                            <li><a href="/complaints-lender">Banks and Lender Complaints</a></li>
                            <li><a href="/car-complaints">Car Complaints</a></li>
                            <li><a href="/housing-complaints">Housing-Related Complaints</a></li>
                            <li><a href="/phone-tv-complaints">Phone and TV Complaints</a></li>
                            <li><a href="/travel-complaint">Travel Complaints</a></li>
                            <li><a href="/post-office">U.S. Postal Service Issues</a></li>
                          </ul>
                        </li>
                        <li><a href="/complaint-letter">Sample Complaint Letter</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/crime-prison"
                        href="#"
                        >Crime and Prisons</a
                      >

                      <ul>
                        <li><a href="/crimes-against-children">Crimes Involving Children</a></li>
                        <li><a href="/prisons">Prisons and Prisoners</a></li>
                        <li><a href="/report-crime">Reporting Crime</a></li>
                        <li><a href="/corrections">State Corrections Departments</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/laws-and-regs"
                        href="#"
                        >Federal Laws and Regulations</a
                      >

                      <ul>
                        <li><a href="/branches-of-government">Branches of the U.S. Government</a></li>
                        <li><a href="/laws-and-regulations">Commonly Requested U.S. Laws and Regulations</a></li>
                        <li><a href="/how-laws-are-made">How Laws Are Made and How to Research Them</a></li>
                        <li><a href="/pollution">Pollution Issues</a></li>
                      </ul>
                    </li>
                    <li><a href="/labor-laws">Labor Laws and Issues</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/family"
                        href="#"
                        >Personal Legal Issues, Documents, and Family History</a
                      >

                      <ul>
                        <li><a href="/child-care">Child Support</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/complaints"
                            href="#"
                            >Complaints</a
                          >

                          <ul>
                            <li><a href="/complaint-against-government">Complaints Against the Government</a></li>
                            <li><a href="/consumer-complaints">Consumer Complaints</a></li>
                            <li><a href="/complaints-by-product">Consumer Complaints by Product Type</a></li>
                            <li><a href="/complaint-letter">Sample Complaint Letter</a></li>
                          </ul>
                        </li>
                        <li><a href="/family-legal">Family Legal Issues</a></li>
                        <li><a href="/genealogy">Genealogy and Family History</a></li>
                        <li><a href="/legal-aid">Lawyers and Legal Advice</a></li>
                        <li><a href="/replace-vital-documents">Replace Your Vital Records</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/scams-and-frauds"
                        href="#"
                        >Scams and Frauds</a
                      >

                      <ul>
                        <li><a href="/common-scams-frauds">Common Scams and Frauds</a></li>
                        <li><a href="/housing-scams">Housing Scams</a></li>
                        <li><a href="/identity-theft">Identity Theft</a></li>
                        <li><a href="/irs-scams">IRS Scams</a></li>
                        <li><a href="/online-safety">Online Safety</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/stop-scams-frauds">Report Scams and Frauds</a></li>
                      </ul>
                    </li>
                    <li><a href="/government-works">U.S. Government Works</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/voting-laws-history"
                        href="#"
                        >Voting and Election Laws and History</a
                      >

                      <ul>
                        <li><a href="/election-results">Historical Election Results</a></li>
                        <li><a href="/voter-id">Voter ID Requirements</a></li>
                        <li><a href="/voting-laws">Voting and Election Laws</a></li>
                        <li><a href="/who-can-vote">Who Can and Can’t Vote in U.S. Elections</a></li>
                      </ul>
                    </li>
                    <li><a href="/disability-rights">Your Legal Disability Rights</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/military-and-veterans"
                    href="#"
                    >Military and Veterans</a
                  >

                  <ul>
                    <li><a href="/join-military">Join the Military</a></li>
                    <li>
                      <a href="/military-personnel-and-installations">Locate Military Members, Units, and Facilities</a>
                    </li>
                    <li><a href="/education-military-veterans">Military and Veterans Education Benefits</a></li>
                    <li><a href="/military-pay">Military Pay and Pensions</a></li>
                    <li><a href="/military-assistance">Military Programs and Benefits</a></li>
                    <li><a href="/military-records">Military Records and Identification</a></li>
                    <li><a href="/selective-service">Selective Service (the Draft)</a></li>
                    <li><a href="/veteran-burial-benefits">Veterans Burial and Survivor Benefits</a></li>
                    <li><a href="/veteran-health">Veterans Health Benefits and Issues</a></li>
                    <li><a href="/veteran-housing">Veterans Housing Help</a></li>
                    <li><a href="/veteran-employment">Veterans Jobs and Training</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/money"
                    href="#"
                    >Money and Taxes</a
                  >

                  <ul>
                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/benefits-grants-loans"
                        href="#"
                        >Benefits, Grants, Loans</a
                      >

                      <ul>
                        <li><a href="/finding-home">Affordable Rental Housing</a></li>
                        <li><a href="/benefits">Benefits</a></li>
                        <li><a href="/financial-aid">Financial Aid for Students</a></li>
                        <li><a href="/food-help">Food Assistance</a></li>
                        <li><a href="/grants">Grants and Loans</a></li>
                        <li><a href="/help-with-bills">Help with Bills</a></li>
                        <li><a href="/military-assistance">Military Programs and Benefits</a></li>
                        <li><a href="/retirement">Retirement</a></li>
                        <li><a href="/about-social-security">Social Security Questions</a></li>
                        <li><a href="/state-social-services">State Social Service Agencies</a></li>
                        <li><a href="/unemployment">Unemployment Help</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/consumer"
                        href="#"
                        >Consumer Issues</a
                      >

                      <ul>
                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/complaints"
                            href="#"
                            >Complaints</a
                          >

                          <ul>
                            <li><a href="/complaint-against-government">Complaints Against the Government</a></li>
                            <li><a href="/consumer-complaints">Consumer Complaints</a></li>
                            <li><a href="/complaints-by-product">Consumer Complaints by Product Type</a></li>
                            <li><a href="/complaint-letter">Sample Complaint Letter</a></li>
                          </ul>
                        </li>
                        <li><a href="/recalls">Recalled Products</a></li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/scams-and-frauds"
                            href="#"
                            >Scams and Frauds</a
                          >

                          <ul>
                            <li><a href="/common-scams-frauds">Common Scams and Frauds</a></li>
                            <li><a href="/housing-scams">Housing Scams</a></li>
                            <li><a href="/identity-theft">Identity Theft</a></li>
                            <li><a href="/irs-scams">IRS Scams</a></li>
                            <li><a href="/online-safety">Online Safety</a></li>
                            <li><a href="/privacy">Privacy</a></li>
                            <li><a href="/stop-scams-frauds">Report Scams and Frauds</a></li>
                          </ul>
                        </li>
                        <li><a href="/state-consumer">State Consumer Protection Offices</a></li>
                        <li><a href="/telemarketing">Telemarketing and Unwanted Mail</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/credit-and-debt"
                        href="#"
                        >Credit and Debt</a
                      >

                      <ul>
                        <li><a href="/credit">Credit Issues</a></li>
                        <li><a href="/credit-reports">Credit Reports and Scores</a></li>
                        <li><a href="/debt">Dealing with Debt</a></li>
                      </ul>
                    </li>
                    <li><a href="/currency">Currency</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/housing"
                        href="#"
                        >Housing</a
                      >

                      <ul>
                        <li><a href="/finding-home">Affordable Rental Housing</a></li>
                        <li><a href="/foreclosure">Foreclosure</a></li>
                        <li><a href="/buying-home">Help Buying a Home</a></li>
                        <li><a href="/housing-help-audiences">Housing Help</a></li>
                        <li><a href="/housing-scams">Housing Scams</a></li>
                        <li><a href="/housing-complaints">Housing-Related Complaints</a></li>
                        <li><a href="/mortgages">Mortgages</a></li>
                        <li><a href="/moving">Moving</a></li>
                        <li><a href="/repairing-home">Repairing and Improving a Home</a></li>
                        <li><a href="/post-office">U.S. Postal Service Issues</a></li>
                      </ul>
                    </li>
                    <li><a href="/retirement">Retirement</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/spend-save-invest"
                        href="#"
                        >Spending, Saving and Investing</a
                      >

                      <ul>
                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/cars"
                            href="#"
                            >Car Complaints and Motor Vehicle Services</a
                          >

                          <ul>
                            <li><a href="/car-complaints">Car Complaints</a></li>
                            <li><a href="/motor-vehicle-services">Motor Vehicle Services</a></li>
                          </ul>
                        </li>
                        <li><a href="/donate-to-charity">Donating to Charity</a></li>
                        <li><a href="/mortgages">Mortgages</a></li>
                        <li><a href="/retirement">Retirement</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/taxes"
                        href="#"
                        >Taxes</a
                      >

                      <ul>
                        <li>
                          <a href="/covid-stimulus-checks"
                            >Advance Child Tax Credit and Economic Impact Payments - Stimulus Checks</a
                          >
                        </li>

                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/filing-taxes-topics"
                            href="#"
                            >Filing Your Taxes</a
                          >

                          <ul>
                            <li><a href="/who-needs-to-file-taxes">Do You Need to File a Tax Return?</a></li>
                            <li><a href="/help-with-taxes">Get Help with Your Taxes</a></li>
                            <li><a href="/get-tax-forms">Get Your Tax Forms</a></li>
                            <li><a href="/file-taxes">How to File Your Federal Taxes</a></li>
                            <li><a href="/business-taxes">Small Business Taxes</a></li>
                            <li><a href="/state-taxes">State and Local Taxes</a></li>
                            <li><a href="/tax-benefits">Tax Credits and Deductions</a></li>
                          </ul>
                        </li>
                        <li><a href="/irs-scams">IRS Scams</a></li>
                        <li><a href="/resolve-tax-disputes">Resolve Tax Disputes</a></li>
                        <li><a href="/business-taxes">Small Business Taxes</a></li>
                        <li><a href="/state-taxes">State and Local Taxes</a></li>
                        <li><a href="/check-tax-status">Tax Return Status</a></li>
                        <li><a href="/check-tax-withholding">Tax Withholding</a></li>
                      </ul>
                    </li>
                    <li><a href="/unclaimed-money">Unclaimed Money from the Government</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/business"
                    href="#"
                    >Small Business</a
                  >

                  <ul>
                    <li><a href="/business-search">Business Keyword Search</a></li>
                    <li><a href="/funding-options">Finance Your Business</a></li>
                    <li><a href="/import-export">Importing and Exporting</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/government-contracting-for-beginners"
                        href="#"
                        >Introduction to Government Contracting</a
                      >

                      <ul>
                        <li><a href="/expand-business">Get Help with Government Contracting</a></li>
                        <li>
                          <a href="/find-government-contracts"
                            >The Contract Opportunities Search Tool on beta.SAM.gov</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li><a href="/business-taxes">Small Business Taxes</a></li>
                    <li><a href="/start-business">Start Your Own Business</a></li>
                    <li><a href="/state-business">State Business Resources</a></li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/travel-and-immigration"
                    href="#"
                    >Travel and Immigration</a
                  >

                  <ul>
                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/immigration-and-citizenship"
                        href="#"
                        >Immigration and Citizenship</a
                      >

                      <ul>
                        <li><a href="/deportation">Deportation</a></li>
                        <li><a href="/green-cards">Green Cards and Permanent Residence in the U.S.</a></li>
                        <li><a href="/become-us-citizen">How to Apply for U.S. Citizenship</a></li>
                        <li><a href="/enter-us">How to Enter the U.S.</a></li>
                        <li><a href="/renounce-lose-citizenship">Renounce or Lose Your U.S. Citizenship</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/travel-abroad"
                        href="#"
                        >Passports and International Travel</a
                      >

                      <ul>
                        <li><a href="/passport">Getting or Renewing a U.S. Passport</a></li>
                        <li><a href="/americans-abroad">International Travel Issues</a></li>
                        <li><a href="/family-outside-us">Issues with Family Outside the U.S.</a></li>
                        <li>
                          <a href="/covid-passports-and-travel">Passports and Travel During the COVID-19 Pandemic</a>
                        </li>
                        <li><a href="/travel-complaint">Travel Complaints</a></li>
                        <li><a href="/passport-problems">U.S. Passport Fees, Facilities or Problems</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/recreation-and-travel"
                        href="#"
                        >Recreation and Travel within the U.S.</a
                      >

                      <ul>
                        <li class="">
                          <a
                            aria-describedby="sr-next"
                            aria-expanded="false"
                            data-href="/cars"
                            href="#"
                            >Car Complaints and Motor Vehicle Services</a
                          >

                          <ul>
                            <li><a href="/car-complaints">Car Complaints</a></li>
                            <li><a href="/motor-vehicle-services">Motor Vehicle Services</a></li>
                          </ul>
                        </li>
                        <li><a href="/recreation">Recreational Areas and Activities</a></li>
                        <li><a href="/state-travel-and-tourism">Travel and Tourism Information, by State</a></li>
                        <li><a href="/plane-travel">Travel by Plane</a></li>
                        <li><a href="/travel-complaint">Travel Complaints</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/visas-and-visitors"
                        href="#"
                        >Visas and Visiting the U.S.</a
                      >

                      <ul>
                        <li><a href="/visas">Apply for Nonimmigrant Visas to the U.S.</a></li>
                        <li><a href="/visitors-driving">Foreign Nationals Driving in the U.S.</a></li>
                        <li><a href="/study-in-US">Learn English and Attend College in the U.S.</a></li>
                        <li><a href="/visa-problems">Visa Status, Renewals, or Problems</a></li>
                        <li><a href="/visitors">Visitors Living in the U.S.</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li class="">
                  <a
                    aria-describedby="sr-next"
                    aria-expanded="false"
                    data-href="/voting"
                    href="#"
                    >Voting and Elections</a
                  >

                  <ul>
                    <li>
                      <a href="/midterm-state-and-local-elections">Congressional, State, and Local Elections</a>
                    </li>
                    <li><a href="/voter-research">Decide Who to Vote For</a></li>
                    <li><a href="/election-office">Find My State or Local Election Office Website</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/how-to-vote"
                        href="#"
                        >How, Where, and When to Vote</a
                      >

                      <ul>
                        <li><a href="/absentee-voting">Absentee and Early Voting</a></li>
                        <li>
                          <a href="/voting-political-party"
                            >Do You Have to Vote for the Party You're Registered With?</a
                          >
                        </li>
                        <li><a href="/election-day">Voting on Election Day</a></li>
                        <li><a href="/who-can-vote">Who Can and Can’t Vote in U.S. Elections</a></li>
                      </ul>
                    </li>
                    <li><a href="/inauguration">Inauguration of the President of the United States</a></li>
                    <li><a href="/election">Presidential Election Process</a></li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/voter-registration"
                        href="#"
                        >Voter Registration</a
                      >

                      <ul>
                        <li><a href="/change-voter-registration">Change Your Voter Registration</a></li>
                        <li><a href="/confirm-voter-registration">Confirm You're Registered to Vote</a></li>
                        <li><a href="/voter-registration-card">How to Get a Voter Registration Card</a></li>
                        <li><a href="/register-to-vote">How to Register to Vote</a></li>
                      </ul>
                    </li>

                    <li class="">
                      <a
                        aria-describedby="sr-next"
                        aria-expanded="false"
                        data-href="/voting-laws-history"
                        href="#"
                        >Voting and Election Laws and History</a
                      >

                      <ul>
                        <li><a href="/election-results">Historical Election Results</a></li>
                        <li><a href="/voter-id">Voter ID Requirements</a></li>
                        <li><a href="/voting-laws">Voting and Election Laws</a></li>
                        <li><a href="/who-can-vote">Who Can and Can’t Vote in U.S. Elections</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul> -->
          <ul class="usa-nav__primary usa-accordion usa-accordion-escapable">
            <li class="usa-nav__primary-item">
              <a
                class="usa-nav__link"
                href="/#tpcs">
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
                class="usa-nav__submenu usa-megamenu">
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="/branches-of-government">Branches of the U.S. Government</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="/budget">Budget of the U.S. Government</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="/statistics">Data and Statistics About the U.S.</a>
                      </li>
                      <li class="topic-link topic-nav-flag">
                        <a
                          class="usa-button"
                          href="/about-the-us"
                          >About the U.S.</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/history">History and Historical Documents</a></li>
                      <li class="usa-nav__submenu-item"><a href="/flag">American Flag</a></li>
                      <li class="usa-nav__submenu-item"><a href="/life-in-the-us">Learn About Life in the U.S.</a></li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="/presidents">Presidents, Vice Presidents, and First Ladies</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="/agencies">Government Agencies and Elected Officials</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="/laws">Laws and Legal Issues</a></li>
                    </ul>
                  </div>
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
                class="usa-nav__submenu usa-megamenu">
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/benefits">Benefits</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="/state-social-services">State Social Service Agencies</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="/help-with-bills">Help with Bills</a></li>
                      <li class="topic-link topic-nav-benefit">
                        <a
                          class="usa-button"
                          href="/benefits-grants-loans"
                          >Benefits, Grants, Loans</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/grants">Grants and Loans</a></li>
                      <li class="usa-nav__submenu-item"><a href="/food-help">Food Assistance</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="/about-social-security">Social Security Questions</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/finding-home">Affordable Rental Housing</a></li>
                      <li class="usa-nav__submenu-item"><a href="/financial-aid">Financial Aid for Students</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="/military-assistance">Military Programs and Benefits</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/retirement">Retirement</a></li>
                      <li class="usa-nav__submenu-item"><a href="/unemployment">Unemployment Help</a></li>
                    </ul>
                  </div>
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
                class="usa-nav__submenu usa-megamenu">
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="/federal-agencies">A-Z Index of U.S. Government Agencies</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="/state-tribal-governments">State, Local, and Tribal Governments</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="/elected-officials">Contact Elected Officials</a></li>
                      <li class="topic-link topic-nav-agencies">
                        <a
                          class="usa-button"
                          href="/agencies"
                          >Government Agencies and Elected Officials</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="/forms">Forms, by Agency</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="/buy-from-government">Buying from the U.S. Government</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="/about-the-us">About the U.S.</a></li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="/branches-of-government">Branches of the U.S. Government</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="/budget">Budget of the U.S. Government</a></li>
                    </ul>
                  </div>
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
                class="usa-nav__submenu usa-megamenu">
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/job-search">Looking for a New Job</a></li>
                      <li class="usa-nav__submenu-item"><a href="/unemployment">Unemployment Help</a></li>
                      <li class="usa-nav__submenu-item"><a href="/labor-laws">Labor Laws and Issues</a></li>
                      <li class="topic-link topic-nav-job">
                        <a
                          class="usa-button"
                          href="/jobs-and-unemployment"
                          >Jobs and Unemployment</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/federal-employees">U.S. Government Employees</a></li>
                      <li class="usa-nav__submenu-item"><a href="/retirement">Retirement</a></li>
                      <li class="usa-nav__submenu-item"><a href="/business">Small Business</a></li>
                    </ul>
                  </div>
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
                class="usa-nav__submenu usa-megamenu">
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/taxes">Taxes</a></li>
                      <li class="usa-nav__submenu-item"><a href="/credit-and-debt">Credit and Debt</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="/spend-save-invest">Spending, Saving and Investing</a>
                      </li>
                      <li class="topic-link topic-nav-tax">
                        <a
                          class="usa-button"
                          href="/money"
                          >Money and Taxes</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="/unclaimed-money">Unclaimed Money from the Government</a>
                      </li>
                      <li class="usa-nav__submenu-item"><a href="/currency">Currency</a></li>
                      <li class="usa-nav__submenu-item">
                        <a href="/benefits-grants-loans">Benefits, Grants, Loans</a>
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item"><a href="/consumer">Consumer Issues</a></li>
                      <li class="usa-nav__submenu-item"><a href="/housing">Housing</a></li>
                      <li class="usa-nav__submenu-item"><a href="/retirement">Retirement</a></li>
                    </ul>
                  </div>
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
                class="usa-nav__submenu usa-megamenu">
                <div class="grid-row grid-gap-4">
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="/travel-abroad">Passports and International Travel</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="/immigration-and-citizenship">Immigration and Citizenship</a>
                      </li>
                      <li class="usa-nav__submenu-item">
                        <a href="/visas-and-visitors">Visas and Visiting the U.S.</a>
                      </li>
                      <li class="topic-link topic-nav-globe">
                        <a
                          class="usa-button"
                          href="/travel-and-immigration"
                          >Travel and Immigration</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="usa-col">
                    <ul class="usa-nav__submenu-list">
                      <li class="usa-nav__submenu-item">
                        <a href="/recreation-and-travel">Recreation and Travel within the U.S.</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style
  lang="scss"
  scoped></style>
