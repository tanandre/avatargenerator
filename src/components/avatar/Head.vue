<template>
  <g>
    <defs>
      <g id="head">
        <path :d="`m-${head.width.value / 2} -${head.height.value / 2} v${head.height.value}
          c ${-head.chinWidth.value} ${head.chin.value}, ${head.width.value + head.chinWidth.value} ${head.chin.value}, ${head.width.value} 0
          v-${head.height.value}
          c 0 -100, -${head.width.value} -100, -${head.width.value} 0Z`"/>
       </g>
      <g id="headSmaller" transform="scale(0.9, 0.98)">
        <path :d="`m-${head.width.value / 2} -${head.height.value / 2} v${head.height.value}
          c ${-head.chinWidth.value} ${head.chin.value}, ${head.width.value + head.chinWidth.value} ${head.chin.value}, ${head.width.value} 0
          v-${head.height.value}
          c 0 -100, -${head.width.value} -100, -${head.width.value} 0Z`"/>
      </g>
  </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#head`" :fill="`${head.color}`" stroke="black" stroke-width="2"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#head`" fill="rgba(0,0,0,0.2)"/>
    <use :x="`${startX}`" :y="`${startY}`"  :xlink:href="`#headSmaller`" :fill="`${head.color}`"/>
</g>
</template>
<script>
export default {
  computed: {
    head() {
      return this.$store.state.face.head;
    },
    startX() {
      return this.$store.state.frame.dimensions.width / 2;
    },
    startY() {
      return this.$store.state.frame.dimensions.height / 2;
    },
  },
};
</script>
<style>
</style>
