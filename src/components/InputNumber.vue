<template>
  <v-layout row wrap>
    <v-flex>
      <v-slider :label="label" v-model="formValue" :max="max"></v-slider>
    </v-flex>
    <v-flex>
      <v-text-field
      v-model="formValue"
        class="mt-0"
        hide-details
        single-line
        type="number"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['value', 'label', 'max'],
  computed: {
    formValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

};
</script>
