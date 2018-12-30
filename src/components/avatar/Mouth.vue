<template>
  <g>
    <defs>
      <g id="mouth00" stroke-width="3">
        <path :d="`M${-mouth.width.value / 2} 5 c 5 -5 30 -2 ${mouth.width.value} 0`"/>
        <path stroke="rgba(0,0,0,0.4)" stroke-width="4" :d="`M-${mouth.width.value / 6} 15 c 5 -2 10 -2 ${mouth.width.value / 3} 0`"/>
      </g>
      <g id="mouth01" stroke-width="2">
         <path :d="`M ${mouth.width.value / 2} ${(mouth.upperLip.value < 0 ? -mouth.upperLip.value : 0)}
         c -10 ${mouth.upperLip.value} ${-mouth.width.value + 10} ${mouth.upperLip.value} ${-mouth.width.value} 0
        c 10 ${mouth.height.value + (mouth.upperLip.value < 0 ? mouth.upperLip.value : 0)},
        ${mouth.width.value - 10} ${mouth.height.value  + (mouth.upperLip.value < 0 ? mouth.upperLip.value : 0)} ${mouth.width.value} 0
        M ${-mouth.width.value / 2} 0
          `" fill="#fff"/>
        <path stroke="rgba(0,0,0,0.4)" stroke-width="2" :d="`M-${mouth.width.value / 4} ${mouth.height.value} c 5 3 ${mouth.width.value / 2 - 5} 3 ${mouth.width.value / 2} 0`"/>
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
