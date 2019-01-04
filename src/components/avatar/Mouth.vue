<template>
  <g>
    <defs>
      <linearGradient id="teethWhite">
          <stop offset="0%" stop-color="#888"/>
          <stop offset="30%" stop-color="#fff"/>
          <stop offset="70%" stop-color="#fff"/>
          <stop offset="100%" stop-color="#888"/>
      </linearGradient>
      <radialGradient
                    r="520%"
                    fx="50%"
                    fy="25%"
                    fr="20%"
                   id="teethWhite01">
      <stop offset="2%" stop-color="#888"/>
      <stop offset="6%" stop-color="#fff"/>
    </radialGradient>
      <g id="teeth00">
        <rect :x="-mouth.width.value / 2" :y="-mouth.height.value/2" :width="mouth.width.value" :height="mouth.height.value" fill="#000" />
        <path
          :d="`M -30 -5
            c 20 8 40 8 60 0
            v${-mouth.height.value / 2} h-60
              `"
              stroke="#000"
              stroke-width="2"
              fill="url(#teethWhite)"
        />
      </g>
      <Mouth00 id="mouth00" :face="face"/>
      <Mouth01 id="mouth01" :face="face"/>
      <Mouth02 id="mouth02" :face="face"/>

      <clipPath id="testMask">
        <rect :x="-mouth.width.value / 2" :y="-mouth.height.value/2" :width="mouth.width.value" :height="mouth.height.value" />
      </clipPath>
      <clipPath :id="`mouthMask`">
        <use :href="`#mouth0${mouth.type.value}Outline`" />
      </clipPath>

    </defs>
    <!-- <use :x="`${startX}`" :y="`${startY}`" xlink:href="#teeth00" :style="`clip-path: url(#testMask);`"/> -->
    <use :x="`${startX}`" :y="`${startY}`" xlink:href="#teeth00" :style="`clip-path: url(#mouthMask);`"/>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#mouth0${mouth.type.value}`" stroke="rgb(0,0,0)" fill="transparent"/>
  </g>
</template>
<script>
import Mouth00 from './mouth/Mouth00.vue';
import Mouth01 from './mouth/Mouth01.vue';
import Mouth02 from './mouth/Mouth02.vue';

export default {
  props: ['frame', 'face'],
  components: {
    Mouth00,
    Mouth01,
    Mouth02,
  },
  computed: {
    mouth() {
      return this.face.mouth;
    },
    startX() {
      return (
        this.frame.dimensions.width / 2
      );
    },
    startY() {
      return (
        this.frame.dimensions.height / 2
        + this.face.mouth.offsetY.value
      );
    },
  },
};
</script>
