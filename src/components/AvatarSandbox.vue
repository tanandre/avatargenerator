<template>
    <svg :width="frame.dimensions.width" :height="frame.dimensions.height" class="svg" id="avatarSvg">
      <CustomPath :path="$store.state.customPath2"/>
      <Avatar :frame="frame" :face="face"/>
      <CustomPath :path="$store.state.customPath1"/>
      <CustomPath v-if="$store.state.help.grid" :path="this.faceGrid"/>
    </svg>
</template>
<script>

import Avatar from './Avatar.vue';
import CustomPath from '@/components/avatar/CustomPath.vue';

export default {
  props: ['face', 'width', 'height'],
  components: {
    Avatar,
    CustomPath,
  },
  computed: {
    faceGrid() {
      return `
      m200 ${this.frame.dimensions.height / 2 + this.head.height.value / 3 * 2}
    v-${this.head.height.value}
    M${this.frame.dimensions.width / 2 - this.head.width.value / 2} ${this.frame.dimensions.height / 2}
    h${this.head.width.value}
    M${this.frame.dimensions.width / 2 - this.head.width.value / 2} ${this.frame.dimensions.height / 2 + this.face.eyes.offsetY.value}
    h${this.head.width.value}
    M${this.frame.dimensions.width / 2 - this.head.width.value / 2} ${this.frame.dimensions.height / 2 + this.face.nose.offsetY.value}
    h${this.head.width.value}    
    M${this.frame.dimensions.width / 2 - this.head.width.value / 2} ${this.frame.dimensions.height / 2 + this.face.mouth.offsetY.value}
    h${this.head.width.value}    
    `;
    },
    head() {
      return this.face.head;
    },
    frame() {
      return {
        dimensions: {
          width: this.width,
          height: this.height,
        },
      };
    },
  },
};
</script>
<style>
.svg {
  background-color: cadetblue;
}
</style>
