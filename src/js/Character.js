export default class Character {
  constructor(name, hp, color) {
    this.name = name;
    this.hp = hp;
    this.color = color;
  }

  charAttributes() {
    return [this.name, this.hp, this.color];
  }
}
