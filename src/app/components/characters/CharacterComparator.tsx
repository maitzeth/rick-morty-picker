"use client"
import { useCharacterStore } from '@/app/state/characters';
import { CharacterComparatorRenderer } from './CharacterComparatorRenderer';

export const CharacterComparator = () => {
  const { episodes } = useCharacterStore();

  return (
    <section className="flex flex-wrap flex-col md:flex-row gap-2">
      <div className="flex-1">
        <CharacterComparatorRenderer
          title="Character #1 - Only Episodes"
          episodes={episodes[1]}
        />
      </div>
      <div className="flex-1">
        <CharacterComparatorRenderer
          title="Character #1 & #2 - Shared Episodes"
          episodes={episodes.shared}
        />
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

