"use client"
import React from 'react';
import { useGetEpisode } from '@/hooks/useGetEpisode';

interface Props {
  episodes: string[] | null;
}

export const CharacterComparatorItem = ({ episodes }: Props) => {
  const result = useGetEpisode(episodes);

  console.log(result.data);

  if (episodes && episodes.length > 0) {
    return (
      <div className="w-full h-[200px] border border-red-500" />
    );
  }

  return null;
};
