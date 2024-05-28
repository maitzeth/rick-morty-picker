import React, { memo } from 'react';
import { Card, StatusBadge } from '@/app/components/shared';
import Image from 'next/image';
import { Character } from '@/app/types/character';
import { cn } from '@/app/utils/common';

interface Props {
  data: Character,
  onClick: (character: Character) => void;
  selectedCharacterId: number | undefined;
  displayImage?: boolean;
}

const Item = ({ data, onClick, selectedCharacterId, displayImage = true }: Props) => {
  const isSelected = selectedCharacterId === data.id;

  return (
    <Card className="hover:shadow-xl overflow-hidden">
      <button
        type="button"
        className={cn("flex items-center", {
          "opacity-40 cursor-not-allowed": isSelected,
        })}
        onClick={() => onClick(data)}
        disabled={isSelected}
      >
        <div className='flex-none'>
          {displayImage && (
            <div className="relative size-[80px] md:size-[65px] overflow-hidden">
              <Image
                fill
                src={data.image}
                alt={`image of ${data.name}`}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
        <div className="p-3 flex-1">
          <p className="font-bold text-base line-clamp-1 text-left" title={data.name}>
            {data.name}
          </p>
          <div className="hidden md:flex gap-1">
            <div className="flex items-center gap-1 ">
              <StatusBadge status={data.status} />
              <p className="text-xs capitalize">{data.status}</p>
            </div>
            <p className="text-xs text-left">{data.species}</p>
          </div>
        </div>
      </button>
    </Card>
  );
}

export const CharacterItem = memo(Item);
