<template>
  <span class="outer">
    <span
      class="inner"
      :style="`width: ${size + 2}px; height: ${size + 2}px;`"
    >
      <svg
        class="loading-spinner"
        :width="`${size}px`"
        :height="`${size}px`"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="`0 0 ${size} ${size}`"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          :cx="size / 2"
          :cy="size / 2"
          fill="none"
          stroke="#425161"
          :stroke-width="size * 8 / 100"
          :r="size * 0.45"
          :stroke-dasharray="`0 ${size * 0.4} ${size * 3}`"
        />
        <circle
          :cx="size / 2"
          :cy="size / 2"
          fill="none"
          stroke="#13a538"
          :stroke-width="size * 8 / 100"
          :r="size * 0.45"
          :stroke-dasharray="`0 ${size * 0.03} ${size * 0.34} ${size * 0.03} 0 ${size * 3}`"
        />
      </svg>
    </span>
  </span>
</template>

<script>
export default {
  name: 'LoadingAnimationX',
  props: {
    size: {
      type: Number,
      default () {
        return 100
      },
    },
  },
}
</script>

<style scoped>
  span.outer {
    position: relative;
  }
  span.inner {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
  svg.loading-spinner {
    -webkit-transform: rotate(-60deg);
    transform: rotate(-60deg);
    -webkit-animation: ball-clip-rotate 1.5s linear infinite;
    -moz-animation: ball-clip-rotate 1.5s linear infinite;
    -o-animation: ball-clip-rotate 1.5s linear infinite;
    animation: ball-clip-rotate 1.5s linear infinite;
  }
  /*
   * Animation
   */
  @-webkit-keyframes ball-clip-rotate {
    0% {
      -webkit-transform: rotate(-60deg);
      transform: rotate(-60deg);
    }
    50% {
      -webkit-transform: rotate(120deg);
      transform: rotate(120deg);
    }
    100% {
      -webkit-transform: rotate(300deg);
      transform: rotate(300deg);
    }
  }
  @-moz-keyframes ball-clip-rotate {
    0% {
      -moz-transform: rotate(-60deg);
      transform: rotate(-60deg);
    }
    50% {
      -moz-transform: rotate(120deg);
      transform: rotate(120deg);
    }
    100% {
      -moz-transform: rotate(300deg);
      transform: rotate(300deg);
    }
  }
  @-o-keyframes ball-clip-rotate {
    0% {
      -o-transform: rotate(-60deg);
      transform: rotate(-60deg);
    }
    50% {
      -o-transform: rotate(120deg);
      transform: rotate(120deg);
    }
    100% {
      -o-transform: rotate(300deg);
      transform: rotate(300deg);
    }
  }
  @keyframes ball-clip-rotate {
    0% {
      -webkit-transform: rotate(-60deg);
      -moz-transform: rotate(-60deg);
      -o-transform: rotate(-60deg);
      transform: rotate(-60deg);
    }
    50% {
      -webkit-transform: rotate(120deg);
      -moz-transform: rotate(120deg);
      -o-transform: rotate(120deg);
      transform: rotate(120deg);
    }
    100% {
      -webkit-transform: rotate(300deg);
      -moz-transform: rotate(300deg);
      -o-transform: rotate(300deg);
      transform: rotate(300deg);
    }
  }
</style>
