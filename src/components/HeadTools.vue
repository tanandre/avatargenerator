<template>
  <div>
    <v-card v-for="(obj, objName) in $store.state.face" :key="objName" v-if="typeof $store.state.face[objName] === 'object'">
      <v-card-text>
        <h3>{{objName}}</h3>
          <div class="item" v-for="(item, itemName) in obj" :key="itemName">
          <InputNumber
            v-if="$store.state.face[objName][itemName].value !== undefined"
              v-model="$store.state.face[objName][itemName].value"
              :label="itemName"
              :max="$store.state.face[objName][itemName].max($store.state.face)"
              :min="$store.state.face[objName][itemName].min($store.state.face)"
            />
            <input v-else-if="typeof $store.state.face[objName][itemName] === 'string'" v-model="$store.state.face[objName][itemName]"/>
            <input type="checkbox" v-else-if="typeof $store.state.face[objName][itemName] === 'boolean'" v-model="$store.state.face[objName][itemName]"/>
            <div v-else class="warning">{{item}}</div>
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
<style>
.warning {
  color: red;
}
input[type=checkbox] {
  transform: scale(2);
  margin: 0 15px;
}
h3, .item {
  display: inline;
}
</style>
