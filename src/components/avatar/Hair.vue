<template>
  <g>
    <defs>
        <radialGradient id="shineColor" cy="1%" r="1">
        <stop offset="25%" stop-color="rgba(255,255,255,0)"/>
        <stop offset="30%" stop-color="rgba(255,255,255,0.2)"/>
        <!-- <stop offset="35%" stop-color="rgba(255,255,255,0.2)"/> -->
        <stop offset="40%" stop-color="rgba(255,255,255,0)"/>
      </radialGradient>
      <g id="hair00">
         <path :d="`
         m0 -40
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
      <g id="hair01">
         <path :d="`
        m0 -20
c 40 0 70 -${hair.hairLine.value} ${head.width.value / 2} ${head.height.value + 30}
c20 -${head.height.value + 80} -40 -${head.height.value + 90} -${head.width.value / 2} -${head.height.value + 90}
m 0 60
c -40 0 -70 -${hair.hairLine.value} -${head.width.value / 2} ${head.height.value + 30}
c-20 -${head.height.value + 80} 40 -${head.height.value + 90} ${head.width.value / 2} -${head.height.value + 90}
`" />
      </g>
      </defs>
    <use :x="`200`" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke="black" stroke-width="2" :fill="hair.color"/>
    <use :x="`200`" :y="startY" :xlink:href="`#hair0${hair.type.value}`" stroke="black" stroke-width="2" fill="url(#shineColor)"/>
      </g>
</template>
<script>
export default {
  computed: {
    head() {
      return this.$store.state.face.head;
    },
    hair() {
      return this.$store.state.face.hair;
    },
    startX() {
      return (
        (this.$store.state.frame.dimensions.width
          - this.$store.state.face.head.width.value)
        / 2
      );
    },
    startY() {
      return (
        (this.$store.state.frame.dimensions.height
          - this.$store.state.face.head.height.value)
          / 2
        + this.$store.state.face.head.offsetY.value
      );
    },
    halfY() {
      return (
        (this.$store.state.frame.dimensions.height
          - this.$store.state.face.head.height.value)
          / 2
        + this.$store.state.face.head.offsetY.value + 40
      );
    },
  },
  render(h) {
    const { hair, head } = this.$store.state.face;

    const depth = 60;
    const height = 60;

    const hstartX = this.startX + head.width.value / 4;
    const partHeadWidth = head.width.value / 4 * 3 / 2;
    const partHeadHeight = head.height.value + head.top.value + head.chin.value;

    const hairStyles = [
      [`M ${hstartX} ${this.startY} 
          q 0 70 ${partHeadWidth} 80 
          t ${partHeadWidth} ${partHeadHeight / 3}
          c 10 -10 50 -100 0 -${partHeadHeight / 2}
          s -50 -60 -${partHeadWidth + partHeadWidth} -28 Z
          `],
      /* type 0 */
      [`M ${this.startX} ${this.halfY} 
          c 0 -100, ${head.width.value / 2} -${depth + 20}, ${head.width.value / 2} -${depth} 
          l 0 -${height}
          c -${head.width.value / 4} -20, -${head.width.value / 2} -20, -${head.width.value / 2 + 10} 20 
          Z`,
      `M ${this.startX + head.width.value} ${this.halfY} 
          c 0 -100, -${head.width.value / 2} -${depth + 20}, -${head.width.value / 2} -${depth} 
          l 0 -${height}
          c ${head.width.value / 4} -20, ${head.width.value / 2} -20, ${head.width.value / 2 + 10} 20 
          Z`],
      /* type 1 */
      [`M ${this.startX} ${this.halfY} 
          c 0 -100, ${head.width.value} -20, ${head.width.value} 0 
          l 10 -80
          c -${head.width.value / 4} -100, -${head.width.value} -50, -${head.width.value + 20} 0 
          Z`],
    ];

    return h('g', {
      attrs: {
        fill: hair.color,
        stroke: 'black',
        'stroke-width': '2',
      },
    }, hairStyles[hair.type.value].map(d => h('path', { attrs: { d } })));
  },
};
</script>
