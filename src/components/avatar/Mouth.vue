<template>
  <g>
    <defs>
      <g id="mouth00" stroke-width="3">
        <path :d="`M0 0 c 5 -5 30 -2 ${mouth.width.value} 0`"/>
        <path :d="`M${mouth.width.value / 2 -5} 10 c 5 -2 10 -2 10 0`"/>
      </g>
      <g id="mouth01" stroke-width="2">
        <path :d="`M 0 0 c 0 ${mouth.height.value}, ${mouth.width.value} ${mouth.height.value}, ${mouth.width.value} 0 Z`" fill="#fff"/>
        <path :d="`M${mouth.width.value / 2 -5} ${mouth.height.value + 2} c 5 2 10 2 10 0`"/>
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#mouth0${mouth.type.value}`" stroke="rgba(0,0,0,0.8)"/>
  </g>
</template>
<script>
export default {
  computed: {
    mouth() {
      return this.$store.state.face.mouth;
    },
    startX() {
      return (
        (this.$store.state.frame.dimensions.width
          - this.$store.state.face.mouth.width.value)
        / 2
      );
    },
    startY() {
      return (
        (this.$store.state.frame.dimensions.height
          - this.$store.state.face.mouth.height.value)
          / 2
        + this.$store.state.face.mouth.offsetY.value
      );
    },
  },
};
</script>
