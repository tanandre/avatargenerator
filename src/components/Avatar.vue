<template>
    <svg :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" class="svg" :fill="$store.state.face.head.color">
      <Ears />
      <Head />
      <Eyes />
      <Nose />
      <Mouth />
      <Hair />
    </svg>
</template>

<script>
import Head from '@/components/avatar/Head.vue';
import Eyes from '@/components/avatar/Eyes.vue';
import Mouth from '@/components/avatar/Mouth.vue';
import Nose from '@/components/avatar/Nose.vue';
import Hair from '@/components/avatar/Hair.vue';
import Ears from '@/components/avatar/Ears.vue';

export default {
  components: {
    Head,
    Eyes,
    Mouth,
    Nose,
    Hair,
    Ears,
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
