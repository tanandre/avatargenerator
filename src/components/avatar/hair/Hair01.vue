<template>
  <g>
    <path
      :d="`
        m0 -10
c 40 0 70 -${hair.hairLine.value - 10} ${head.width.value / 2} ${head.height.value + 30}
c 20 -100 -20 -110 0 -170
c -10 0 -30 10 -${head.width.value / 4} 40
c0 0 10 -20 0 -50
c 0 10 -30 40 -${head.width.value / 4} 50
c0 0 10 -20 0 -50
M0 -10
c -40 0 -70 -${hair.hairLine.value - 10} -${head.width.value / 2} ${head.height.value + 30}
c-30 -150 50 -120 ${head.width.value / 2} -180
`"
    />
  </g>
</template>
<script>
export default {
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
