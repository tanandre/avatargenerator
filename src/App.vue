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
      if (event.key === 'g' || event.key === 'G') {
        this.generateAvatar();
      }
    },
    generateAvatar() {
      this.$router.push({ name: 'avatar', params: { id: rnd(0, Number.MAX_SAFE_INTEGER) } });
    },
    download() {
      console.log('download');
      const svg = document.getElementById('avatarSvg');
      const serializer = new XMLSerializer();
      const svg_blob = new Blob([serializer.serializeToString(svg)],
        { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svg_blob);
      window.location = url;
      // window.open(url, 'svg_win');
    },
  },
};
</script>
