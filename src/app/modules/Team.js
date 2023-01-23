export default class Team {
  constructor(...characters) {
    for (let i = 0; i < characters.length; i += 1) {
      this[characters[i].name] = characters[i];
    }
  }

  * [Symbol.iterator]() {
    const characters = Object.values(this);
    for (let i = 0; i < characters.length; i += 1) {
      yield characters[i];
    }
  }
}
