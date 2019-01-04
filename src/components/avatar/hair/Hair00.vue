<template>
  <g>
    <path :d="`
         m0 -50
c10 60 20 70 ${head.width.value / 4} 80
c0  0 -20 -20 0 -50
c10 50 20 60 ${head.width.value / 4} 80
c0  0 -20 -20 0 -50
c0 50  0 60 -10 80
c0  0 50 -20 ${head.width.value / 4 - 10} -120
c10 10 10  10 10 15
c 0 -50 -50 -120 -${head.width.value / 4 * 2.5} -100
c0 -10 10 -10 10 -10
c -50 -10 -40 20 -${head.width.value / 4 * 1.5} 20
c -100 10 -50 120  -70 160
c 10 -10 15 -10 ${head.width.value / 8}  -30
c 0 0 5 40 10 50
c 0 10 -10 -50 10 -100
c 0 20 10 30 ${head.width.value / 8} 30
c -10 -10 10 -40 10 -40
c 0 10 10 25 30 20
c -5 -10 -10 -20 10 -35
`"
          ></path>
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
  },
};
</script>
