<template>
  <g>
    <defs>
      <g id="nose00">
        <path :d="`
        M0 ${nose.height.value - 7}
        c ${nose.width.value / 3} 0 ${nose.width.value / 3 * 2} -5 ${nose.width.value} 0
        s -${nose.width.value / 3 * 2} 15 ${-nose.width.value} 15
        M0 ${nose.height.value - 7}
        c -${nose.width.value / 3} 0 -${nose.width.value / 3 * 2} -5 ${-nose.width.value} 0
        s ${nose.width.value / 3 * 2} 15 ${nose.width.value} 15
        `" fill="rgb(0,0,0, 0.2)" stroke="none"/>
        <path :d="`M${nose.width.value / 2 - 2} ${nose.height.value - 4} c 0 -2 5 -2 ${nose.width.value / 2} 0`"/>
        <path :d="`M-${nose.width.value / 2 - 2} ${nose.height.value - 4} c 0 -2 -5 -2 -${nose.width.value / 2} 0`"/>
      </g>
      <g id="nose01">
        <path :d="`M0 0 c 0 10 5 ${nose.height.value - 10} 0 ${nose.height.value}`"/>
        <path :d="`M${nose.width.value / 4} ${nose.height.value - 4} c 0 -2 5 -2 ${nose.width.value / 4} 0`"/>
        <path :d="`M-${nose.width.value / 4 + 2} ${nose.height.value - 4} c 0 -2 -5 -2 -${nose.width.value / 4} 0`"/>
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#nose0${nose.type.value}`" stroke="black" stroke-width="2"/>
  </g>
</template>
<script>
export default {
  props: ['frame', 'face'],
  computed: {
    nose() {
      return this.face.nose;
    },
    startX() {
      return (
        (this.frame.dimensions.width) / 2
      );
    },
    startY() {
      return (
        this.frame.dimensions.height
          / 2
        + this.face.nose.offsetY.value
      );
    },
  },
};
</script>
