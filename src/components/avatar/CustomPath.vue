<script>
export default {
  props: ['path'],
  render(h) {
    return h('g', {
      attrs: {
        stroke: 'rgba(0,0,0,0.7)',
        fill: 'rgba(255,255,255,0.5)',
        'stroke-width': '3',
      },
    }, [h('path', {
      attrs: {
        d: this.path,
      },
    })]);
  },
};
</script>
