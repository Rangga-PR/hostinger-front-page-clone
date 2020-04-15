<template>
  <div class="timer-container">
    <div class="triangle right"></div>
    <div class="timer-wrapper">
      <h1 class="is-counter">{{countDown.days}}</h1>
      <p>{{content.days}}</p>
    </div>
    <div class="timer-wrapper">
      <h1 class="is-counter">{{countDown.hours}}</h1>
      <p>{{content.hours}}</p>
    </div>
    <div class="timer-wrapper">
      <h1 class="is-counter">{{countDown.minutes}}</h1>
      <p>{{content.minutes}}</p>
    </div>
    <div class="timer-wrapper">
      <h1 class="is-counter">{{countDown.seconds}}</h1>
      <p>{{content.seconds}}</p>
    </div>
    <div class="triangle left"></div>
  </div>
</template>

<script>
export default {
  name: "h-timer",
  data() {
    return {
      countDown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  props: {
    content: Object,
    endDate: String,
  },
  mounted: function() {
    this.startCountDown(new Date(this.endDate).getTime(), this);
  },
  methods: {
    startCountDown: function(dateEnd, vueComponent) {
      setInterval(function() {
        let now = new Date().getTime();
        let difference = dateEnd - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        vueComponent.countDown = {
          days: days.toLocaleString(undefined, { minimumIntegerDigits: 2 }),
          hours: hours.toLocaleString(undefined, { minimumIntegerDigits: 2 }),
          minutes: minutes.toLocaleString(undefined, {
            minimumIntegerDigits: 2,
          }),
          seconds: seconds.toLocaleString(undefined, {
            minimumIntegerDigits: 2,
          }),
        };
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

.timer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 20px 0;
}

.timer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  h1,
  p {
    color: white;
  }
}

.is-counter {
  font-size: 2em;
  font-weight: 700;
}

.triangle {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;

  &.left {
    border-right: 15px solid $hostingerRed;
  }

  &.right {
    border-left: 15px solid $hostingerRed;
  }
}

@media only screen and (min-width: 1023px) {
  .is-counter {
    font-size: 2.7em;
  }

  .timer-container {
    p {
      font-size: 1.2em;
    }
  }

  .timer-wrapper {
    margin: 0 1.5rem;
  }
}
</style>