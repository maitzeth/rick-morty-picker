"use client"
import React from 'react';
import { useGetEpisode } from '@/app/hooks/useGetEpisode';
import { CharacterComparatorItem } from './CharacterComparatorItem';
import { SpinnerLoading } from '@/app/components/shared';
import { IoMdAlert } from "react-icons/io";

interface Props {
  episodes: string[] | null;
  title: string;
}

export const CharacterComparatorRenderer = ({ episodes, title }: Props) => {
  const { data, error, status } = useGetEpisode(episodes);
  
  if (episodes && episodes.length > 0) {
    const render = () => {
      if (status === 'pending') {
        return (
          <div className="flex-1 h-full flex items-center justify-center">
            <SpinnerLoading />
          </div>
        )
      }

      if (status === 'error') {
        return (
          <div className="flex-1 h-full flex items-center justify-center flex-col space-y-2">
            <div>
              <IoMdAlert
                aria-label="alert icon"
                className="text-accent-primary"
                size={16}
              />
            </div>
            <p className="text-accent-primary text-sm">{error.message}</p>
          </div>
        )
      }
      
      return (
        <ul className="divide-y divide-gray-200">
          {data.map((episode, index) => {
            return (
              <CharacterComparatorItem
                key={`comparator-${index}`}
                data={{
                  air_date: episode.air_date,
                  name: episode.name,
                  episode: episode.episode
                }}
              />
            )
          })}
        </ul>
      );
    }


    return (
      <div className="border border-accent-primary">
        <header className="border-b border-accent-primary px-4 py-3">
          {title}
        </header>
        <div className="px-4 py-3 h-64 overflow-y-auto">
          {render()}
        </div>
      </div>
    );
  }

  return <div aria-label="no episodes found" />;
};
