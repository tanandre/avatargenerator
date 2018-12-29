<template>
  <g>
    <path
      v-for="(n, idx) in angles"
      :transform="`rotate(${n} 0 -30)`"
      stroke-width="1"
      :d="'m0 -30' + hairLockRandom(n, idx)"
    ></path>

    <!-- <path stroke-width="1" transform="rotate(-90 0 -40)" :d="`
         m0 -40
c10 60 20 70 40 80
c0  -40 0 -70 -40 -80
c30 60 40 70 80 70
c0  -40 0 -70 -80 -70
c50 10 40 20 90 60
c20 -50 -20 -100 -90 -60
`"          />
    <path stroke-width="1" transform="rotate(-180 0 -40)" :d="`
         m0 -40
c10 60 20 70 40 80
c0  -40 0 -70 -40 -80
c30 60 40 70 80 70
c0  -40 0 -70 -80 -70
c50 10 40 20 90 60
c20 -50 -20 -100 -90 -60
`"          />
    <path stroke-width="1" transform="rotate(-220 0 -40)" :d="`
         m0 -40
c10 60 20 70 40 80
c0  -40 0 -70 -40 -80
c30 60 40 70 80 70
c0  -40 0 -70 -80 -70
c50 10 40 20 90 60
c20 -50 -20 -100 -90 -60
    `"          />-->
  </g>
</template>
<script>
import Randomizer from '@/util/Randomizer';

export default {
  data() {
    return {
      angles: [0], // , -50, -70, -90, -120, 20, 60, 90, 110, 130, 150, 170, 190], // , 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330],
      randomizer: new Randomizer(0),
    };
  },
  computed: {
    head() {
      return this.$store.state.face.head;
    },
    hair() {
      return this.$store.state.face.hair;
    },
  },
  methods: {
    hairLockRandom(angle, idx) {
      const randomizer = new Randomizer(this.$store.state.face.id);
      for (let i = 0; i < idx; i++) {
        randomizer.next(0, 1);
      }
      const length = randomizer.next(70, 120);
      const width = randomizer.next(30, 50);

      const lengthCurve = randomizer.next(50, length);
      const thickness = randomizer.next(30, 70);
      const thickness2 = randomizer.next(30, 70);

      return `
        c10 ${thickness} 20 ${length} ${width} ${length}
        c0  -${thickness2} 0 -${lengthCurve} -${width} -${length}
      `;

    //   return `
    //   c10 0 10 80 30 80
    //   c0 -20 0 -80 -30 -80
    // `;
    },
  },
  watch: {
    '$store.state.face.id': function (id) {
      this.randomizer = new Randomizer(id);
    },
  },
};
</script>
