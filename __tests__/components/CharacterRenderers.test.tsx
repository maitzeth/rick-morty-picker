import { CharactersRenderer } from '@/app/components/characters/CharacterRenderers';
import { useGetEpisode } from '@/app/hooks/useGetEpisode';
import { debug, render, screen, waitFor } from '../setup';
import { GetCharactersResponse } from '@/app/types/character';
import { useRouter } from 'next/navigation';

const mockData = {
  "info": {
      "count": 826,
      "pages": 42,
      "next": "https://rickandmortyapi.com/api/character?page=2",
      "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    }
  ]
} as unknown as GetCharactersResponse;

const mockParams = {
  "page": 1,
  "paramsPageLabel": "firstCharPage",
  "order": 1
};

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  },
  usePathname() {
    return '';
  },
  useSearchParams: () => ({
    get: () => {}
  }),
}));

describe('<CharacterComparator />', () => {
  it('should display no episodes found message when episodes are null', async () => {
    const { container } = render(
      <CharactersRenderer
        data={mockData}
        page={mockParams.page}
        paramsPageLabel={mockParams.paramsPageLabel}
        order={mockParams.order} />
      );

    await waitFor(() => {
      expect(screen.getAllByRole('article').length).toBe(mockData.results.length);
    });
  });

  it('should handle undefined data', () => {
    const { container } = render(<CharactersRenderer data={undefined} page={1} paramsPageLabel='page' order={1} />);
    expect(container).toBeTruthy();
    expect(screen.queryByText('No characters found')).toBeInTheDocument();
  });

  it('should render no character items when data results are empty', () => {
    render(
      <CharactersRenderer
        data={{
          "info": {
              "count": 826,
              "pages": 42,
              "next": "https://rickandmortyapi.com/api/character?page=2",
              "prev": null
          },
          "results": []
        } as unknown as GetCharactersResponse}
        page={mockParams.page}
        paramsPageLabel={mockParams.paramsPageLabel}
        order={mockParams.order}
      />
    );
    expect(screen.queryByRole('article')).toBeNull();
  });

  it('should render pagination', async () => {
    render(
      <CharactersRenderer
        data={mockData}
        page={mockParams.page}
        paramsPageLabel={mockParams.paramsPageLabel}
        order={mockParams.order}
      />
    );

    await waitFor(() => {
      expect(screen.getByLabelText('Pagination')).toBeInTheDocument();
      expect(screen.getByLabelText('prev page icon')).toBeInTheDocument();
      expect(screen.getByLabelText('next page icon')).toBeInTheDocument();
      expect(screen.getByLabelText('Page 1 is your current page')).toBeInTheDocument();
    });
  });
});
