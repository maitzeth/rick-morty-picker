import { CONFIG } from '@/utils/config';
import { GetEpisodeResponse } from '@/types/episode';

export async function fetchEpisodes(episodes: string[] | null) {
  const idsString = episodes?.join(',');

  try {
    const result = await fetch(`${CONFIG.RM_API_URL}/episode/${idsString}`);
    if (!result.ok) {
      throw new Error('Something weird happened');
    }
    const response: GetEpisodeResponse = await result.json();
    return response;
  } catch (err) {
    const message = (err as Error).message;
    throw new Error(message);
  }
}