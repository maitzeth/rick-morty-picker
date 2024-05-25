"use client";
import { CharacterItem } from './CharactersItem';
import { RendererProps } from '@/types/common';
import { cn } from '@/utils/common';

export const CharactersRenderer = ({ data, page, paramsPageLabel, title, alignTitle }: RendererProps) => {
  return (
    <div>
      <header className="mb-10">
        <h2 className={cn('text-2xl font-bold', {
          'text-left': alignTitle === 'default',
          'text-right': alignTitle === 'right',
        })}>{title}</h2>
      </header>
      <div className="border border-gray-200 p-2 rounded-xl">
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.results.map((character) => {
            return (
              <CharacterItem
                key={character.id}
                data={{
                  id: character.id,
                  name: character.name,
                  image: character.image,
                  status: character.status,
                  species: character.species,
                }}
                onClick={() => console.log(character)}
              />
            );
          })}
        </div>
      </div>
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
