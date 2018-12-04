<script>
export default {
  computed: {
    startX() {
      return (
        (this.$store.state.frame.dimensions.width
          - this.$store.state.face.eyes.wide.value)
        / 2
        - this.$store.state.face.eyes.outerWidth.value
      );
    },
    startY() {
      return (
        (this.$store.state.frame.dimensions.height / 2)
        + this.$store.state.face.eyes.offsetY.value
        - this.$store.state.face.eyes.outerHeight.value - 5
      );
    },
  },
  render(h) {
    const { brows, eyes } = this.$store.state.face;

    const browStyles = [
      [`M${this.startX} ${this.startY} c 10 -10 20 -10 30 0`,
        `M${this.startX + eyes.wide.value} ${this.startY} c 10 -10 20 -10 30 0`,
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
