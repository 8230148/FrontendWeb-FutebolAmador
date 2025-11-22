export interface PlayerDetails {
  playerId: string;
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  position: number;
  heigth: number;
  haveTeam: boolean;
  age: number;
  idTeam?: string | null;
  teamName?: string | null;
  isAdmin?: boolean | null;
}

export interface UpdatePlayerRequest {
  playerId: string;
  name: string;
  dateOfBirth: string;
  address: string;
  email: string;
  phone: string;
  position: number;
  height: number;
}