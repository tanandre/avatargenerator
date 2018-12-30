<template>
  <g>
    <defs>
      <Mouth00 id="mouth00" />
      <Mouth01 id="mouth01" />
    </defs>
    <use :x="`${startX}`" :y="`${startY}`" :xlink:href="`#mouth0${mouth.type.value}`" stroke="rgba(0,0,0,0.8)"/>
  </g>
</template>
<script>
import Mouth00 from './mouth/Mouth00.vue';
import Mouth01 from './mouth/Mouth01.vue';

export default {
  components: {
    Mouth00,
    Mouth01,
  },
  computed: {
    mouth() {
      return this.$store.state.face.mouth;
    },
    startX() {
      return (
        this.$store.state.frame.dimensions.width / 2
      );
    },
    startY() {
      return (
        this.$store.state.frame.dimensions.height / 2
        + this.$store.state.face.mouth.offsetY.value
      );
    },
  },
};
</script>
