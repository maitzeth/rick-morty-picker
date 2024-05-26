import { create } from 'zustand';
import { Character, CharacterGender } from '@/types/character';
import { toast } from 'sonner';
import { MESSAGES } from '@/utils/constants';

export type CharacterStateType = {
  characters: {
    1: Character | null;
    2: Character | null;
  };
};

interface CharacterState extends CharacterStateType {
  selectCharacter: (character: Character, order: number) => void
}

export const useCharacterStore = create<CharacterState>()((set) => ({
 characters: {
    1: {
      "id": 17,
      "name": "Annie",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": CharacterGender.Female,
      "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
          "name": "Anatomy Park",
          "url": "https://rickandmortyapi.com/api/location/5"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
      "episode": [
          "https://rickandmortyapi.com/api/episode/3"
      ],
      "url": "https://rickandmortyapi.com/api/character/17",
      "created": "2017-11-04T22:21:24.481Z"
  },
    2: null
 },
  selectCharacter: (character, order) => {
    const characterId = character.id;

    return set((state) => {
      const charAlreadySelected = Object.values(state.characters).some(char => {
        return char && char.id === characterId;
      });

      if (charAlreadySelected) {
        toast.error(MESSAGES.alreadySelected)
        return state;
      }

      toast.success(`${character.name} ${MESSAGES.selectionSuccess}`);

      console.log(state);

      return {
        ...state,
        characters: {
          ...state.characters,
          [order]: character
        }
      };
    });
  },
}));
