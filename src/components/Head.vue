<template>
  <path
    :d="`m${startX} ${startY} v${$store.state.face.head.height.value}
      c 0 ${$store.state.face.head.chin.value}, ${$store.state.face.head.width.value} ${$store.state.face.head.chin.value}, ${$store.state.face.head.width.value} 0 v-${$store.state.face.head.height.value}
      c 0 -${$store.state.face.head.top.value}, -${$store.state.face.head.width.value} -${$store.state.face.head.top.value}, -${$store.state.face.head.width.value} 0Z`"
    stroke="black"
    stroke-width="4"
    :fill="$store.state.face.head.color"
  />
</template>

<script>
export default {
  computed: {
    startX() {
      return (
        (this.$store.state.frame.dimensions.width
          - this.$store.state.face.head.width.value)
        / 2
      );
    },
    startY() {
      return (
        (this.$store.state.frame.dimensions.height
          - this.$store.state.face.head.height.value)
          / 2
        + this.$store.state.face.head.offsetY.value
      );
    },
  },
};
</script>
<style>
</style>
