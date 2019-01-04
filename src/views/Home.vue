<template>
  <div>
    <AvatarSandbox :face="$store.state.face" :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" />
    <v-textarea outline class="customTA" v-model="$store.state.customPath1" label="front" placeholder="custom svg path" @keydown.stop />
    <v-textarea outline class="customTA" v-model="$store.state.customPath2" label="back" placeholder="custom svg path" @keydown.stop />
  </div>
</template>

<script>
import AvatarSandbox from '@/components/AvatarSandbox.vue';

export default {
  components: {
    AvatarSandbox,
  },
};
</script>
<style>
.customTA {

}
</style>
