<script>
export default {
  computed: {
    startX() {
      return (
        (this.$store.state.frame.dimensions.width
          - this.$store.state.face.nose.width.value)
        / 2
      );
    },
    startY() {
      return (
        (this.$store.state.frame.dimensions.height
          - this.$store.state.face.nose.height.value)
          / 2
        + this.$store.state.face.nose.offsetY.value
      );
    },
  },
  render(h) {
    const nose = this.$store.state.face.nose;

    return h('g', [
      h('path', {
        attrs: {
          d: `m ${this.startX} ${this.startY} c 0 ${nose.height.value}, ${nose.width.value} ${nose.height.value}, ${nose.width.value} 0`,
          stroke: 'black',
          fill: 'transparent',
          'stroke-width': '3',
        },
      }),
    ]);
  },
};
</script>
