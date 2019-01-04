<template>
    <svg :width="frame.dimensions.width" :height="frame.dimensions.height" class="svg" id="avatarSvg">
      <Avatar :frame="frame" :face="face" />
    </svg>
</template>
<script>

import Avatar from './Avatar.vue';

import generate from '@/js/FaceGenerator';

export default {
  props: ['id', 'width', 'height'],
  components: {
    Avatar,
  },
  computed: {
    face() {
      return generate(this.id);
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
