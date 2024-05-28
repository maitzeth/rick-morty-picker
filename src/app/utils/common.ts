import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const extractEpisodesId = (episodes: string[] | undefined) => {
  if (episodes && episodes.length > 0) {
    return episodes.map((episode) => {
      const id = episode.split('/').pop();
      return Number(id);
    }).filter(Number).map(String);
  }

  return null;
};

export const getSharedElements = (array1: string[], array2: string[]) => {
  const parsedArr1 = array1.map(text => text.toLowerCase());
  const parsedArr2 = array2.map(text => text.toLowerCase());
  
  return parsedArr1.filter(element => parsedArr2.includes(element));
}
