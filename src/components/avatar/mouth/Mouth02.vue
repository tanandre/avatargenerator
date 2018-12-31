<template>
  <g stroke-width="2">
    <path id="mouth02Outline"
      :d="`M 0 ${mouth.height.value / 2}
         c ${-mouth.width.value / 3} 0 ${-mouth.width.value / 2} ${-underlipHeight / 2} ${-mouth.width.value / 2} ${-underlipHeight}
         c 0 ${-mouth.upperLip.value / 2} ${mouth.width.value / 4} ${-mouth.upperLip.value} ${mouth.width.value / 2} ${-mouth.upperLip.value}
          M 0 ${mouth.height.value / 2}
         c ${mouth.width.value / 3} 0 ${mouth.width.value / 2} ${-underlipHeight / 2} ${mouth.width.value / 2} ${-underlipHeight}
         c 0 ${-mouth.upperLip.value / 2} ${-mouth.width.value / 4} ${-mouth.upperLip.value} ${-mouth.width.value / 2} ${-mouth.upperLip.value}
          `"
    />
    <path
      stroke="rgba(0,0,0,0.4)"
      stroke-width="2"
      :d="`M-${mouth.width.value / 4} ${mouth.height.value / 2 + 5} c 5 3 ${mouth.width.value / 2 - 5} 3 ${mouth.width.value / 2} 0`"
    />
  </g>
</template>
<script>
export default {
  computed: {
    mouth() {
      return this.$store.state.face.mouth;
    },
    underlipHeight() {
      return this.mouth.height.value - this.mouth.upperLip.value;
    },

  },
};
</script>
