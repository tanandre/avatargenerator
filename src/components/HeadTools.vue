<template>
  <div>
    <v-card v-for="(obj, objName) in $store.state.face" :key="objName">
      <v-card-text>
        <h3>{{objName}}</h3>

        <div v-for="(item, itemName) in obj" :key="itemName">
          <InputNumber
            v-if="typeof item === 'number'"
            v-model="$store.state.face[objName][itemName]"
            :label="itemName"
            max="400"
            min="-100"
          />


        <InputNumber
        v-if="$store.state.face[objName][itemName].value !== undefined"
            v-model="$store.state.face[objName][itemName].value"
            :label="itemName"
            :max="$store.state.face[objName][itemName].max()"
            :min="$store.state.face[objName][itemName].min()"
          />

          <div v-else>{{item}}</div>
        </div>
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
