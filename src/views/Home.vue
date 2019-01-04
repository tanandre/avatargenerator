<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer  fixed app>
      <Form/>
    </v-navigation-drawer>
    <v-toolbar app fixed >
      <v-toolbar-title></v-toolbar-title>
      <v-btn class="primary" @click="generateAvatar" title="Generate random avatar (shortkey G)">Generate [g]</v-btn>
      <v-btn @click="download" title="View SVG" icon fab><v-icon>image</v-icon></v-btn>
       <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn href="https://andretan.nl" icon fab><v-icon>home</v-icon></v-btn>
      <v-btn href="https://github.com/tanandre/avatargenerator" icon fab><v-icon>mdi-github-circle</v-icon></v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>

  <div>
    <AvatarSandbox :face="$store.state.face" :width="$store.state.frame.dimensions.width" :height="$store.state.frame.dimensions.height" />
    <v-textarea outline class="customTA" v-model="$store.state.customPath1" label="front" placeholder="custom svg path" @keydown.stop />
    <v-textarea outline class="customTA" v-model="$store.state.customPath2" label="back" placeholder="custom svg path" @keydown.stop />
  </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Form from '@/components/Form.vue';
import { generateId, download } from '@/js/actions';

import AvatarSandbox from '@/components/AvatarSandbox.vue';


export default {
  components: {
    Form,
    AvatarSandbox,
  },
  methods: {
    generateAvatar() {
      generateId(this.$router);
    },
    download() {
      download('avatarSvg');
    },
  },
};
</script>
<style>
</style>
