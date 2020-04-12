<template>
  <button class="button" :class="[variant, stretch ? 'stretch' : '']">
    <span v-if="icon && iconPosition == 'left'" class="icon">
      <i class="material-icons">{{icon}}</i>
    </span>
    <span>{{text}}</span>
    <span v-if="icon && iconPosition == 'right'" class="icon">
      <i class="material-icons">{{icon}}</i>
    </span>
  </button>
</template>

<script>
export default {
  name: "h-button",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    icon: {
      type: String,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function(val) {
        return ["left", "right"].indexOf(val) !== -1;
      },
    },
    stretch: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      validator: function(val) {
        return ["purple", "red", "login"].indexOf(val) !== -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.button {
  font-size: 16px;
  font-weight: 700;
  color: white;
  opacity: 0.85;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    color: white;
  }
}

.stretch {
  width: 100%;
  height: 100%;
}

.login {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: transparent;
  border: 1px solid white;
  opacity: 1;
  padding: 0 1.5em;

  .material-icons {
    font-size: 13px;
  }

  &:hover {
    background-color: white;
    color: $hostingerPurple;
  }
}

.purple {
  background-color: $hostingerPurple;
  border: 1px solid $hostingerPurple;

  &:hover {
    border: 1px solid $hostingerPurple;
  }
}

.red {
  background-color: $hostingerRed;
  border: 1px solid $hostingerRed;

  &:hover {
    border: 1px solid $hostingerRed;
  }
}
</style>