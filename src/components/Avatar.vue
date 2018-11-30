<template>
    <svg :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" class="svg">
      <Head />
      <Eyes />
    </svg>
</template>

<script>
import Head from './Head.vue';
import Eyes from './Eyes.vue';

export default {
  components: {
    Head,
    Eyes,
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
