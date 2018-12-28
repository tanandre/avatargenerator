<template>
  <g>
    <defs>
        <radialGradient id="shineColor" cy="1%" r="1">
        <stop offset="25%" stop-color="rgba(255,255,255,0)"/>
        <stop offset="30%" stop-color="rgba(255,255,255,0.2)"/>
        <stop offset="40%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
      <g id="hair00">
         <path :d="`
         m0 -50
c10 60 20 70 ${head.width.value / 4} 80
c0  0 -20 -20 0 -50
c10 50 20 60 ${head.width.value / 4} 80
c0  0 -20 -20 0 -50
c0 50  0 60 -10 80
c0  0 50 -20 ${head.width.value / 4 - 10} -120
c10 10 10  10 10 15
c 0 -50 -50 -120 -${head.width.value / 4 * 2.5} -100
c0 -10 10 -10 10 -10
c -50 -10 -40 20 -${head.width.value / 4 * 1.5} 20
c -100 10 -50 120  -70 160
c 10 -10 15 -10 ${head.width.value / 8}  -30
c 0 0 5 40 10 50
c 0 10 -10 -50 10 -100
c 0 20 10 30 ${head.width.value / 8} 30
c -10 -10 10 -40 10 -40
c 0 10 10 25 30 20
c -5 -10 -10 -20 10 -35
`"
          ></path>
      </g>
      <Hair01 id="hair01" />
      <Hair04 id="hair04" />
      <g id="hair02">
         <path :d="`
        M0 -40
c 40 0 70 -${hair.hairLine.value} ${head.width.value / 2 - 5} ${head.height1.value / 3}
c20 -${head.height1.value / 3 + 50} -40 -${head.height1.value / 3 + 60} -${head.width.value / 2 - 5} -${head.height1.value / 3 + 60}
M0 -40
c -40 0 -70 -${hair.hairLine.value} -${head.width.value / 2 - 5} ${head.height1.value / 3}
c-20 -${head.height1.value / 3 + 50} 40 -${head.height1.value / 3 + 60} ${head.width.value / 2 - 5} -${head.height1.value / 3 + 60}
`" />
      <g id="hair03">
        </g>

      </g>
      </defs>
        <use :x="startX" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke="black" stroke-width="2" :fill="hair.color"/>
        <use :x="startX" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke="black" stroke-width="2" fill="url(#shineColor)"/>
      </g>
</template>
<script>
import Hair01 from './hair/Hair01.vue';
import Hair04 from './hair/Hair04.vue';

export default {
  components: { Hair01, Hair04 },
  computed: {
    head() {
      return this.$store.state.face.head;
    },
    hair() {
      return this.$store.state.face.hair;
    },
    startX() {
      return (
        (this.$store.state.frame.dimensions.width)
        / 2
      );
    },
    startY() {
      return (
        this.$store.state.frame.dimensions.height / 2
      );
    },
  },
};
</script>
