<template>
  <g>
    <defs>
        <radialGradient id="shineColor" cy="1%" r="1">
        <stop offset="25%" stop-color="rgba(255,255,255,0)"/>
        <stop offset="30%" stop-color="rgba(255,255,255,0.2)"/>
        <stop offset="40%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
      <Hair00 id="hair00" />
      <Hair01 id="hair01" />
      <Hair02 id="hair02" />
      <Hair04 id="hair04" />
      <Hair05 id="hair05" />
      <Hair06 id="hair06" type="front"/>

      <g id="hair03">
      </g>
      </defs>
        <use :x="startX" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke="black" stroke-width="2" :fill="hair.color"/>
        <use :x="startX" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke="black" stroke-width="2" fill="url(#shineColor)"/>
      </g>
</template>
<script>
import Hair00 from './hair/Hair00.vue';
import Hair01 from './hair/Hair01.vue';
import Hair02 from './hair/Hair02.vue';
import Hair04 from './hair/Hair04.vue';
import Hair05 from './hair/Hair05.vue';
import Hair06 from './hair/Hair06.vue';

export default {
  components: {
    Hair00,
    Hair02,
    Hair04,
    Hair05,
    Hair06,
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
