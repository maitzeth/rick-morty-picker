"use client"
import { useCharacterStore } from '@/state/characters';
import { CharacterComparatorItem } from './CharacterComparatorItem';

export const CharacterComparator = () => {
  const { characters, episodes } = useCharacterStore();

  return (
    <section className="flex gap-2">
      <div className="flex-1">
        <CharacterComparatorItem episodes={episodes[1]} />
      </div>
      <div className="flex-1">
        {/* <CharacterComparatorItem /> */}
      </div>
      <div className="flex-1">
        {/* <CharacterComparatorItem character={characters[2]} /> */}
      </div>
    </section>
  );
};

