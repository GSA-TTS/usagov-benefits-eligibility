<template>
  <nav v-show="$route.fullPath !=='/'" class="usa-breadcrumb" aria-label="Breadcrumbs,,">
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
        <template v-if="$route.fullPath === crumb.path">
          <span property="name">{{
            $route.fullPath === crumb.path && title !== null ? title : crumb.title
          }}</span>
        </template>
        <template v-else>
          <nuxt-link class="usa-breadcrumb__link" property="item" typeof="WebPage"
            :to="crumb.path">
            <span property="name">{{
              $route.fullPath === crumb.path && title !== null ? title : crumb.title
            }}</span>
          </nuxt-link>
          <meta property="position" :content="index + 2" />
        </template>
      </li>
    </ol>
  </nav>
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
    crumbs () {
      const fullPath = _.escapeRegExp(this.$route.fullPath);
      const segments = fullPath.substring(1).split('/');
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
