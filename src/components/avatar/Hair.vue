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
        + this.$store.state.face.head.offsetY.value + 40
      );
    },
  },
  render(h) {
    const head = this.$store.state.face.head;
    const hair = this.$store.state.face.hair;

    return h('g', [
      h('path', {
        attrs: {
          d: `M ${this.startX} ${this.startY} 
          c 0 -100, ${head.width.value} -20, ${head.width.value} 0 
          l 10 -80
          c -${head.width.value / 4} -100, -${head.width.value} -50, -${head.width.value + 20} 0 
          Z`,
          stroke: 'black',
          'stroke-width': '3',
          fill: hair.color,
        },
      }),
    ]);
  },
};
</script>
