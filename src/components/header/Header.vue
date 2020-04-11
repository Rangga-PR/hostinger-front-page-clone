<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="#" class="navbar-item">
          <img :src="images.logo" alt="hostinger logo" width="150" height="28" />
        </a>
        <a class="lang center-content">
          <i class="material-icons">language</i>
          <span id="lang-text">{{content.lang}}</span>
        </a>
      </div>

      <div class="menu navbar-item">
        <a class="cart center-content">
          <i class="material-icons">shopping_cart</i>
        </a>
        <a role="button" class="burger center-content" v-on:click="toggleMobileMenu">
          <i class="material-icons">dehaze</i>
        </a>
      </div>
    </nav>

    <div class="mobile-menu" :class="[mobileMenuIsOpen ? '' : 'is-hidden']">
      <div class="clear-menu">
        <i class="material-icons" v-on:click="toggleMobileMenu">clear</i>
      </div>
      <a v-for="(menu, i) in content.mobile.menu" :key="`${menu.text + '-' + i}`" class="menu-item">
        <img
          v-if="menu.img && !menu.icon"
          class="menu-icon"
          :src="menu.img"
          :alt="`${menu.text} icon`"
        />
        <i v-else class="material-icons menu-icon">{{menu.icon}}</i>
        <p class="menu-text">{{menu.text}}</p>
      </a>
      <a href="#" class="menu-item">
        <i class="material-icons menu-icon">lock</i>
        <p class="menu-text">{{content.user.login}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "h-header",
  props: {
    content: Object,
  },
  data() {
    return {
      images: {
        logo: require("../../assets/hostinger-logo.webp"),
      },
      mobileMenuIsOpen: false,
    };
  },
  methods: {
    toggleMobileMenu: function() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.mobile-menu {
  position: relative;
  z-index: 1000;
  top: -7.5vh;
  left: 1.5%;
  width: 97vw;
  height: 85vh;
  border-radius: 5px;
  background-color: white;
  overflow: auto;
  padding: 10px;

  .menu-item {
    display: flex;
    margin-bottom: 30px;
    color: #43414f;
    padding: 0 25px;

    .menu-icon {
      margin-right: 20px;
      color: $hostingerPurple;
      width: 24px;
      height: 24px;
    }

    .menu-text {
      font-size: 12px;
      font-weight: 700;
      padding: 3px 0;
      letter-spacing: 1.5px;
    }
  }

  .clear-menu {
    display: flex;
    justify-content: flex-end;
  }
}

.navbar,
.menu {
  background-color: $hostingerPurple;
  display: flex;
  justify-content: space-between;

  .burger,
  .lang,
  .cart {
    color: white;
  }

  #lang-text {
    font-size: 12px;
  }

  .lang:hover {
    opacity: 1;
  }

  .lang {
    transition: 0.3s;
    opacity: 0.7;
  }

  @media only screen and (min-width: 1024px) {
    .burger {
      display: none;
    }
  }
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.is-hidden {
  display: none;
}
</style>
