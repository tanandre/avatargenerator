<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer  fixed app>
      <Form/>
    </v-navigation-drawer>
    <v-toolbar app fixed >
      <v-toolbar-title></v-toolbar-title>
      <v-btn class="primary" @click="generateAvatar">Generate [g]</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Form from '@/components/Form.vue';

function rnd(start, end) {
  return Math.floor(start + Math.random() * (end - start + 1));
}

export default {
  components: {
    Form,
  },
  name: 'App',
  data() {
    return {
    };
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyDown);
  },
  methods: {
    onKeyDown(event) {
      if (event.defaultPrevented || event.target.nodeName === 'INPUT') {
        return;
      }
      if (event.key === 'g') {
        this.generateAvatar();
      }
    },
    generateAvatar() {
      this.$router.push({ name: 'avatar', params: { id: rnd(0, Number.MAX_SAFE_INTEGER) } });
    },
  },
};
</script>
