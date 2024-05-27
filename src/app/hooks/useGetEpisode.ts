import { useQuery } from '@tanstack/react-query';
import { getEpisodes } from '@/app/services/episodes';

export const useGetEpisode = (episodes: string[] | null) => {
  const result = useQuery({
    queryKey: ['episodes', episodes],
    queryFn: () => {
      return getEpisodes(episodes);
    },
    enabled: Boolean(episodes),
  });

  return result;
}
