<template>
  <div>
    <!-- <v-card>
      <v-card-text>
        <InputNumber
          v-model="$store.state.face.head.height"
          :label="'height'"
          :max="$store.state.frame.dimensions.height"
        />
        <InputNumber
          v-model="$store.state.face.head.width"
          :label="'width'"
          :max="$store.state.frame.dimensions.width"
        />
        <InputNumber
          v-model="$store.state.face.head.offsetY"
          :label="'offsetY'"
          max="200"
          min="-100"
        />
        <InputNumber v-model="$store.state.face.head.chin" :label="'chin'" max="200"/>
        <InputNumber v-model="$store.state.face.head.top" label="top" max="200"/>
        <v-text-field
          v-model="$store.state.face.head.color"
          class="mt-0"
          hide-details
          single-line
          label="color"
        ></v-text-field>
      </v-card-text>
    </v-card>-->
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
            :max="$store.state.face[objName][itemName].max"
            :min="$store.state.face[objName][itemName].min"
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
