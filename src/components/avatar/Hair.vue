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

    const depth = 60;
    const height = 60;

    const hstartX = this.startX + head.width.value / 4;
    const partHeadWidth = head.width.value / 4 * 3 / 2;
    const partHeadHeight = head.height.value + head.top.value + head.chin.value;

    const hairStyles = [
      [`M ${hstartX} ${this.startY} 
          q 0 70 ${partHeadWidth} 80 
          t ${partHeadWidth} ${partHeadHeight / 3}
          c 10 -10 50 -100 0 -${partHeadHeight / 2}
          s -50 -60 -${partHeadWidth + partHeadWidth} -28 Z
          `],
      /* type 0 */
      [`M ${this.startX} ${this.halfY} 
          c 0 -100, ${head.width.value / 2} -${depth + 20}, ${head.width.value / 2} -${depth} 
          l 0 -${height}
          c -${head.width.value / 4} -20, -${head.width.value / 2} -20, -${head.width.value / 2 + 10} 20 
          Z`,
      `M ${this.startX + head.width.value} ${this.halfY} 
          c 0 -100, -${head.width.value / 2} -${depth + 20}, -${head.width.value / 2} -${depth} 
          l 0 -${height}
          c ${head.width.value / 4} -20, ${head.width.value / 2} -20, ${head.width.value / 2 + 10} 20 
          Z`],
      /* type 1 */
      [`M ${this.startX} ${this.halfY} 
          c 0 -100, ${head.width.value} -20, ${head.width.value} 0 
          l 10 -80
          c -${head.width.value / 4} -100, -${head.width.value} -50, -${head.width.value + 20} 0 
          Z`],
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
