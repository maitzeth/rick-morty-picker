"use client"
import { useCharacterStore } from '@/state/characters';
import { CharacterComparatorRenderer } from './CharacterComparatorRenderer';

export const CharacterComparator = () => {
  const { characters, episodes } = useCharacterStore();

  return (
    <section className="flex gap-2">
      <div className="flex-1">
        <CharacterComparatorRenderer
          title="Character #1 - Only Episodes"
          episodes={episodes[1]}
        />
      </div>
      <div className="flex-1">
        {/* <CharacterComparatorRenderer /> */}
      </div>
      <div className="flex-1">
        <CharacterComparatorRenderer
          title="Character #2 - Only Episodes"
          episodes={episodes[2]}
        />
      </div>
    </section>
  );
};

