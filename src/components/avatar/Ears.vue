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
          - this.$store.state.face.head.height.value + this.$store.state.face.ears.height.value)
          / 2
        + this.$store.state.face.head.offsetY.value + this.$store.state.face.ears.offsetY.value + 60
      );
    },
  },
  render(h) {
    const { ears } = this.$store.state.face;
    const wide = 10;

    return h('g', [
      h('path', {
        attrs: {
          d: `M ${this.startX + wide} ${this.startY} 
          h-${wide}
          c -${ears.width.value / 2} 0, 
            -${ears.width.value} -${ears.height.value}, 
            0 -${ears.height.value}`,
          stroke: 'black',
          'stroke-width': '3',
        },
      }), h('path', {
        attrs: {
          d: `M ${this.startX - wide + this.$store.state.face.head.width.value} ${this.startY} 
          h${wide}
          c ${ears.width.value / 2} 0, 
            ${ears.width.value} -${ears.height.value}, 
            0 -${ears.height.value}`,
          stroke: 'black',
          'stroke-width': '3',
        },
      }),
    ]);
  },
};
</script>
