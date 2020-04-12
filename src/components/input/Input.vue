<template>
  <div>
    <p v-if="icon" class="control has-icons-right">
      <input class="input" :class="[`is-${size}`]" :type="type" :placeholder="placeholder" />
      <span v-if="icon" class="icon is-small is-right">
        <i class="material-icons">{{icon}}</i>
      </span>
    </p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "h-input",
  props: {
    icon: String,
    placeholder: String,
    stretch: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
      validator: function(val) {
        return ["text", "password", "email", "tel"].indexOf(val) !== -1;
      },
    },
    size: {
      type: String,
      default: "normal",
      validator: function(val) {
        return ["small", "normal", "medium", "large"].indexOf(val) !== -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.stretch {
  width: 100%;
  height: 100%;
}
</style>