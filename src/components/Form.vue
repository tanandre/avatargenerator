<template>
    <div>
      <v-btn @click="generateAvatar">Generate</v-btn>
      <HeadTools />
    </div>

</template>

<script>
import HeadTools from './HeadTools.vue';

function rnd(start, end) {
  return Math.floor(start + Math.random() * (end - start + 1));
}

export default {
  components: {
    HeadTools,
  },
  methods: {
    generateAvatar() {
      const clone = { ...this.$store.state.face.head };
      Object.entries(clone).forEach((entry) => {
        if (entry[1].value) {
          const newValue = rnd((entry[1].min), Number(entry[1].max));
          entry[1].value = newValue;
        }
      });
      this.$store.commit('head', clone);
    },
  },
};
</script>
