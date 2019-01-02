<template>
    <div>
      <HeadTools />
      <label>
      <input type="checkbox" v-model="$store.state.help.grid"/>
      Grid
      </label>

    </div>
</template>

<script>
import HeadTools from './HeadTools.vue';

export default {
  components: {
    HeadTools,
  },
};
</script>
