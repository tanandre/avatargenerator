<template>
  <g>
    <defs>
          <path :d="`
      M${-kruinX} -${head.height.value / 3 + kruin}
c0 60 10 100 -70 140
c-10 -40 -20 -100 70 -140
`"    />
    <path :d="`
      M${-kruinX} -${head.height.value / 3 + kruin}
c0 60 10 100 -50 140
c-10 -40 -20 -100 50 -140
`"    />
    <path :d="`
      M${-kruinX} -${head.height.value / 3 + kruin}
c0 60 20 100 -10 130
c-10 -40 -20 -80 10 -130
`"    />
    <path :d="`
      M${-kruinX} -${head.height.value / 3 + kruin}
  c30 60 10 100 140 150
c10 -40 -0 -150 -140 -150

`"    />
    <path :d="`
      M${-kruinX} -${head.height.value / 3 + kruin}
c30 120 140 100 110 170
c40 -50 40 -180 -110 -170
`"    />
    <path :d="`
      M${-kruinX} -${head.height.value / 3 + kruin}
c30 60 10 100 100 130
c10 -40 -20 -130 -100 -130
`"    />
    <path :d="`
      M${-kruinX} -${head.height.value / 3 + kruin}
c0 60 10 100 40 120
c10 -40 20 -80 -40 -120
`"    />

    </defs>
    <g  v-if="type == 'front'">
    <path :d="`
      M${-kruinX} -${head.height.value / 3 + kruin}
c0 60 10 100 -70 140
c-10 -40 -20 -100 70 -140
      M${-kruinX} -${head.height.value / 3 + kruin}
c0 60 10 100 -50 140
c-10 -40 -20 -100 50 -140
      M${-kruinX} -${head.height.value / 3 + kruin}
c0 60 20 100 -10 130
c-10 -40 -20 -80 10 -130
      M${-kruinX} -${head.height.value / 3 + kruin}
c0 60 10 100 40 120
c10 -40 20 -80 -40 -120
      M${-kruinX} -${head.height.value / 3 + kruin}
c30 60 10 100 100 130
c10 -40 -20 -130 -100 -130
      M${-kruinX} -${head.height.value / 3 + kruin}
c30 120 140 100 110 170
c40 -50 40 -180 -110 -170
      M${-kruinX} -${head.height.value / 3 + kruin}
  c30 60 10 100 140 150
c10 -40 -0 -150 -140 -150

`"    />

    </g><g v-else>
    <path  :d="`
      M0 -${head.height.value / 3 + ponyHeight}
      c ${head.width.value / 2 + 80} 30 ${head.width.value / 2 } ${head.height.value / 3 * 2} ${head.width.value / 2 + 20} ${head.height.value}
      c 0 -0 -0 5 -30 5
      l -3 -20
      l -2 20
      c 0 -0 -${head.width.value / 4} -0 -${head.width.value / 2 - 15} 10
      M0 -${head.height.value / 3 + ponyHeight}
      c -${head.width.value / 2 + 80} 30 -${head.width.value / 2 } ${head.height.value / 3 * 2} -${head.width.value / 2 + 20} ${head.height.value}
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
      kruinX: 30,
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
/**
 *

 M160 100
c0 60 10 100 40 120
c10 -40 20 -80 -40 -120
M160 100
c30 60 10 100 100 130
c10 -40 -20 -130 -100 -130
M160 100
c30 120 140 100 110 170
c40 -50 40 -180 -120 -170
 */
</script>
