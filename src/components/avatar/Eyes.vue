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
      <path id="eyeOutline00" :transform="`rotate(${eyes.rotate.value}, 0, 0)`"
            :d="`M ${eyes.outerWidth.value / 2} 0
          c -${eyes.outerWidth.value / 2} ${eyes.outerHeight.value}, -${eyes.outerWidth.value / 2} ${eyes.outerHeight.value}, -${eyes.outerWidth.value} 0
          c ${eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value - eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value} 0
          Z`"
            stroke="black"
            stroke-width="3"
          ></path>
      <path id="eyeOutline01" :transform="`rotate(${eyes.rotate.value}, 0, 0)`"
            :d="`M ${eyes.outerWidth.value / 2} -${eyes.outerHeight.value / 2}
c-15 -${eyes.outerHeight.value / 5 * 2} -${eyes.outerWidth.value - 5} -${eyes.outerHeight.value / 5 * 2} -${eyes.outerWidth.value} ${eyes.outerHeight.value / 5 * 2}
c 5 ${eyes.outerHeight.value / 5 * 2} 8 ${eyes.outerHeight.value / 5 * 3} ${eyes.outerWidth.value / 5} ${eyes.outerHeight.value / 5 * 3}
c10 2 ${eyes.outerWidth.value / 2} 2 ${eyes.outerWidth.value / 5 * 3} 0
c 0 0 8 -${eyes.outerHeight.value / 5 * 2} ${eyes.outerWidth.value / 5} -${eyes.outerHeight.value}
`"
            stroke="black"
            stroke-width="3"

          ></path>
      <path id="eyeOutlineTop01" :transform="`rotate(${eyes.rotate.value}, 0, 0)`"
            :d="`M ${eyes.outerWidth.value / 2} -${eyes.outerHeight.value / 2}
c-15 -${eyes.outerHeight.value / 5 * 2} -${eyes.outerWidth.value - 5} -${eyes.outerHeight.value / 5 * 2} -${eyes.outerWidth.value} ${eyes.outerHeight.value / 5 * 2}
c 5 ${eyes.outerHeight.value / 5 * 2} 8 ${eyes.outerHeight.value / 5 * 3} ${eyes.outerWidth.value / 5} ${eyes.outerHeight.value / 5 * 3}
c 0 0 0 0 -${eyes.outerWidth.value / 5 - 5} -${eyes.outerHeight.value / 5 * 3}
c 0 -10 50 -10 ${eyes.outerWidth.value} -${eyes.outerHeight.value / 5 * 2}

`"
          ></path>
      <path id="eyeOutlineTop00" :transform="`rotate(${eyes.rotate.value}, 0, 0)`"
            :d="`M -${eyes.outerWidth.value / 2} 0
          c ${eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value - eyes.outerWidth.value / 4} -${eyes.outerHeight.value} ${eyes.outerWidth.value + 0} 0
          c -${eyes.outerWidth.value / 4 - 5} -${eyes.outerHeight.value + whiskerHeight} -${eyes.outerWidth.value - eyes.outerWidth.value / 4 + 5} -${eyes.outerHeight.value + whiskerHeight} -${eyes.outerWidth.value+ 0} 1
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
        <use href="#eyeOutline00" />
      </clipPath>
      <clipPath id="eyeMaskRight">
        <use href="#eyeOutline00" transform="scale(-1, 1)"/>
      </clipPath>
    </defs>>
    <g>
      <use :x="startXLeft" :y="startY" :xlink:href="`#eyeBall0${eyes.irisType.value}`" style="clip-path: url(#eyeMaskLeft);" />
      <use :x="startXLeft" :y="startY" xlink:href="#eyeOutlineTop00" stroke="black" stroke-width="1" fill="#000" />
    </g>
      <g>
      <use :x="startXRight" :y="startY" :xlink:href="`#eyeBall0${eyes.irisType.value}`" style="clip-path: url(#eyeMaskRight);" />
      <use :x="-startXRight" :y="startY" xlink:href="#eyeOutlineTop00" stroke="black" stroke-width="1" transform="scale(-1, 1)" fill="#000"/>
    </g>
  </g>
</template>

<script>

export default {
  props: ['frame', 'face'],
  data() {
    return {
      whiskerHeight: 5,
    };
  },
  computed: {
    eyes() {
      return this.face.eyes;
    },
    startXLeft() {
      return (
        (this.frame.dimensions.width
          - this.eyes.wide.value)
        / 2
      );
    },
    startXRight() {
      return (
        (this.frame.dimensions.width
          + this.eyes.wide.value)
        / 2
      );
    },
    startY() {
      return (
        this.frame.dimensions.height / 2
        + this.eyes.offsetY.value
      );
    },
  },
};
/**
m200 150
c25 -10 85 -10 100 20
c-20 50 -20 40 -90 35

 */
</script>
