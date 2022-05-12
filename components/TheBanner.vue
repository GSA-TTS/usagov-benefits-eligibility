<template>
  <section
    class="usa-banner"
    aria-label="Official government website">
    <div class="usa-accordion">
      <header class="usa-banner__header">
        <div class="usa-banner__inner">
          <div class="grid-col-auto">
            <img
              class="usa-banner__header-flag"
              src="@/assets/img/us_flag_small.png"
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
        class="usa-banner__content usa-accordion__content"
        hidden>
        <div class="grid-row grid-gap-lg">
          <div class="usa-banner__guidance tablet:grid-col-6">
            <img
              class="usa-banner__icon usa-media-block__img"
              src="@/assets/img/icon-dot-gov.svg"
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
              src="@/assets/img/icon-https.svg"
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
</template>

<script>
export default {
  name: "TheBanner",
}
</script>
