<template>
  <g>
    <defs>
      <g id="neck">
        <path :d="`M-${width / 4} 0
        c -10 ${neckHeight - 10} -20 ${neckHeight} -30 ${neckHeight}
        c 0 30 ${width / 2 + 60} 30 ${width / 2 + 60} 0
        c -30 0 -20 -${neckHeight - 10} -10 -${neckHeight}`"/>
      </g>
      <g>
        <path id="border" :d="`
        m0 0
c 0 40 ${borderWidth} 40 ${borderWidth} 0
l ${borderThickness1} ${borderThickness2}
c 0 40 -${borderWidth + borderThickness1 + borderThickness2} 40 -${borderWidth + borderThickness1 + borderThickness2} 0
l ${borderThickness1} -${borderThickness2}
`" />
        </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neck`" stroke="black" stroke-width="2"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#neck`" fill="rgb(0,0,0,0.2)" stroke-width="2"/>
    <use :x="`${startX - borderWidth / 2}`" :y="`345`" :xlink:href="`#border`" fill="#fff" stroke-width="2" stroke="#000"/>
  </g>
</template>
<script>
export default {
  data() {
    return {
      borderThickness1: 10,
      borderThickness2: 10,
      borderHeight: 10,
      borderWidth: 90,
      neckHeight: 160,
    };
  },

  computed: {
    frameWidth() {
      return this.$store.state.frame.dimensions.width;
    },
    startX() {
      return this.$store.state.frame.dimensions.width / 2;
    },
    startY() {
      return this.$store.state.frame.dimensions.height / 2;
    },
    width() {
      return this.$store.state.face.head.width.value / 2;
    },

    halfHeight() {
      return this.$store.state.frame.dimensions.height / 2;
    },
  },
};
</script>
