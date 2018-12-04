<script>
export default {
  computed: {
    startX() {
      return (
        (this.$store.state.frame.dimensions.width
          - this.$store.state.face.eyes.wide.value)
        / 2
      );
    },
    startY() {
      return (
        (this.$store.state.frame.dimensions.height / 2)
        + this.$store.state.face.eyes.offsetY.value
      );
    },
  },
  render(h) {
    const { eyes } = this.$store.state.face;

    return h('g', [
      h('ellipse', {
        attrs: {
          cx: this.startX,
          cy: this.startY,
          rx: eyes.outerWidth.value / 2,
          ry: eyes.outerHeight.value / 2,
          fill: eyes.outerColor,
          stroke: eyes.outerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: this.startX + eyes.wide.value,
          cy: this.startY,
          rx: eyes.outerWidth.value / 2,
          ry: eyes.outerHeight.value / 2,
          fill: eyes.outerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: this.startX + 5,
          cy: this.startY - 5,
          rx: eyes.innerWidth.value / 2,
          ry: eyes.innerHeight.value / 2,
          fill: eyes.innerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: this.startX + eyes.wide.value + 5,
          cy: this.startY - 5,
          rx: eyes.innerWidth.value / 2,
          ry: eyes.innerHeight.value / 2,
          fill: eyes.innerColor,
        },
      }),
    ]);
  },
};
</script>
