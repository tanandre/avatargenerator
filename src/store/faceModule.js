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
      height: toValue(150, 50, 300),
      width: toValue(200, 50, 300),
      chin: toValue(80, 10, 200),
      top: toValue(40, 10, 200),
      offsetY: toValue(0, -100, 100),
      color: '#F0C7B1',
    },
    eyes: {
      outerWidth: toValue(15, 1, 50),
      outerHeight: toValue(10, 1, 50),
      outerColor: '#FFF',
      innerWidth: toValue(3, 1, 50),
      innerHeight: toValue(3, 1, 50),
      innerColor: '#000',
      offsetY: toValue(0, -50, 50),
      wide: toValue(90, 0, 200),
    },
    mouth: {
      width: toValue(50, 10, 150),
      height: toValue(50, 10, 100),
      offsetY: toValue(0, -50, 50),
    },
  },
};
