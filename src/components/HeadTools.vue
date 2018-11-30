<template>
  <div>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <InputNumber v-model="$store.state.face.head.height" :label="'height'" :max="$store.state.frame.dimensions.height"/>
          <InputNumber v-model="$store.state.face.head.width" :label="'width'" :max="$store.state.frame.dimensions.width"/>
          <v-btn>test</v-btn>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import InputNumber from './InputNumber.vue';

export default {
  components: {
    InputNumber,
  },
};
</script>
