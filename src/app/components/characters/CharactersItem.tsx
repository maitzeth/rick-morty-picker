import React from 'react';
import { Card, StatusBadge } from '@/app/components/shared';
import Image from 'next/image';
import { Character } from '@/types/character';

interface Props {
  data: {
    id: Character['id'];
    name: Character['name'];
    image: Character['image'];
    status: Character['status'];
    species: Character['species'];
  },
  onClick: () => void;
}

export const CharacterItem = ({ data, onClick }: Props) => {
  return (
    <Card className="hover:shadow-xl">
      <button type="button" className="flex items-center" onClick={onClick}>
        <div className='flex-none'>
          <div className="relative w-[65px] h-[65px] overflow-hidden">
            <Image
              fill
              src={data.image}
              alt={`image of ${data.name}`}
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-3 flex-1">
          <p className="font-bold text-base line-clamp-1 text-left" title={data.name}>{data.name}</p>
          <div className="flex gap-1">
            <div className="flex items-center gap-1">
              {/* @ts-ignore */}
              <StatusBadge status={data.status} />
              <p className="text-xs capitalize">{data.status}</p>
            </div>
            <p className="text-xs">{data.species}</p>
          </div>
        </div>
      </button>
    </Card>
  );
}
