<script>
export default {
  computed: {
    startY() {
      return (
        (this.$store.state.frame.dimensions.height / 2)
        + this.$store.state.face.eyes.offsetY.value
        - this.$store.state.face.eyes.outerHeight.value / 2 - 5
      );
    },
  },
  render(h) {
    const { brows, eyes } = this.$store.state.face;
    const startXLeft = (this.$store.state.frame.dimensions.width - this.$store.state.face.eyes.wide.value) / 2 - this.$store.state.face.eyes.outerWidth.value / 2;
    const startXRight = (this.$store.state.frame.dimensions.width - this.$store.state.face.eyes.wide.value) / 2 + this.$store.state.face.eyes.outerWidth.value / 2;

    const browStyles = [
      [`M${startXLeft} ${this.startY} c 5 -10 ${eyes.outerWidth.value - 5} -10 ${eyes.outerWidth.value} 0`,
        `M${startXRight + this.$store.state.face.eyes.wide.value} ${this.startY} c -5 -10 -${eyes.outerWidth.value - 5} -10 -${eyes.outerWidth.value} 0`,
      ],
    ];

    return h('g', {
      attrs: {
        fill: 'transparent',
        stroke: '#666',
        'stroke-width': '4',
      },
    }, browStyles[brows.type.value].map(d => h('path', { attrs: { d } })));
  },
};
</script>
