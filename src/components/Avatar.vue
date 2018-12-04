<template>
    <svg :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" class="svg" :fill="$store.state.face.head.color">
      <CustomPath :path="$store.state.face.customPath2"/>
      <HairBack v-if="$store.state.face.hair.show"/>
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
