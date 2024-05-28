"use client";
import { CharacterStateType, useCharacterStore } from '@/app/state/characters';
import { Character } from '@/app/types/character';
import { RendererProps } from '@/app/types/common';
import { useCallback } from 'react';
import { CharacterItem } from './CharactersItem';
import { Pagination } from '@/app/components/shared';

export const CharactersRenderer = ({ data, page, paramsPageLabel, order }: RendererProps) => {
  const { selectCharacter, characters } = useCharacterStore();

  const handleSelectCharacter = useCallback((char: Character) => {
    selectCharacter(char, order);
  }, [order, selectCharacter]);

  const orderKey = order as keyof CharacterStateType['characters'];
  const selectedCharacter = characters[orderKey] ? characters[orderKey] : null;

  return (
    <div>
      {data ? (
        <div className="border border-accent-primary p-2 rounded-xl py-5">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.results.map((character) => {
              return (
                <CharacterItem
                  key={character.id}
                  data={character}
                  onClick={handleSelectCharacter}
                  selectedCharacterId={selectedCharacter?.id}
                />
              );
            })}
          </div>
          <Pagination
            currentPage={page}
            totalPages={data.info.pages}
            paramsPageLabel={paramsPageLabel}
          />
        </div>
      ) : (
        <div>
          <p>No characters found</p>
        </div>
      )}
    </div>
  )
};

export const Loader = () => {
  return (
    <div className="flex-1 min-h-[400px] flex items-center justify-center bg-gray-200 rounded-md">
      <h1 className="text-xl">Loading...</h1>
    </div>
  )
}
