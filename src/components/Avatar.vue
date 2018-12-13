<template>
    <svg :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" class="svg" :fill="$store.state.face.head.color">
      <defs>
<clipPath id="leftEyeClip">
          <rect x="2" y="2" width="100" height="40" />
      </clipPath>
<clipPath id="leftEyeClip2">
<path  d="M 180 215
        c -25 10, -25 10, -50 0
        c 12.5 -10 37.5 -10 50 0
        Z" stroke="black" stroke-width="2"></path>
</clipPath>
        <mask id="mask2" x="0" y="0" width="50" height="50" >
      <circle cx="15" cy="20" r="100" style="stroke:none; fill: #ffffff"/>
    </mask>
        <!-- <linearGradient id="eyeWhite">
          <stop offset="2%" stop-color="#aaa"/>
          <stop offset="20%" stop-color="#fff"/>
          <stop offset="80%" stop-color="#fff"/>
          <stop offset="95%" stop-color="#aaa"/>
        </linearGradient>

        <pattern id="eyePattern" x="0" y="0" width="25" height="25">
          <rect x="0" y="0" width="50" height="50" fill="url(#eyeWhite)"/>
          <circle cx="25" cy="5" r="10" fill="black" stroke="brown" stroke-width="4"/>
          <circle cx="32" cy="5" r="2" fill="white" />
        </pattern> -->
      </defs>


      <CustomPath :path="$store.state.face.customPath2"/>
      <Shirt />
      <HairBack v-if="$store.state.face.hair.show"/>
      <Neck />
      <Ears v-if="$store.state.face.ears.show"/>
      <Head v-if="$store.state.face.head.show" />
      <Eyes v-if="face.eyes.show"/>
      <Brows v-if="face.brows.show" />
      <Nose v-if="face.nose.show"/>
      <Mouth v-if="face.mouth.show"/>
      <Hair v-if="face.hair.show"/>
      <CustomPath :path="$store.state.face.customPath1"/>
    </svg>
</template>

<script>
import Head from '@/components/avatar/Head.vue';
import Eyes from '@/components/avatar/Eyes.vue';
import Mouth from '@/components/avatar/Mouth.vue';
import Nose from '@/components/avatar/Nose.vue';
import Hair from '@/components/avatar/Hair.vue';
import HairBack from '@/components/avatar/HairBack.vue';
import Ears from '@/components/avatar/Ears.vue';
import Brows from '@/components/avatar/Brows.vue';
import Neck from '@/components/avatar/Neck.vue';
import Shirt from '@/components/avatar/Shirt.vue';
import CustomPath from '@/components/avatar/CustomPath.vue';

export default {
  components: {
    Head,
    Brows,
    Eyes,
    Mouth,
    Nose,
    Hair,
    HairBack,
    Ears,
    Neck,
    Shirt,
    CustomPath,
  },
  computed: {
    face() {
      return this.$store.state.face;
    },
    startX() {
      return (this.$store.state.frame.dimensions.width - this.$store.state.face.head.width) / 2;
    },
    startY() {
      return (this.$store.state.frame.dimensions.height - this.$store.state.face.head.height) / 2 + this.$store.state.face.head.offsetY;
    },
  },
};
</script>
<style>
.svg {
  background-color: cadetblue;
}
</style>
