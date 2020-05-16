import { Jugador } from './jugador';

export class Partida{
  id: string;
  fecha: string;
  ganador: boolean;
  juego: string;
  puntos: number;
  jugadores: Jugador[];
}
