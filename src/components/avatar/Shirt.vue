<template>
  <g>
    <defs>
      <g id="shirt">
        <path :d="`m-${width} 0
c ${width / 5} -${height} ${width / 2} -${height} ${width} -${height}
c ${width / 2} 0 ${width - width / 5} 0 ${width} ${height}`"/>
        <!-- <path :d="`m-125 0
c 20-50 40 -50 125 -50
c 85 0 105 0 125 50`"/> -->
      </g>
      <g id="shirt3" transform="scale(0.9, 0.9)">
        <use href="#shirt" />
      </g>
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#shirt`" stroke="black" stroke-width="2" fill="#aa0000"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#shirt3`"  fill="#ff0000" />
  </g>
</template>
<script>
export default {
  data() {
    return {
      width: 125,
      height: 50,
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
