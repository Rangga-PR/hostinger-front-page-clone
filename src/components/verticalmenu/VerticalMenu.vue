<template>
  <div class="menu-container">
    <h5 class="menu-title">{{titleToUppercase}}</h5>
    <ul class="menu-list">
      <li v-for="(menu, i) in menus.submenu" :key="`${menu.title}-menu-${i}`" class="menu">
        <a :href="menu.link">{{menu.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vertical-menu",
  props: {
    menus: Object,
  },
  computed: {
    titleToUppercase: function() {
      return this.menus.title.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.menu-title,
.menu a {
  color: $hostingerLightGray;
}

.menu-list a {
  padding: 0.5rem 0;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    background-color: $hostingerDark;
    color: $hostingerLightGray;
    opacity: 0.5;
  }
}

.menu-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
</style>