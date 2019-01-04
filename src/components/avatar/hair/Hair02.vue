<template>
  <g>
    <path :d="`
        M0 -40
c 40 0 70 -${hair.hairLine.value} ${head.width.value / 2 - 5 + chindWidthMargin} ${head.height.value / 3}
c20 -${head.height.value / 3 + 50} -40 -${head.height.value / 3 + 60} -${head.width.value / 2 - 5 + chindWidthMargin} -${head.height.value / 3 + 60}
M0 -40
c -40 0 -70 -${hair.hairLine.value} -${head.width.value / 2 - 5 + chindWidthMargin} ${head.height.value / 3}
c-20 -${head.height.value / 3 + 50} 40 -${head.height.value / 3 + 60} ${head.width.value / 2 - 5 + chindWidthMargin} -${head.height.value / 3 + 60}
`" />
  </g>
</template>
<script>
export default {
  props: ['type', 'face'],
  computed: {
    chindWidthMargin() {
      return (this.face.head.chinWidth.value - 140) / 4;
    },
    head() {
      return this.face.head;
    },
    hair() {
      return this.face.hair;
    },
  },
};
</script>
