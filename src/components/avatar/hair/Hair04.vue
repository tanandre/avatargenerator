<template>
  <g>
    <path fill-rule="evenodd"
      :d="`
        M-30 -40
c 0 80 150 50 ${head.width.value / 2 + 10} 170
c 100 -220 -40 -220 -${head.width.value / 4 + 10} -220
c-50 0 -150 0 -${head.width.value / 2 + 10} 140
c 0 -50 10 -70 ${head.width.value / 4 + 10} -90
`"
    />
  </g>
</template>
<script>
export default {
  props: ['type', 'face'],
  computed: {
    head() {
      return this.face.head;
    },
    hair() {
      return this.face.hair;
    },
    startX() {
      return this.frame.dimensions.width / 2;
    },
    startY() {
      return (
        this.frame.dimensions.height / 2
        + this.face.head.offsetY.value
      );
    },
  },
};
</script>
