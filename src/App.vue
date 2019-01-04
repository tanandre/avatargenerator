<template>
  <router-view/>
</template>

<script>
import { generateId, download } from '@/js/actions';

export default {
  name: 'App',
  mounted() {
    window.addEventListener('keydown', this.onKeyDown);
  },
  methods: {
    onKeyDown(event) {
      if (event.defaultPrevented || event.target.nodeName === 'INPUT') {
        return;
      }
      if (event.key === 'g' || event.key === 'G') {
        generateId(this.$router);
      } else if ((event.key === 'd' || event.key === 'D') && event.shiftKey) {
        download('avatarSvg');
      }
    },
  },
};
</script>
