<template>
  <g>
    <defs>
      <g id="shirt">
        <path :d="`m-125 0
c 20-50 40 -50 125 -50
c 85 0 105 0 125 50`"/>
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#shirt`" stroke="black" stroke-width="2" fill="red"/>
  </g>
</template>
<script>
export default {
  computed: {
    startX() {
      return this.$store.state.frame.dimensions.width / 2;
    },
    startY() {
      return this.$store.state.frame.dimensions.height;
    },
  },
};
</script>
