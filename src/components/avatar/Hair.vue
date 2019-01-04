<template>
  <g>
    <defs>
      <linearGradient id="locksColor" gradientTransform="rotate( -20)" >
          <stop offset="40%" :stop-color="hair.color"/>
          <stop offset="60%" stop-color="rgba(255,255,255,0.2)"/>
      </linearGradient>
        <radialGradient id="shineColor" cy="1%" r="1">
        <stop offset="25%" :stop-color="'rgba(255,255,255,0)'"/>
        <stop offset="30%" stop-color="rgba(255,255,255,0.2)"/>
        <stop offset="40%" :stop-color="'rgba(255,255,255,0)'"/>
      </radialGradient>
      <Hair00 id="hair00" :face="face"/>
      <Hair01 id="hair01" :face="face"/>
      <Hair02 id="hair02" :face="face"/>
      <Hair04 id="hair04" :face="face"/>
      <Hair05 id="hair05" :face="face"/>
      <Hair06 id="hair06" :face="face" type="front"/>
      <Hair07 id="hair07" :face="face" type="front"/>
      <Hair08 id="hair08" :face="face" type="front"/>

      <g id="hair03">
      </g>
      </defs>
        <use :x="startX" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke="rgba(0,0,0,0.8)" stroke-width="2" :fill="hair.color"/>
        <!-- <use :x="startX" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke-width="0" fill="url(#locksColor)"/> -->
        <use :x="startX" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke-width="0" fill="url(#shineColor)"/>
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
  props: ['frame', 'face'],
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
      return this.face.head;
    },
    hair() {
      return this.face.hair;
    },
    startX() {
      return (
        (this.frame.dimensions.width)
        / 2
      );
    },
    startY() {
      return (
        this.frame.dimensions.height / 2
      );
    },
  },
};
</script>
