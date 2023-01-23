function getRandomValue() {
  return Math.floor(Math.random() * 5 + 1) * 10;
}

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = getRandomValue();
    this.defence = getRandomValue();
  }
}
