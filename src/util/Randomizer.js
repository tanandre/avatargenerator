export function randomWithSeed(sd) {
  const x = Math.sin(sd) * 10000;
  return x - Math.floor(x);
}

function random(seed, start, end) {
  return Math.floor(start + randomWithSeed(seed) * (end - start + 1));
}

export class Randomizer {
  constructor(seed) {
    this.seed = seed;
  }

  next(start, end) {
    return random(this.seed++, start, end);
  }
}
