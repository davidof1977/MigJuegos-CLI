import { Jugador } from './jugador';

export class Partida{
  id: string;
  fecha: string;
  ganador: boolean;
  primeraPartida: boolean;
  juego: string;
  puntos: number;
  jugadores: Jugador[];
}
