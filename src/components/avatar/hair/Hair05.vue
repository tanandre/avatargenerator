<template>
  <g>
    <path
      v-for="(n, idx) in angles"
      :transform="`rotate(${n} 0 -40)`"
      stroke-width="1"
      :d="'m0 -40' + hairLockRandom(n, idx)"
    ></path>
  </g>
</template>
<script>
import Randomizer from '@/util/Randomizer';

export default {
  data() {
    return {
      angles: [-20, -50, -70, -90, -120, -140, 20, 60, 90, 110, 130, 150, 170, 190], // , 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330],
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
