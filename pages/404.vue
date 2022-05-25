<template>
  <div class="grid-container">
    <div class="grid-row tablet:grid-gap print:display-block">
      <div class="tablet:grid-col-5 desktop:grid-col-4 padding-y-2 margin-top-0 padding-top-0">
        <div class="shade">
          <header>
            <h2>
              <a
                :href="$t('404.sidenav.linkOne')"
                class="url">
                <span>{{ $t("404.sidenav.linkOneText") }}</span>
              </a>
            </h2>
          </header>
          <ul>
            <li>
              <a
                :href="$t('404.sidenav.linkTwo')"
                class="url">
                <span>{{ $t("404.sidenav.linkTwoText") }}</span>
              </a>
            </li>

            <li>
              <a
                :href="$t('404.sidenav.linkThree')"
                class="url">
                <span>{{ $t("404.sidenav.linkThreeText") }}</span>
              </a>
            </li>

            <li>
              <a
                :href="$t('404.sidenav.linkFour')"
                class="url">
                <span>{{ $t("404.sidenav.linkFourText") }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tablet:margin-top-0 tablet:grid-col-7 desktop:grid-col-8 print:display-block tablet:padding-left-6">
        <h1 class="font-heading-lg tablet:font-heading-xl margin-top-0 text-secondary">{{ $t("404.heading") }}</h1>
        <p>
          {{ $t("404.paragraphOne") }}
        </p>
        <p v-html="$t('404.paragraphTwo')" />
        <p v-html="$t('404.paragraphThree')" />
        <div id="cntctbx">
          <h2 id="">{{ $t("404.contactBox.header") }}</h2>
          <p>
            {{ $t("404.contactBox.paragraph") }}
          </p>
          <ul>
            <li>
              <a :href="$t('404.contactBox.list.bulletOneLink')">{{ $t("404.contactBox.list.bulletOneText") }}</a>
            </li>
            <li>
              <a :href="$t('404.contactBox.list.bulletTwoLink')">{{ $t("404.contactBox.list.bulletTwoText") }}</a>
            </li>
          </ul>
        </div>
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
a {
  color: #154285;
  &:visited {
    color: #4b4b4d;
  }
}
#cntctbx {
  border: 1px solid #d9d9d9;
  margin: 0 0 25px 0;
  h2 {
    font-size: 130%;
    display: block;
    color: #4b4b4d;
    padding: 14px 0 14px 65px;
    margin: 0 auto 0 auto;
    height: auto;
    border-bottom: 1px solid #d9d9d9;
    background: #d9d9d9 url(https://www.usa.gov/images/Contact_Center_Icon.svg) left 10px top 3px no-repeat;
  }
  p {
    padding: 0 10px 0 25px;
  }
  ul {
    margin: 0 0 15px 15px;
    li {
      line-height: 20px;
      padding: 3px 0 9px 0;
    }
    a {
      padding: 5px 10px 5px 15px;
      line-height: 18px;
      text-decoration: none;
      display: block;
    }
  }
}
.shade {
  background: #ebe6de;
  padding: 1px 0 5px 0;
  header h2 {
    background: #fff;
    margin: 3px auto 0 auto;
    padding: 10px 10px 10px 0px;
    color: #154285;
    font-size: 130%;
    font-weight: bold;
    span:before {
      content: "< ";
      font-weight: normal;
    }
    a {
      color: #154285;
      text-decoration: none;
    }
  }
  ul {
    padding: 5px 0 0 0;
    margin: 0 0 10px 0;
    li {
      list-style-type: none;
      padding: 0 0 0 0;
      background: #ebe6de;
      line-height: 20px;
      a {
        padding: 5px 10px 5px 15px;
        line-height: 18px;
        margin: 0 0 0 6px;
        text-decoration: none;
        display: block;
      }
    }
  }
}
</style>
