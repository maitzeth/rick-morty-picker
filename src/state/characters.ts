import { create } from 'zustand';
import { Character, CharacterGender } from '@/types/character';
import { toast } from 'sonner';
import { MESSAGES } from '@/utils/constants';

export type CharacterStateType = {
  characters: {
    1: Character | null;
    2: Character | null;
  };
  episodes: {
    1: string[] | null;
    2: string[] | null;
  }
};

const extractEpisodesId = (episodes: string[] | undefined) => {
  if (episodes && episodes.length > 0) {
    return episodes.map((episode) => {
      const id = episode.split('/').pop();
  
      return id as string;
    });
  }

  return null;
};

interface CharacterState extends CharacterStateType {
  selectCharacter: (character: Character, order: number) => void
}

export const useCharacterStore = create<CharacterState>()((set) => ({
  characters: {
    1: null,
    2: null
  },
  episodes: {
    1: null,
    2: null,
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

      return {
        ...state,
        characters: {
          ...state.characters,
          [order]: character
        },
        episodes: {
          ...state.episodes,
          [order]: extractEpisodesId(character.episode)
        }
      };
    });
  },
}));
