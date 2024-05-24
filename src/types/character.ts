export const CharacterStatus = {
  Alive: 'Alive',
  Dead: 'Dead',
  unknown: 'unknown',
} as const;

export enum CharacterGender {
  'Female',
  'Male',
  'Genderless',
  'unknown'
};

export interface Character {
  id: number;
  name: string;
  status: keyof typeof CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}