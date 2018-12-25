<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer  fixed app>
      <Form/>
    </v-navigation-drawer>
    <v-toolbar app fixed >
      <v-toolbar-title></v-toolbar-title>
      <v-btn class="primary" @click="generateAvatar">Generate [g]</v-btn>
       <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn href="https://andretan.nl" icon fab><v-icon>home</v-icon></v-btn>
      <v-btn href="https://github.com/tanandre/avatargenerator" icon fab><v-icon>mdi-github-circle</v-icon></v-btn>
    </v-toolbar-items>
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
