import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private p1: Fighter, private p2: Fighter) {
    super(p1);
    super.fight();
  }

  fight(): number {
    if (this.p1.lifePoints > 0 && this.p2.lifePoints > 0) {
      this.p1.attack(this.p2);
      this.p2.attack(this.p1);
    }

    if (this.p1.lifePoints === -1) return -1;
    return 1;
  }
}