<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer  fixed app>
      <Form/>
    </v-navigation-drawer>
    <v-toolbar app fixed >
      <v-toolbar-title></v-toolbar-title>
      <v-btn class="primary" @click="$store.dispatch('generate')">Generate</v-btn>
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

export default {
  components: {
    Form,
  },
  name: 'App',
  data() {
    return {
    };
  },
};
</script>
