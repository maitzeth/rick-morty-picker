import { getCharacters } from '@/app/services/characters';
import { getEpisodes } from '@/app/services/episodes';
import { CONFIG } from '@/app/utils/config';

global.fetch = jest.fn();

describe('getEpisodes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array of episodes when multiple IDs are provided', async () => {
    const mockEpisodes = ['1', '2', '3'];

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockEpisodes),
    });

    const episodes = await getEpisodes(mockEpisodes);
    expect(episodes.length).toBe(3);
    expect(fetch).toHaveBeenCalledWith(`${CONFIG.RM_API_URL}/episode/1,2,3`);
  });

  it('should handle null input gracefully without making a fetch call', async () => {
    await expect(getEpisodes(null)).rejects.toThrow('No episodes were provided');
    expect(fetch).not.toHaveBeenCalled();
  });

  it('should return an array with a single episode when a single ID is provided', async () => {
    const mockEpisode = {
      "info": {
        "count": 51,
        "pages": 3,
        "next": "https://rickandmortyapi.com/api/episode?page=2",
        "prev": null
      },
      "results": [
        {
          "id": 1,
          "name": "Pilot",
          "air_date": "December 2, 2013",
          "episode": "S01E01",
          "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
          ],
          "url": "https://rickandmortyapi.com/api/episode/1",
          "created": "2017-11-10T12:56:33.798Z"
        },
      ]
    };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockEpisode),
    });

    const episodes = await getEpisodes(['1']);
    expect(episodes.length).toBe(1);
    expect(fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/episode/1');
  })
});

