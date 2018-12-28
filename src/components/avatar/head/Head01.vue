<template>
  <g>
    <path
      :d="`
m0 ${head.height.value / 3 * 2}
c -${head.chinCurve.value} 0 -${head.chinWidth.value / 2} -${head.chinHeight.value - 10} -${head.chinWidth.value / 2} -${head.chinHeight.value}
c -${head.width.value - head.chinWidth.value + 5} -${(head.height.value - head.chinHeight.value) - head.topCurve.value} 0 -${head.height.value - head.chinHeight.value} ${head.chinWidth.value / 2} -${head.height.value - head.chinHeight.value}
M0 ${head.height.value / 3 * 2}
c ${head.chinCurve.value} 0 ${head.chinWidth.value / 2} -${head.chinHeight.value - 10} ${head.chinWidth.value / 2} -${head.chinHeight.value}
c ${head.width.value - head.chinWidth.value + 5} -${(head.height.value - head.chinHeight.value) - head.topCurve.value} 0 -${head.height.value - head.chinHeight.value} -${head.chinWidth.value / 2} -${head.height.value - head.chinHeight.value}
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
  },
};
</script>
