import { useQuery } from '@tanstack/react-query';
import { fetchEpisodes } from '@/app/services/episodes';

export const useGetEpisode = (episodes: string[] | null) => {
  const result = useQuery({
    queryKey: ['episodes', episodes],
    queryFn: () => {
      return fetchEpisodes(episodes);
    },
    enabled: Boolean(episodes),
  });

  return result;
}
