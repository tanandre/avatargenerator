<template>
  <v-layout>
    <label class="label">{{label}}</label>
    <div class="slider">
      <input type="range" v-model="formValue" :max="max" :min="min"/>
    </div>
    <div class="input">
      <input
      v-model="formValue"
        class="mt-0"
        hide-details
        single-line
        type="number"
      />
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
        this.$emit('input', Number(value));
      },
    },
  },

};
</script>
<style>
.label {
}

.slider {
  width: 70%;
  display: inline-block;
}
.input {
  width: 30%;
  display: inline-block;
}

</style>
