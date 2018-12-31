<template>
  <g>
    <path :d="`M${-mouth.width.value / 2} 0 c 5 -5 30 -2 ${mouth.width.value} 0`" stroke-width="3"/>
    <path
      stroke="rgba(0,0,0,0.4)"
      stroke-width="4"
      :d="`M-${mouth.width.value / 6} 10 c 5 -2 10 -2 ${mouth.width.value / 3} 0`"
    />
  </g>
</template>
<script>
export default {
  computed: {
    mouth() {
      return this.$store.state.face.mouth;
    },
  },
};
</script>
