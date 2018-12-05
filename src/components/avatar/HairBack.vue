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
          - this.$store.state.face.head.top.value
        + this.$store.state.face.head.offsetY.value
      );
    },
    halfY() {
      return (
        (this.$store.state.frame.dimensions.height
          - this.$store.state.face.head.height.value)
          / 2
        + this.$store.state.face.head.offsetY.value + 40
      );
    },
  },
  render(h) {
    const { hair, head } = this.$store.state.face;

    const hstartX = this.startX + head.width.value / 4;

    const hairStyles = [
      /* type 0 */
      [`M${hstartX} ${this.startY} 
        c -100 0 -80 200 0 200 
        h 100 z`],
      [],
      [],
    ];

    return h('g', {
      attrs: {
        fill: hair.color,
        stroke: 'black',
        'stroke-width': '3',
      },
    }, hairStyles[hair.type.value].map(d => h('path', { attrs: { d } })));
  },
};
</script>
