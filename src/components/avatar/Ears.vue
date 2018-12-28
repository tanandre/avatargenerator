<template>
  <g>
    <defs>
      <g id="ear">
        <path :d="`M -${head.width.value / 2 - wide - 10} 0
          h-${wide}
          c -${ears.width.value / 2} 0,
            -${ears.width.value} -${ears.height.value}
            0 -${ears.height.value}`"/>
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#ear`" stroke="black" stroke-width="2"/>
    <use :x="`-${startX}`" :y="`${startY}`" transform="scale(-1, 1)" :xlink:href="`#ear`" stroke="black" stroke-width="2"/>
  </g>
</template>
<script>
export default {
  data() {
    return {
      wide: 20,
    };
  },
  computed: {
    head() {
      return this.$store.state.face.head;
    },
    ears() {
      return this.$store.state.face.ears;
    },
    startX() {
      return this.$store.state.frame.dimensions.width / 2;
    },
    startY() {
      return this.$store.state.frame.dimensions.height
          / 2 + this.$store.state.face.ears.height.value
        + this.$store.state.face.ears.offsetY.value;
    },
  },
};
</script>
