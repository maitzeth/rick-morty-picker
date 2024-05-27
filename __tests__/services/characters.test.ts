import { getCharacters } from '@/app/services/characters';
import { getEpisodes } from '@/app/services/episodes';
import { CONFIG } from '@/app/utils/config';

global.fetch = jest.fn();

describe('getCharacters', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a valid response when fetch is successful', async () => {
    const mockResponse = {
      info: {
        count: 671,
        pages: 34,
        next: 'https://rickandmortyapi.com/api/character?page=2',
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/1'],
          url: 'https://rickandmortyapi.com/api/character/1',
          created: '2017-11-04T18:48:46.250Z',
        },
      ],
    };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const response = await getCharacters(1);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${CONFIG.RM_API_URL}/character?page=1`);
  });

  it('should throw an error when the fetch response is not ok', async () => {
    const message = 'Internal Server Error';

    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      statusText: message
    });

    await expect(getCharacters(1)).rejects.toThrow(message);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${CONFIG.RM_API_URL}/character?page=1`);
  });

  it('should throw an error when the response cannot be parsed as JSON', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockRejectedValue(new Error('Failed to parse JSON')),
    });

    await expect(getCharacters(1)).rejects.toThrow('Failed to parse JSON');
  });
});

