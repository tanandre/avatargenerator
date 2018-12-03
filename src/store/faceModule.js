function toValue(value, min, max) {
  return {
    value,
    min,
    max,
  };
}

export default {
  state: {
    head: {
      height: toValue(79, 20, 200),
      width: toValue(200, 100, 200),
      chin: toValue(150, 70, 200),
      top: toValue(80, 10, 100),
      offsetY: toValue(0, -50, 50),
      color: '#F0C7B1',
    },
    eyes: {
      outerWidth: toValue(15, 1, 50),
      outerHeight: toValue(10, 1, 50),
      outerColor: '#FFF',
      innerWidth: toValue(6, 1, 50),
      innerHeight: toValue(6, 1, 50),
      innerColor: '#000',
      offsetY: toValue(0, -50, 50),
      wide: toValue(90, 0, 200),
    },
    mouth: {
      width: toValue(60, 10, 150),
      height: toValue(40, 10, 100),
      offsetY: toValue(0, -50, 50),
    },
    nose: {
      width: toValue(10, 10, 50),
      height: toValue(10, 10, 50),
      offsetY: toValue(0, -50, 50),
    },
    ears: {
      width: toValue(30, 10, 50),
      height: toValue(40, 10, 50),
      offsetY: toValue(0, -50, 50),
    },
  },
  mutations: {
    head(state, value) {
      state.head = value;
    },
  },
};
