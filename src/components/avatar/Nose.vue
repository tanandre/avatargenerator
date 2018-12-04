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
    const { nose } = this.$store.state.face;
    const noseType0 = h('path', {
      attrs: {
        d: `m ${this.startX} ${this.startY} c 0 ${nose.height.value / 2}, ${nose.width.value} ${nose.height.value / 2}, ${nose.width.value} 0`,
        stroke: 'black',
        fill: 'transparent',
        'stroke-width': '3',
      },
    });
    const width = nose.width.value / 2;
    const height = nose.height.value / 2;
    const noseType1 = h('ellipse', {
      attrs: {
        cx: this.startX + width,
        cy: this.startY + height,
        rx: width,
        ry: height,
        stroke: 'black',
        'stroke-width': '3',
        //        stroke: eyes.outerColor,
      },
    });

    return h('g', [
      nose.type.value === 0 ? noseType0 : noseType1,
    ]);
  },
};
</script>
