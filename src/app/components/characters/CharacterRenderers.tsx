"use client";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { CharacterItem } from './CharactersItem';
import { Character } from '@/types/character';
import { SpinnerLoading } from '@/app/components/shared';

const mockData = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  },
] as unknown as Character[];

export const CharactersRenderer = ({ paramsPageLabel, page }: any) => {
  console.log({ paramsPageLabel, page });
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
        {mockData.map((character) => {
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
            />
          );
        })}
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
