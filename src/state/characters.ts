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
    shared: string[] | null;
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

function getSharedElements(array1: string[], array2: string[]) {
  return array1.filter(element => array2.includes(element));
}

interface CharacterState extends CharacterStateType {
  selectCharacter: (character: Character, order: number) => void
}

const what = (episodes1: any, episodes2: any) => {
  console.log(episodes1, episodes2);
}

export const useCharacterStore = create<CharacterState>()((set) => ({
  characters: {
    1: null,
    2: null
  },
  episodes: {
    1: null,
    2: null,
    shared: null,
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

      const updatedCharacters = {
        ...state.characters,
        [order]: character
      };

      const updatedEpisodes = {
        ...state.episodes,
        [order]: extractEpisodesId(character.episode),
      };

      // Calculate shared episodes directly within the new state object
      const sharedEpisodes = updatedEpisodes[1] && updatedEpisodes[2] 
      ? getSharedElements(updatedEpisodes[1], updatedEpisodes[2]) 
      : undefined;

      return {
        ...state,
        characters: updatedCharacters,
        episodes: {
          ...updatedEpisodes,
          ...(sharedEpisodes && { shared: sharedEpisodes }),
        },
      };
    });
  },
}));
