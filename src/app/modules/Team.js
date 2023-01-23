export default class Team {
  constructor(...characters) {
    for (let i = 0; i < characters.length; i += 1) {
      this[characters[i].name] = characters[i];
    }
  }

  [Symbol.iterator]() {
    return {
      characters: Object.entries(this),
      index: 0,
      next() {
        if (this.index < this.characters.length) {
          return { done: false, value: this.characters[this.index++][1] };
        }
        return { done: true };
      },
    };
  }
}
