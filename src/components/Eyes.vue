<!-- <template>
  <g>
    <ellipse cx="150" cy="200" rx="15" ry="10"/>
    <ellipse cx="155" cy="195" rx="3" ry="5" fill="#fff"/>
    <ellipse cx="250" cy="200" rx="15" ry="10"/>
    <ellipse cx="255" cy="195" rx="3" ry="5" fill="#fff"/>
  </g>
</template>
-->
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
  },
  render(h) {
    const eyes = this.$store.state.face.eyes;

    return h('g', [
      h('ellipse', {
        attrs: {
          cx: this.startX,
          cy: (this.$store.state.frame.dimensions.height / 2) + eyes.offsetY.value,
          rx: eyes.outerWidth.value,
          ry: eyes.outerHeight.value,
          fill: eyes.outerColor,
          strokeWidth: '8px',
          stroke: eyes.outerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: this.startX + 5,
          cy: (this.$store.state.frame.dimensions.height / 2) + eyes.offsetY.value - 5,
          rx: eyes.innerWidth.value,
          ry: eyes.innerHeight.value,
          fill: eyes.innerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: this.startX + eyes.wide.value,
          cy: (this.$store.state.frame.dimensions.height / 2) + eyes.offsetY.value,
          rx: eyes.outerWidth.value,
          ry: eyes.outerHeight.value,
          fill: eyes.outerColor,
        },
      }), h('ellipse', {
        attrs: {
          cx: this.startX + eyes.wide.value + 5,
          cy: (this.$store.state.frame.dimensions.height / 2) + eyes.offsetY.value - 5,
          rx: eyes.innerWidth.value,
          ry: eyes.innerHeight.value,
          fill: eyes.innerColor,
        },
      }),
    ]);
  },
};
</script>
