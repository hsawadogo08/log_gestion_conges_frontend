import {Agent} from "./agent.model";

export class Demande {
  constructor(
    public id?: number,
    public motif?: string,
    public dateDebut?: string,
    public dateFin?: string,
    public etat?: string,
    public agent?: Agent,
  ) {
  }
}
