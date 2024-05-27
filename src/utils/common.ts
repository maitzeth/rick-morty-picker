import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const extractEpisodesId = (episodes: string[] | undefined) => {
  if (episodes && episodes.length > 0) {
    return episodes.map((episode) => {
      const id = episode.split('/').pop();
  
      return id as string;
    });
  }

  return null;
};

export const getSharedElements = (array1: string[], array2: string[]) => {
  return array1.filter(element => array2.includes(element));
}
