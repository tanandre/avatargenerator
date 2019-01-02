<template>
  <g>
    <g  v-if="type == 'front'">
    <path :d="`
      M${-head.width.value / 4} -${head.height.value / 3 - kruin}
c0 60 ${head.width.value / 2} 70 ${head.width.value / 4 * 3+5} 90
c 20 -60 -20 -160 ${-head.width.value / 4 * 3 + 5} -130
      M${-head.width.value / 4} -${head.height.value / 3 - kruin}
c0 60 -10 70 -45 90
c-20 -100 20 -120 55 -130
`"    />

    <path fill="transparent" stroke-width="2" :d="`
      M${-head.width.value / 4} -${head.height.value / 3 - kruin}
c0 60 -10 70 -40 90
      M${-head.width.value / 4} -${head.height.value / 3 - kruin}
c0 60 80 70 ${head.width.value / 4 * 3} 90
      M${-head.width.value / 4 + 20} -${head.height.value / 3 - kruin + 5}
c20 60 70 70 ${head.width.value / 4 * 3 - 10} 90
l-10 -10
      M${-head.width.value / 4 + 50} -${head.height.value / 3 - kruin+ 10}
c20 60 80 70 ${head.width.value / 4 * 3 - 40} 80
l-10 -20
      M${-head.width.value / 4 - 10} -${head.height.value / 3 - kruin - 20}
c0 30 -10 40 -25 60
`"    />
    </g><g v-else>
    <path  :d="`
      M0 -${head.height.value / 3 + ponyHeight}
      c ${head.width.value / 2 + 60} 0 ${head.width.value / 2 } ${head.height.value / 3 * 2} ${head.width.value / 2 + 20} ${head.height.value}
      c 0 -0 -0 5 -30 5
      l -3 -20
      l -2 20
      c 0 -0 -${head.width.value / 4} -0 -${head.width.value / 2 - 15} 10
      M0 -${head.height.value / 3 + ponyHeight}
      c -${head.width.value / 2 + 60} 0 -${head.width.value / 2 } ${head.height.value / 3 * 2} -${head.width.value / 2 + 20} ${head.height.value}
      c 0 -0 -0 5 16 5
      l 3 -12
      l 1 12
      c 0 -0 ${head.width.value / 4} 10 ${head.width.value / 2} 5
`"    />
</g>
  </g>
</template>
<script>
export default {
  props: ['type'],
  data() {
    return {
      kruin: 20,
      kruinX: 50,
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
