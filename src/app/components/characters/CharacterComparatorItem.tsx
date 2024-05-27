import React from 'react';
import { Episode } from '@/types/episode';

interface Props {
  data: Episode;
}

export const CharacterComparatorItem = ({ data }: Props) => {
  return (
    <li className="flex items-center text-sm gap-3 py-2">
      <div className="flex-none">
        <p className="text-accent-primary">
          {data.episode}
        </p>
      </div>
      <div className="flex-1">
        <p className="text-gray-500">
          {data.name}
        </p>
      </div>
      <div className="flex-none">
        <p className="text-gray-500">
          {data.air_date}
        </p>
      </div>
    </li>
  )
}
