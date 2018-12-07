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
    const startXLeft = this.startX;
    const startXRight = this.startX + eyes.wide.value;

    return h('g', [
      h('ellipse', {
        attrs: {
          cx: startXLeft,
          cy: this.startY,
          rx: eyes.outerWidth.value / 2,
          ry: eyes.outerHeight.value / 2,
          fill: eyes.outerColor,
          stroke: eyes.outerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: startXRight,
          cy: this.startY,
          rx: eyes.outerWidth.value / 2,
          ry: eyes.outerHeight.value / 2,
          fill: eyes.outerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: startXLeft,
          cy: this.startY,
          rx: eyes.innerWidth.value / 2 + 3,
          ry: eyes.innerWidth.value / 2 + 3,
          fill: 'brown',
        },
      }), h('ellipse', {
        attrs: {
          cx: startXRight,
          cy: this.startY,
          rx: eyes.innerWidth.value / 2 + 3,
          ry: eyes.innerWidth.value / 2 + 3,
          fill: 'brown',
        },
      }), h('ellipse', {
        attrs: {
          cx: startXLeft,
          cy: this.startY,
          rx: eyes.innerWidth.value / 2,
          ry: eyes.innerWidth.value / 2,
          fill: eyes.innerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: startXRight,
          cy: this.startY,
          rx: eyes.innerWidth.value / 2,
          ry: eyes.innerWidth.value / 2,
          fill: eyes.innerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: startXLeft + eyes.innerWidth.value / 4,
          cy: this.startY - eyes.innerWidth.value / 4,
          rx: 2,
          ry: 2,
          fill: 'white',
        },
      }), h('ellipse', {
        attrs: {
          cx: startXRight + eyes.innerWidth.value / 4,
          cy: this.startY - eyes.innerWidth.value / 4,
          rx: 2,
          ry: 2,
          fill: 'white',
        },
      }),
    ]);
  },
};
</script>
