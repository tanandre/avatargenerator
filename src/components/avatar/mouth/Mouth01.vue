<template>
  <g stroke-width="2">
    <path
      :d="`M ${mouth.width.value / 2} ${(mouth.upperLip.value < 0 ? -mouth.upperLip.value : 0)}
         c -10 ${mouth.upperLip.value} ${-mouth.width.value + 10} ${mouth.upperLip.value} ${-mouth.width.value} 0
        c 10 ${mouth.height.value + (mouth.upperLip.value < 0 ? mouth.upperLip.value : 0)},
        ${mouth.width.value - 10} ${mouth.height.value  + (mouth.upperLip.value < 0 ? mouth.upperLip.value : 0)} ${mouth.width.value} 0
        M ${-mouth.width.value / 2} 0
          `"
      fill="#fff"
    />
    <path
      stroke="rgba(0,0,0,0.4)"
      stroke-width="2"
      :d="`M-${mouth.width.value / 4} ${mouth.height.value} c 5 3 ${mouth.width.value / 2 - 5} 3 ${mouth.width.value / 2} 0`"
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
