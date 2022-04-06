abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeeleeCharacter extends Character {
  constructor(
    private name: string,
    private specialMoveName: string) {
      super();
    }

  talk(): void {
    console.log(`Hi, I'm ${this.name}. MeeleeCharacter!`);
  }
  specialMove(): void {
    console.log(this.specialMoveName);
  }
}

class LongRangeCharacter extends Character {
  constructor(
    private name: string,
    private specialMoveName: string) {
      super();
    }

  talk(): void {
    console.log(`Hi, I'm ${this.name}. LongRangeCharacter!`);
  }
  specialMove(): void {
    console.log(this.specialMoveName);
  }
}

function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeeleeCharacter('yoshi', 'Super dragon')
const samus = new LongRangeCharacter('samus', 'Zero Laser')

characterPresentation(yoshi);
characterPresentation(samus);