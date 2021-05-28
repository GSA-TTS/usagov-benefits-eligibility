<template>
  <div>
    <!--<section class="usa-hero" aria-label="Introduction">
        <div class="grid-container">
          <div class="usa-hero__callout">
            <h1 class="usa-hero__heading">
              Find benefits to help you through life's most important events.
            </h1>
          </div>
        </div>
      </section>-->

    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-4">
          <h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0">
            Find benefits to help you through life's most important events.
          </h2>
        </div>
        <div class="tablet:grid-col-8 usa-prose">
          <p>
            Answer a few questions, and we’ll help you identify benefits,
            including financial help, services, and discounts, that you might
            qualify for. Then will point you in the right direction to apply for
            the benefits.
          </p>
          <p>
            If you know exactly what you are looking for, browse our Benefits by
            Topic.
          </p>
          <p>What kind of help are you looking for?</p>
        </div>
      </div>
    </section>

    <section class="usa-graphic-list usa-section usa-section--dark">
      <div class="grid-container">
        <div class="usa-graphic-list__row grid-row grid-gap">
          <div class="usa-media-block tablet:grid-col">
            <img
              class="usa-media-block__img"
              src="../assets/img/circle-124.png"
              alt="Alt text"/>
            <div class="usa-media-block__body">
              <h2 class="usa-graphic-list__heading">
                Bereavement & Death Benefits.
              </h2>
              <ul>
                <li>Burial help</li>
                <li>Financial help</li>
                <li>Insurance</li>
              </ul>
            </div>
          </div>
          <div class="usa-media-block tablet:grid-col">
            <img
              class="usa-media-block__img"
              src="../assets/img/circle-124.png"
              alt="Alt text"/>
            <div class="usa-media-block__body">
              <h2 class="usa-graphic-list__heading">Help for Older Adults</h2>
              <ul>
                <li>Health and medical</li>
                <li>Housing and food</li>
                <li>Financial help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="test-section-id" class="usa-section">
      <div class="grid-container">
        <h2 class="font-heading-xl margin-y-0">
          Example Rules Engine Results
        </h2>
        <Rules />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "default",
  data () {
    return {};
  }
};
</script>
