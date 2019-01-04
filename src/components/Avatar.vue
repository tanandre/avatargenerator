<template>
    <svg :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" class="svg" :fill="$store.state.face.head.color" id="avatarSvg">
      <title>Avatar-id{{$store.state.id}}</title>
      <CustomPath :path="$store.state.customPath2"/>
      <HairBack v-if="$store.state.face.hair.show" :frame="frame" :face="face"/>
      <Shirt :position="0" :color1="$store.state.face.shirt.color1" :color2="$store.state.face.shirt.color2" :frame="frame" :face="face"/>
      <Neck :frame="frame" :face="face"/>
      <Shirt :position="1" :color1="$store.state.face.shirt.color1" :color2="$store.state.face.shirt.color2" :frame="frame" :face="face"/>
      <Ears v-if="$store.state.face.ears.show" :frame="frame" :face="face"/>
      <Head v-if="$store.state.face.head.show" :frame="frame" :face="face"/>
      <Eyes v-if="face.eyes.show" :frame="frame" :face="face"/>
      <Brows v-if="face.brows.show" :frame="frame" :face="face"/>
      <Nose v-if="face.nose.show" :frame="frame" :face="face"/>
      <Mouth v-if="face.mouth.show" :frame="frame" :face="face"/>
      <Hair v-if="face.hair.show" :frame="frame" :face="face"/>
      <CustomPath :path="$store.state.customPath1"/>
      <CustomPath v-if="$store.state.help.grid" :path="this.faceGrid"/>
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
    faceGrid() {
      return `
      m200 ${this.$store.state.frame.dimensions.height / 2 + this.head.height.value / 3 * 2}
    v-${this.head.height.value}
    M${this.frame.dimensions.width / 2 - this.head.width.value / 2} ${this.frame.dimensions.height / 2}
    h${this.head.width.value}
    M${this.frame.dimensions.width / 2 - this.head.width.value / 2} ${this.frame.dimensions.height / 2 + this.face.eyes.offsetY.value}
    h${this.head.width.value}
    M${this.frame.dimensions.width / 2 - this.head.width.value / 2} ${this.frame.dimensions.height / 2 + this.face.nose.offsetY.value}
    h${this.head.width.value}    
    M${this.frame.dimensions.width / 2 - this.head.width.value / 2} ${this.frame.dimensions.height / 2 + this.face.mouth.offsetY.value}
    h${this.head.width.value}    
    `;
    },
    head() {
      return this.$store.state.face.head;
    },
    face() {
      return this.$store.state.face;
    },
    frame() {
      return this.$store.state.frame;
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
