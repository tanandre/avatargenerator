<template>
  <v-layout row wrap>
    <div class="slider">
      <v-slider :label="label" v-model="formValue" :max="max" :min="min"></v-slider>
    </div>
    <div class="input">
      <v-text-field
      v-model="formValue"
        class="mt-0"
        hide-details
        single-line
        type="number"
      ></v-text-field>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: ['value', 'label', 'max', 'min'],
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
<style>
.slider {
  width: 70%;
  display: inline-block;
}
.input {
  width: 30%;
  display: inline-block;
}

</style>
