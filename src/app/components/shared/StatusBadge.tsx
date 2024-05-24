import React from 'react';
import { CharacterStatus } from '@/types/character';
import { cn } from '@/utils/common';

interface Props {
  status: keyof typeof CharacterStatus
}

const statusColors = new Map([
  [CharacterStatus.Alive, 'bg-green-500'],
  [CharacterStatus.Dead, 'bg-red-500'],
  [CharacterStatus.unknown, 'bg-gray-400'],
]);

export const StatusBadge = ({ status }: Props) => {
  const bgColor = statusColors.get(status);

  if (bgColor) {
    return (
      <div
        aria-label={`status badge for ${status}`}
        className={cn('w-3 h-3 rounded-full', bgColor)}
      />
    );
  }


  return null;
};
