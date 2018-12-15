<template>
  <g>
    <defs>
      <radialGradient id="iris00">
        <stop offset="40%" stop-color="gold"/>
        <stop offset="85%" stop-color="green"/>
      </radialGradient>
        <radialGradient id="iris01">
        <stop offset="40%" stop-color="#9ee3f9"/>
        <stop offset="85%" stop-color="#0f76ff"/>
      </radialGradient>
      <linearGradient id="iris02" gradientTransform="rotate(90)">
          <stop offset="20%" stop-color="#000"/>
          <stop offset="50%" stop-color="#C55010"/>
      </linearGradient>
      <linearGradient id="eyeWhite" gradientTransform="rotate(80)">
        <stop offset="45%" style="stop-color:rgb(0,0,0);stop-opacity:0.8" />
        <stop offset="50%" style="stop-color:rgb(0,0,0);stop-opacity:0" />
      </linearGradient>
      <path id="eyeOutline" :transform="`rotate(${eyes.rotate.value}, 0, 0)`"
            :d="`M ${eyes.outerWidth.value / 2} 0
          c -${eyes.outerWidth.value / 2} ${eyes.outerHeight.value}, -${eyes.outerWidth.value / 2} ${eyes.outerHeight.value}, -${eyes.outerWidth.value} 0
          c ${eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value - eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value} 0
          Z`"
            stroke="black"
            stroke-width="3"

          ></path>
          <path id="eyeOutlineTop" :transform="`rotate(${eyes.rotate.value}, 0, 0)`"
            :d="`M -${eyes.outerWidth.value / 2} 0
          c ${eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value - eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value} 0
          `"
          ></path>
      <g id="eyeBall00">
        <circle x="0" y="0" r="50" fill="#fff"/>
        <ellipse  stroke="black"
            stroke-width="1" :cx="0" :cy="0" :rx="eyes.innerWidth.value / 2" :ry="eyes.innerWidth.value / 1.5"
             :fill="`url(#iris0${eyes.iris.value})`"></ellipse>
        <circle :cx="0" :cy="0" r="8" fill="black" />
        <ellipse :cx="5" :cy="-4" rx="4" ry="5" fill="white"></ellipse>
      </g>
      <g id="eyeBall01">
        <circle x="0" y="0" r="50" fill="#fff"/>
        <ellipse  stroke="black"
            stroke-width="3" :cx="0" :cy="0" :rx="eyes.innerWidth.value / 2" :ry="eyes.innerWidth.value / 2"
             :fill="`url(#iris0${eyes.iris.value})`"></ellipse>
        <circle :cx="0" :cy="0" r="6" fill="black" />
        <ellipse :cx="5" :cy="-4" rx="2" ry="3" fill="white"></ellipse>
      </g>
      <clipPath id="eyeMaskLeft">
        <use href="#eyeOutline" />
      </clipPath>
      <clipPath id="eyeMaskRight">
        <use href="#eyeOutline" transform="scale(-1, 1)"/>
      </clipPath>
    </defs>>
    <g>
      <use :x="startXLeft" :y="startY" xlink:href="#eyeOutlineTop" stroke="black" stroke-width="8" />
      <use :x="startXLeft" :y="startY" :xlink:href="`#eyeBall0${eyes.irisType.value}`" style="clip-path: url(#eyeMaskLeft);" />
    </g>
      <g>
      <use :x="-startXRight" :y="startY" xlink:href="#eyeOutlineTop" stroke="black" stroke-width="8" transform="scale(-1, 1)" />
      <use :x="startXRight" :y="startY" :xlink:href="`#eyeBall0${eyes.irisType.value}`" style="clip-path: url(#eyeMaskRight);" />
    </g>
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
          - this.eyes.wide.value)
        / 2
      );
    },
    startXRight() {
      return (
        (this.$store.state.frame.dimensions.width
          + this.eyes.wide.value)
        / 2
      );
    },
    startY() {
      return (
        this.$store.state.frame.dimensions.height / 2
        + this.eyes.offsetY.value
      );
    },
  },
};
</script>
