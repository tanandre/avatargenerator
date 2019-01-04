<template>
  <g>
    <path
      :d="`m-${head.width.value / 2} -${head.height.value / 2} v${head.height.value}
          c ${-(head.chinWidth.value /4)} ${head.chin.value}, ${head.width.value + (head.chinWidth.value /4)} ${head.chin.value}, ${head.width.value} 0
          v-${head.height.value}
          c 0 -100, -${head.width.value} -100, -${head.width.value} 0Z`"
    />
  </g>
</template>
<script>
export default {
  props: ['face'],
  computed: {
    head() {
      return this.face.head;
    },
  },
};
</script>
