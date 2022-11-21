import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private p: Fighter,
    private monsters: Fighter[] | SimpleFighter[],
  ) {
    super(p);
    super.fight();
  }

  testDamage() {
    if (this.p.lifePoints === -1 || this.monsters.length === 0) return -1;
    return 1;
  }

  fight(): number {
    let resultDamage = 1;
    while (resultDamage === 1) {
      this.p.attack(this.monsters[getRandomInt(0, this.monsters.length - 1)]);
      this.monsters.forEach((monster, i) => {
        if (monster.lifePoints === -1) {
          this.monsters.splice(i, 1);
        } else {
          monster.attack(this.p);
        }
      });
      resultDamage = this.testDamage();
    }
    return super.fight();
  }
}
