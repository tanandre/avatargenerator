<template>
  <router-view/>
</template>

<script>
function rnd(start, end) {
  return Math.floor(start + Math.random() * (end - start + 1));
}

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
        this.generateAvatar();
      }
    },
    generateAvatar() {
      this.$router.push({ params: { id: rnd(0, Number.MAX_SAFE_INTEGER) } });
    },
  },
};
</script>
