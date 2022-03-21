function randomizer(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

module.exports = randomizer;
