<template>
  <g>
    <defs>
      <g id="mouth00" stroke-width="3">
        <path :d="`M${-mouth.width.value / 2} 5 c 5 -5 30 -2 ${mouth.width.value} 0`"/>
        <path :d="`M-5 13 c 5 -2 10 -2 10 0`"/>
      </g>
      <g id="mouth01" stroke-width="2">
        <path :d="`M ${-mouth.width.value / 2} 0
        c 0 ${mouth.height.value}, ${mouth.width.value / 2} ${mouth.height.value} ${mouth.width.value / 2} ${mouth.height.value}
        M ${-mouth.width.value / 2} 0
        h${mouth.width.value}
        c 0 ${mouth.height.value}, -${mouth.width.value / 2} ${mouth.height.value}, -${mouth.width.value / 2} ${mouth.height.value}
          `" fill="#fff"/>
        <path :d="`M-5 ${mouth.height.value + 4} c 5 2 10 2 10 0`"/>
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
        this.$store.state.frame.dimensions.width / 2
      );
    },
    startY() {
      return (
        this.$store.state.frame.dimensions.height / 2
        + this.$store.state.face.mouth.offsetY.value
      );
    },
  },
};
</script>
