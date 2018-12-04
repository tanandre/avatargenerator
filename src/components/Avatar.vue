<template>
    <svg :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" class="svg" :fill="$store.state.face.head.color">
      <CustomPath :path="$store.state.face.customPath2"/>
      <HairBack/>
      <Ears />
      <Head />
      <Eyes />
      <Nose />
      <Mouth />
      <Hair />
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
import CustomPath from '@/components/avatar/CustomPath.vue';

export default {
  components: {
    Head,
    Eyes,
    Mouth,
    Nose,
    Hair,
    HairBack,
    Ears,
    CustomPath,
  },
  computed: {
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
