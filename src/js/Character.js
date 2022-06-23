export class Character {
  constructor(name, hp, color) {
    this.name = name;
    this.hp = hp;
    this.color = color;
  }

  charAttributes() {
    return [this.name, this.hp, this.color];
  }
}

export class Ranger extends Character {
  constructor(name, hp, color, bowType) {
    super(name, hp, color);
    this.bowType = bowType;
  }
  longRangeAttack() {
    return `you've been attacked, yo`;
  }
}


// const character1 = new Character('Brick', 9001, 'chartrusse');

// const character2 = new Ranger('Ranger Brick', 3, 'Brown', 'Long Bow');

// console.log(character1);
// console.log(character2);