<template>
  <client-only>
    <nav v-if="trimmedFullPath !=='/'" class="usa-breadcrumb" aria-label="Breadcrumbs,,">
      <ol class="usa-breadcrumb__list"
        vocab="http://schema.org/"
        typeof="BreadcrumbList">
        <li class="usa-breadcrumb__list-item"
          property="itemListElement" typeof="ListItem">
          <nuxt-link class="usa-breadcrumb__link" property="item" typeof="WebPage"
            to="/">
            <span property="name">Home</span>
          </nuxt-link>
          <meta property="position" content="1" />
        </li>
        <li v-for="(crumb, index) in crumbs"
          :key="index"
          class="usa-breadcrumb__list-item"
          property="itemListElement"
          typeof="ListItem">
          <template v-if="trimmedFullPath === crumb.path">
            <span property="name">{{
              trimmedFullPath === crumb.path && title !== null ? title : crumb.title
            }}</span>
          </template>
          <template v-else>
            <nuxt-link class="usa-breadcrumb__link" property="item" typeof="WebPage"
              :to="crumb.path">
              <span property="name">{{
                trimmedFullPath === crumb.path && title !== null ? title : crumb.title
              }}</span>
            </nuxt-link>
          </template>
          <meta property="position" :content="index + 2" />
        </li>
      </ol>
    </nav>
  </client-only>
</template>

<script>

const _ = require('lodash');

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    trimmedFullPath () {
      return _.trimEnd(_.escapeRegExp(this.$route.fullPath), '/')
    },
    crumbs () {
      const segments = this.trimmedFullPath.substring(1).split('/');
      const crumbs = [];
      let path = '';
      segments.forEach((segment, index) => {
        path = `${path}/${segment}`;
        const match = this.$router.match(path);
        crumbs.push({
          title: _.startCase(segment),
          ...match,
        });
      });
      return crumbs;
    },
  },
}
</script>
