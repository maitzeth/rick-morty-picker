import { create } from 'zustand';
import { Character } from '@/types/character';
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

export const useBearStore = create<CharacterState>()((set) => ({
 characters: {
    1: null,
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

      toast.success(`${character.name} ${MESSAGES.selectionSuccess}`)

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
