<script>
export default {
  computed: {
    startX() {
      return (
        (this.$store.state.frame.dimensions.width
          - this.$store.state.face.mouth.width.value)
        / 2
      );
    },
    startY() {
      return (
        (this.$store.state.frame.dimensions.height
          - this.$store.state.face.mouth.height.value)
          / 2
        + this.$store.state.face.mouth.offsetY.value
      );
    },
  },
  render(h) {
    const { mouth } = this.$store.state.face;

    return h('g', [
      h('path', {
        attrs: {
          d: `M ${this.startX} ${this.startY} c 0 ${mouth.height.value}, ${mouth.width.value} ${mouth.height.value}, ${mouth.width.value} 0 Z`,
          stroke: 'black',
          'stroke-width': '3',
          fill: 'white',
        },
      }),
    ]);
  },
};
</script>
