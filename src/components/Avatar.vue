<template>
    <svg :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" class="svg">
      <!-- head shape -->
      <path :d="`m${startX} ${startY} v${$store.state.face.head.height}
      c 0 80, ${$store.state.face.head.width} 80, ${$store.state.face.head.width} 0 v-${$store.state.face.head.height}
      c 0 -40, -${$store.state.face.head.width} -40, -${$store.state.face.head.width} 0Z`"
      stroke="black" stroke-width="4" fill="transparent"/>
    </svg>
</template>

<script>
export default {
  computed: {
    startX() {
      return (this.$store.state.frame.dimensions.width - this.$store.state.face.head.width) / 2;
    },
    startY() {
      return (this.$store.state.frame.dimensions.height - this.$store.state.face.head.height) / 2;
    },
  },
};
</script>
<style>
.svg {
  background-color: cadetblue;
}
</style>
