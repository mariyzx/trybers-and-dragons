import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private p1: Fighter, private p2: Fighter) {
    super(p1);
    super.fight();
  }

  fight(): number {
    let resultDamage = 1;
    const players = [this.p1, this.p2];
    let i = 0;
    while (resultDamage > 0) {
      const next = i ? 0 : 1;
      players[i].attack(players[next]);
      resultDamage = players[next].lifePoints;
      i = next;
    }
    return super.fight();
  }
}