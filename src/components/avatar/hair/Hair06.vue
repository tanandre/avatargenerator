<template>
  <g>
    <path v-if="type == 'front'" :d="`
M0 -${head.height.value / 3 + 10}
c ${head.width.value / 2 + 20} 0 ${head.width.value / 2 + 20} ${head.height.value / 3 * 1.5} ${head.width.value / 2 + 10} ${head.height.value / 3 * 1.5 + 10}
c 0 -20 -${head.width.value / 4} -20 -${head.width.value / 2+ 10} -20
M0 -${head.height.value / 3 + 10}
c -${head.width.value / 2 + 20} 0 -${head.width.value / 2 + 20} ${head.height.value / 3 * 1.5} -${head.width.value / 2+ 10} ${head.height.value / 3 * 1.5 + 10}
c 0 -20 ${head.width.value / 4} -20 ${head.width.value / 2+ 10} -20
`"    />
    <path v-else :d="`
M0 -${head.height.value / 3 + 10}
c ${head.width.value / 2 + 80} 30 ${head.width.value / 2 } ${head.height.value / 3 * 2} ${head.width.value / 2 + 20} ${head.height.value + 10}
c 0 -0 -${head.width.value / 4} -20 -${head.width.value / 2} -20
M0 -${head.height.value / 3 + 10}
c -${head.width.value / 2 + 80} 30 -${head.width.value / 2 } ${head.height.value / 3 * 2} -${head.width.value / 2 + 20} ${head.height.value + 10}
c 0 -0 ${head.width.value / 4} -20 ${head.width.value / 2} -20
`"    />
  </g>
</template>
<script>
export default {
  props: ['type'],
  computed: {
    head() {
      return this.$store.state.face.head;
    },
    hair() {
      return this.$store.state.face.hair;
    },
  },
};
</script>
