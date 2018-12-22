<template>
  <div>
    <Avatar/>
    <v-textarea outline class="customTA" v-model="$store.state.face.customPath1" label="front" placeholder="custom svg path" @keydown.stop />
    <v-textarea outline class="customTA" v-model="$store.state.face.customPath2" label="back" placeholder="custom svg path" @keydown.stop />
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue';

export default {
  components: {
    Avatar,
  },
};
</script>
<style>
.customTA {

}
</style>
