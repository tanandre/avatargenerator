<template>
  <g>
    <defs>
        <linearGradient id="eyeWhite">
          <stop offset="2%" stop-color="#000"/>
          <stop offset="50%" stop-color="#aaa"/>
        </linearGradient>
        <path id="eyeOutline" :transform="`rotate(${eyes.rotate.value}, 0, 0)`"
            :d="`M ${eyes.outerWidth.value / 2} 0
          c -${eyes.outerWidth.value / 2} ${eyes.outerHeight.value}, -${eyes.outerWidth.value / 2} ${eyes.outerHeight.value}, -${eyes.outerWidth.value} 0
          c ${eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value - eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value} 0
          Z`"
            stroke="black"
            stroke-width="2"
          ></path>
      <clipPath id="eyeMaskLeft">
        <use href="#eyeOutline" />
      </clipPath>
      <clipPath id="eyeMaskRight">
        <use href="#eyeOutline" transform=" scale(-1, 1)"/>
      </clipPath>
      <g id="eyeBall">
        <circle x="0" y="0" r="50" fill="url(#eyeWhite)"/>
        <ellipse :cx="0" :cy="0" :rx="eyes.innerWidth.value" :ry="eyes.innerWidth.value" fill="brown"></ellipse>
        <ellipse :cx="0" :cy="0" :rx="eyes.innerWidth.value - 3" :ry="eyes.innerWidth.value - 3" fill="#000"></ellipse>
        <ellipse :cx="5" :cy="-3" rx="2" ry="2" fill="white"></ellipse>
      </g>
    </defs>>

    <use :x="startXLeft" :y="startY" xlink:href="#eyeBall" style="clip-path: url(#eyeMaskLeft);" />
    <use :x="startXRight" :y="startY" xlink:href="#eyeBall" style="clip-path: url(#eyeMaskRight);" />
  </g>
</template>

<script>

export default {
  computed: {
    eyes() {
      return this.$store.state.face.eyes;
    },
    startXLeft() {
      return (
        (this.$store.state.frame.dimensions.width
          - this.$store.state.face.eyes.wide.value)
        / 2
      );
    },
    startXRight() {
      return (
        (this.$store.state.frame.dimensions.width
          + this.$store.state.face.eyes.wide.value)
        / 2
      );
    },
    startY() {
      return (
        this.$store.state.frame.dimensions.height / 2
        + this.$store.state.face.eyes.offsetY.value
      );
    },
  },
};
</script>
