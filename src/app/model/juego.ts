import { Partida } from './partida';

export class Juego{
  id: string;
  nombre: string;
  enColeccion: boolean;
  enSeguimiento: boolean;
  enListaDeseos: boolean;
  partidas: Partida[];
}
