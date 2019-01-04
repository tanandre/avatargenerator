<template>
  <div>
    <AvatarSandbox :face="$store.state.face"/>
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
