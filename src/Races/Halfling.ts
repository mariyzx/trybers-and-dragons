import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instances;
  }
}