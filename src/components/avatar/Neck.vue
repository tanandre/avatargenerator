<template>
  <g>
    <defs>
      <radialGradient id="neckColor" cy="40%" r="0.7">
        <stop offset="60%" stop-color="rgb(0,0,0,0.2 )"/>
        <stop offset="60%" stop-color="transparent"/>
      </radialGradient>
      <g id="neck">
        <path :d="`M-${width / 4} 0
        c -10 ${neckHeight - 10} -20 ${neckHeight} -${neckWidth} ${neckHeight}
        c 0 30 ${width / 2 + 60} 30 ${width / 2 + neckWidth * 2} 0
        M-${width / 4} 0
        h${width / 2}
        c 10 ${neckHeight - 10} 20 ${neckHeight} ${neckWidth} ${neckHeight}
        `"/>
      </g>
      <g id="neckSmaller" transform="scale(0.8, 1)">
        <use href="#neck" />
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neck`" stroke="black" stroke-width="2"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neck`" fill="rgb(0,0,0,0.2)" stroke-width="2"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neckSmaller`"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neckSmaller`" fill="url(#neckColor)"/>
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
      neckHeight: 40,
      neckWidth: 30,
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
      return this.$store.state.frame.dimensions.height - (40 + this.neckHeight);
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
