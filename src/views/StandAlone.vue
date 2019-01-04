<template>
  <div>
    <AvatarFrame :id="$store.state.id" :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" />
  </div>
</template>

<script>
import AvatarFrame from '@/components/AvatarFrame.vue';

export default {
  components: {
    AvatarFrame,
  },
};
</script>
<style>
</style>
