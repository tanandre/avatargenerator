<template>
  <g>
    <path :d="`
         m0 -40
c10 60 20 70 40 80
c0  -40 0 -70 -40 -80
c30 60 40 70 80 70
c0  -40 0 -70 -80 -70
c50 10 40 20 90 60
c20 -50 -20 -100 -90 -60
`"
          ></path>
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
