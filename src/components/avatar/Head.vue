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
  render(h) {
    const { head } = this.$store.state.face;

    return h('g', [
      h('path', {
        attrs: {
          d: `m${this.startX} ${this.startY} v${head.height.value}
          c ${-head.chinWidth.value} ${head.chin.value}, ${head.width.value + head.chinWidth.value} ${head.chin.value}, ${head.width.value} 0 
          v-${head.height.value}
          c 0 -100, -${head.width.value} -100, -${head.width.value} 0Z`,
          stroke: 'black',
          'stroke-width': '3',
          fill: head.color,
        },
      }),
    ]);
  },
};
</script>
<style>
</style>
