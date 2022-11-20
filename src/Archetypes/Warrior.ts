import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private static _instances = 0;
  public habilidade: EnergyType;

  constructor(_name: string) {
    super(_name);
    Warrior._instances += 1;
    this.habilidade = 'stamina';
  }

  get energyType(): EnergyType {
    return this.habilidade;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}