<template>
  <g>
    <defs>
      <Hair00 id="hairBack00" type="back"/>
      <Hair01 id="hairBack01" type="back"/>
      <Hair02 id="hairBack02" type="back"/>
      <Hair04 id="hairBack04" type="back"/>
      <Hair05 id="hairBack05" type="back"/>
      <Hair06 id="hairBack06" type="back"/>
      <Hair07 id="hairBack07" type="back"/>
      <Hair08 id="hairBack08" type="back"/>
      </defs>
        <use :x="startX" :y="startY" :xlink:href="`#hairBack0${hair.type.value}`" stroke="black" stroke-width="2" :fill="hair.color"/>
        <use :x="startX" :y="startY" :xlink:href="`#hairBack0${hair.type.value}`" stroke="black" stroke-width="2" fill="rgba(0,0,0,0.1)"/>
  </g>
</template>
<script>
import Hair00 from './hair/Hair00.vue';
import Hair01 from './hair/Hair01.vue';
import Hair02 from './hair/Hair02.vue';
import Hair04 from './hair/Hair04.vue';
import Hair05 from './hair/Hair05.vue';
import Hair06 from './hair/Hair06.vue';
import Hair07 from './hair/Hair07.vue';
import Hair08 from './hair/Hair08.vue';

export default {
  components: {
    Hair00,
    Hair01,
    Hair02,
    Hair04,
    Hair05,
    Hair06,
    Hair07,
    Hair08,
  },
  computed: {
    head() {
      return this.$store.state.face.head;
    },
    hair() {
      return this.$store.state.face.hair;
    },
    startX() {
      return (
        (this.$store.state.frame.dimensions.width)
        / 2
      );
    },
    startY() {
      return (
        this.$store.state.frame.dimensions.height / 2
      );
    },
  },
};
</script>
