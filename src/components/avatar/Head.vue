<template>
  <g>
    <defs>
       <Head00 id="head00" />
       <Head01 id="head01" />
      <g id="headSmaller00" transform="scale(0.9, 0.97)">
        <Head00 />
      </g>
      <g id="headSmaller01" transform="scale(0.9, 0.97)">
        <Head01 />
      </g>
  </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#head0${head.type.value}`" :fill="`${head.color}`" stroke="black" stroke-width="2"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#head0${head.type.value}`" fill="rgba(0,0,0,0.2)"/>
    <use :x="`${startX}`" :y="`${startY}`"  :xlink:href="`#headSmaller0${head.type.value}`" :fill="`${head.color}`"/>
</g>
</template>
<script>
import Head00 from './head/Head00.vue';
import Head01 from './head/Head01.vue';

export default {
  components: {
    Head00,
    Head01,
  },
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
