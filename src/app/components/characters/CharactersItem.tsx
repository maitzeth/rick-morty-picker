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
  }
}

export const CharacterItem = ({ data }: Props) => {
  return (
    <Card className="flex hover:shadow-xl items-center px-4 py-2">
      <div className='flex-none'>
        <div className="relative w-[80px] h-[80px] overflow-hidden rounded-full">
          <Image
            fill
            src={data.image}
            alt={`image of ${data.name}`}
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-3 flex-1">
        <p className="font-bold text-lg">{data.name}</p>
        <div className="flex gap-2 text-sm">
          <div className="flex items-center gap-1">
            {/* @ts-ignore */}
            <StatusBadge status={data.status} />
            <p>{data.status}</p>
          </div>
          {'-'}
          <p>{data.species}</p>
        </div>
      </div>
    </Card>
  );
}
