<template>
  <g>
    <defs>
      <g id="brows00" stroke-width="3">
        <path :transform="`rotate(${brows.rotate.value}, ${-eyes.outerWidth.value}, 0)`"
        :d="`M-${eyes.wide.value / 2 - eyes.outerWidth.value / 2} 0 c -5 -${brows.curve.value} -${eyes.outerWidth.value} -${brows.curve.value} -${eyes.outerWidth.value} 0
        c 0 -5 ${eyes.outerWidth.value} -5 ${eyes.outerWidth.value} 0
        `"/>
        <path :transform="`rotate(${-brows.rotate.value}, ${eyes.outerWidth.value}, 0)`"
        :d="`M${eyes.wide.value / 2 - eyes.outerWidth.value / 2} 0 c 5 -${brows.curve.value} ${eyes.outerWidth.value} -${brows.curve.value} ${eyes.outerWidth.value} 0
        c 0 -5 -${eyes.outerWidth.value} -5 -${eyes.outerWidth.value} 0
        `"/>
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#brows0${brows.type.value}`" stroke="rgba(0,0,0,0.8)" fill="#000"/>
  </g>
</template>
<script>
export default {
  props: ['frame', 'face'],
  computed: {
    eyes() {
      return this.face.eyes;
    },
    brows() {
      return this.face.brows;
    },
    startY() {
      return (
        (this.frame.dimensions.height / 2)
        + this.face.eyes.offsetY.value
        - this.face.eyes.outerHeight.value / 2 - 15
      );
    },
    startX() {
      return this.frame.dimensions.width / 2;
    },
  },
};
</script>
