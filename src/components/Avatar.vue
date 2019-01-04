<template>
  <g :fill="face.head.color" >
    <title>Avatar</title>
    <HairBack v-if="face.hair.show" :frame="frame" :face="face"/>
    <Shirt :position="0" :color1="face.shirt.color1" :color2="face.shirt.color2" :frame="frame" :face="face"/>
    <Neck :frame="frame" :face="face"/>
    <Shirt :position="1" :color1="face.shirt.color1" :color2="face.shirt.color2" :frame="frame" :face="face"/>
    <Ears v-if="face.ears.show" :frame="frame" :face="face"/>
    <Head v-if="face.head.show" :frame="frame" :face="face"/>
    <Eyes v-if="face.eyes.show" :frame="frame" :face="face"/>
    <Brows v-if="face.brows.show" :frame="frame" :face="face"/>
    <Nose v-if="face.nose.show" :frame="frame" :face="face"/>
    <Mouth v-if="face.mouth.show" :frame="frame" :face="face"/>
    <Hair v-if="face.hair.show" :frame="frame" :face="face"/>
  </g>
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

export default {
  props: ['face', 'frame'],
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
  },
};
</script>
<style>
</style>
