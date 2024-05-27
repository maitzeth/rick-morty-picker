"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query'

interface Props {
  episodes: string[] | null;
}

async function fetchEpisodes(episodes: any) {
  const idsString = episodes.join(',');

  try {
    const result = await fetch(`https://rickandmortyapi.com/api/episode/${idsString}`);
    if (!result.ok) {
      throw new Error('Something weird happened');
    }
    const response = await result.json();
    return response;
  } catch (err) {
    const message = (err as Error).message;
    throw new Error(message);
  }
}

export const CharacterComparatorItem = ({ episodes }: Props) => {
  const { data, error, status } = useQuery({
    queryKey: ['episodes', episodes],
    queryFn: () => {
      return fetchEpisodes(episodes);
    },
    enabled: Boolean(episodes),
  });

  console.log({
    data,
    error,
    status
  });

  if (episodes && episodes.length > 0) {
    return (
      <div className="w-full h-[200px] border border-red-500" />
    );
  }

  return null;
};
