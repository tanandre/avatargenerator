<template>
  <g>
    <defs>
      <g id="shirt">
        <path :d="`m-${width} 0
c ${width / 5} -${height} ${width / 2} -${height} ${width} -${height}
c ${width / 2} 0 ${width - width / 5} 0 ${width} ${height}`"/>
      </g>
      <g id="shirt3" transform="scale(0.9, 0.9)">
        <use href="#shirt" />
      </g>
      <g id="border" >
        <path :d="`
        m0 0
c 0 ${borderDepth} ${borderWidth} ${borderDepth} ${borderWidth} 0
l ${borderThickness1} ${borderThickness2}
c 0 ${borderDepth} -${borderWidth + borderThickness1 + borderThickness2} ${borderDepth} -${borderWidth + borderThickness1 + borderThickness2} 0
l ${borderThickness1} -${borderThickness2}`" />
        </g>
    </defs>
    <g v-if="position === 0">
      <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#shirt`" stroke="black" stroke-width="2" :fill="`${color1}`"/>
      <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#shirt`" stroke="black" stroke-width="2" fill="rgba(0,0,0,0.2)"/>
      <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#shirt3`"  :fill="`${color1}`" />
    </g>
    <g v-if="position === 1">
      <use :x="`${startX - borderWidth / 2}`" :y="`${startY - height - 5}`" :xlink:href="`#border`" fill="#fff" stroke-width="2" stroke="#000"/>
    </g>
  </g>
</template>
<script>
export default {
  props: ['color1', 'color2', 'position'],
  data() {
    return {
      width: 125,
      height: 50,
      borderThickness1: 10,
      borderThickness2: 10,
      borderHeight: 10,
      borderWidth: 90,
      borderDepth: 50,
    };
  },
  computed: {
    startX() {
      return this.$store.state.frame.dimensions.width / 2;
    },
    startY() {
      return this.$store.state.frame.dimensions.height;
    },
  },
};
</script>
