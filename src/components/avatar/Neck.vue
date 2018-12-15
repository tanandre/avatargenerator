<template>
  <g>
    <defs>
      <g id="neck">
        <path :d="`M-${width / 4} 0
        c -10 ${neckHeight - 10} -20 ${neckHeight} -30 ${neckHeight}
        c 0 30 ${width / 2 + 60} 30 ${width / 2 + 60} 0
        c -30 0 -20 -${neckHeight - 10} -30 -${neckHeight}`"/>
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neck`" stroke="black" stroke-width="2"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neck`" fill="rgb(0,0,0,0.2)" stroke-width="2"/>
  </g>
</template>
<script>
export default {
  data() {
    return {
      borderThickness1: 10,
      borderThickness2: 10,
      borderHeight: 10,
      borderWidth: 90,
      neckHeight: 160,
    };
  },

  computed: {
    frameWidth() {
      return this.$store.state.frame.dimensions.width;
    },
    startX() {
      return this.$store.state.frame.dimensions.width / 2;
    },
    startY() {
      return this.$store.state.frame.dimensions.height / 2;
    },
    width() {
      return this.$store.state.face.head.width.value / 2;
    },

    halfHeight() {
      return this.$store.state.frame.dimensions.height / 2;
    },
  },
};
</script>
