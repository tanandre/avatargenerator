<template>
  <g>
    <defs>
      <g id="neck">
        <path :d="`M-20 0
        c -10 150 -20 160 -30 180
        h 100
        c -30 -40 -20 -150 -10 -180`"/>
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neck`" stroke="black" stroke-width="2"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neck`" fill="rgb(0,0,0,0.2)" stroke-width="2"/>
  </g>
</template>
<script>
export default {
  computed: {
    startX() {
      return this.$store.state.frame.dimensions.width / 2;
    },
    startY() {
      return this.$store.state.frame.dimensions.height / 2;
    },
    halfHeight() {
      return this.$store.state.frame.dimensions.height / 2;
    },
  },
};
</script>
