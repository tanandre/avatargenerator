<template>
  <g>
    <path v-if="type == 'front'" :d="`
      M0 -${head.height.value / 3 + ponyHeight}
      c ${head.width.value / 2 + 20} 0 ${head.width.value / 2 + 10} ${head.height.value / 3 * 1.5} ${head.width.value / 2 + ponyWidth} ${head.height.value / 3 * 1.5 + ponyLength}
      c 10 ${ponyCurve} -${head.width.value / 4} ${ponyCurve} -${head.width.value / 2 - 5 + ponyWidth} ${ponyCurve}
      l -3 -30
      l -2 30
      M0 -${head.height.value / 3 + ponyHeight}
      c -${head.width.value / 2 + 20} 0 -${head.width.value / 2 + 10} ${head.height.value / 3 * 1.5} -${head.width.value / 2+ ponyWidth} ${head.height.value / 3 * 1.5 + ponyLength}
      c 10 ${ponyCurve} ${head.width.value / 4} ${ponyCurve} ${head.width.value / 4+ ponyWidth} ${ponyCurve}
      l 3 -20
      l 2 20
      s 10 0 ${head.width.value / 4 - 5} 0
`"    />
    <path v-else :d="`
      M0 -${head.height.value / 3 + ponyHeight}
      c ${head.width.value / 2 + 80} 30 ${head.width.value / 2 } ${head.height.value / 3 * 2} ${head.width.value / 2 + 20} ${head.height.value}
      c 0 -0 -0 5 -30 5
      l -3 -20
      l -2 20
      c 0 -0 -${head.width.value / 4} -0 -${head.width.value / 2 - 15} 10
      M0 -${head.height.value / 3 + ponyHeight}
      c -${head.width.value / 2 + 80} 30 -${head.width.value / 2 } ${head.height.value / 3 * 2} -${head.width.value / 2 + 20} ${head.height.value}
      c 0 -0 -0 5 10 5
      l 3 -12
      l 1 12
      c 0 -0 ${head.width.value / 4} 10 ${head.width.value / 2 + 6} 5
`"    />
  </g>
</template>
<script>
export default {
  props: ['type'],
  data() {
    return {
      ponyCurve: -10,
      ponyLength: 10,
      ponyHeight: 30,
      ponyWidth: 5,
    };
  },
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
