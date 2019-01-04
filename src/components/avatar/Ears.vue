<template>
  <g>
    <defs>
      <g id="ear">
        <path :d="`M -${head.width.value / 2 - wide - 10} ${ears.height.value / 2}
          h-${wide}
          c -${ears.width.value / 2} 0,
            -${ears.width.value} -${ears.height.value}
            0 -${ears.height.value}`"/>
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#ear`" stroke="black" stroke-width="2"/>
    <use :x="`-${startX}`" :y="`${startY}`" transform="scale(-1, 1)" :xlink:href="`#ear`" stroke="black" stroke-width="2"/>
  </g>
</template>
<script>
export default {
  props: ['frame', 'face'],
  data() {
    return {
      wide: 20,
    };
  },
  computed: {
    head() {
      return this.face.head;
    },
    ears() {
      return this.face.ears;
    },
    startX() {
      return this.frame.dimensions.width / 2;
    },
    startY() {
      return this.frame.dimensions.height
          / 2
        + this.face.ears.offsetY.value;
    },
  },
};
</script>
