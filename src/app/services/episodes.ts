import { CONFIG } from '@/app/utils/config';
import { Episode } from '@/app/types/episode';

export const getEpisodes = async (episodes: string[] | null) => {
  const idsString = episodes?.join(',');

  if (!episodes) {
    throw new Error('No episodes were provided');
  }

  try {
    const result = await fetch(`${CONFIG.RM_API_URL}/episode/${idsString}`);

    if (!result || !result.ok) {
      throw new Error('Something weird happened');
    }

    const response = await result.json();

    if (Array.isArray(response)) {
      return response as Episode[];
    }
    
    // Sometimes when you select a character and they only had one episode
    // returns an object
    return [response] as Episode[];
  } catch (err) {
    const message = (err as Error).message;
    throw new Error(message);
  }
}