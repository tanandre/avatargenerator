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
  render(h) {
    return h('g', [
      h('ellipse', {
        attrs: {
          cx: 150,
          cy: (this.$store.state.frame.dimensions.height / 2) + this.$store.state.face.eyes.offsetY.value,
          rx: this.$store.state.face.eyes.outerWidth.value,
          ry: this.$store.state.face.eyes.outerHeight.value,
        },
      }), h('ellipse', {
        attrs: {
          cx: 155,
          cy: (this.$store.state.frame.dimensions.height / 2) + this.$store.state.face.eyes.offsetY.value - 5,
          rx: this.$store.state.face.eyes.innerWidth.value,
          ry: this.$store.state.face.eyes.innerHeight.value,
          fill: '#fff',
        },
      }), h('ellipse', {
        attrs: {
          cx: 250,
          cy: (this.$store.state.frame.dimensions.height / 2) + this.$store.state.face.eyes.offsetY.value,
          rx: this.$store.state.face.eyes.outerWidth.value,
          ry: this.$store.state.face.eyes.outerHeight.value,
        },
      }), h('ellipse', {
        attrs: {
          cx: 255,
          cy: (this.$store.state.frame.dimensions.height / 2) + this.$store.state.face.eyes.offsetY.value - 5,
          rx: this.$store.state.face.eyes.innerWidth.value,
          ry: this.$store.state.face.eyes.innerHeight.value,
          fill: '#fff',
        },
      }),
    ]);
  },
};
</script>
