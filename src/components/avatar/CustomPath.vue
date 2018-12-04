<script>
export default {
  props: ['path'],
  render(h) {
    return h('g', {
      attrs: {
        stroke: 'black',
        fill: 'red',
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
