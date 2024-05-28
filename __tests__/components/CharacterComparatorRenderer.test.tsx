import { CharacterComparatorRenderer } from '@/app/components/characters/CharacterComparatorRenderer';
import { useGetEpisode } from '@/app/hooks/useGetEpisode';
import { render, screen, waitFor } from '../setup';

jest.mock('../../src/app/hooks/useGetEpisode');

const mockEpisodes = ['10', '28'];
const mockTitle = 'Character #1';

describe('<CharacterComparatorRenderer />', () => {
  it('should render list of CharacterComparatorItem when data is available', async () => {
    // @ts-ignore
    useGetEpisode.mockReturnValue({
      data: [{ id: 1, name: 'Episode 1' }, { id: 2, name: 'Episode 2' }],
      error: null,
      status: 'success',
    });

    render(<CharacterComparatorRenderer episodes={['1', '2']} title="Test Title" />);

    await waitFor(() => {
      expect(screen.getByText('Episode 1')).toBeInTheDocument();
      expect(screen.getByText('Episode 2')).toBeInTheDocument();
    });
  });

  it('should show loading spinner when data fetching status is pending', async () => {
    // @ts-ignore
    useGetEpisode.mockReturnValue({
      data: null,
      error: null,
      status: 'pending',
    });

    render(
      <CharacterComparatorRenderer
        episodes={mockEpisodes}
        title={mockTitle}
      />
    );

    await waitFor(() => {
      const spinner = screen.getByLabelText("content is loading...");
      expect(spinner).toBeInTheDocument();
    });
  });

  it('should render a valida given title', async () => {
    // @ts-ignore
    useGetEpisode.mockReturnValue({
      data: [{ id: 1, name: 'Episode 1' }, { id: 2, name: 'Episode 2' }],
      error: null,
      status: 'success',
    });
    
    render(
      <CharacterComparatorRenderer
        episodes={mockEpisodes}
        title={mockTitle}
      />
    );

    await waitFor(() => {
      const title = screen.getByText(mockTitle);
      expect(title).toBeInTheDocument();
    });
  });

  it('should render an error icon with a message', async () => {
    const errorMessage = 'Error fetching data';

    // @ts-ignore
    useGetEpisode.mockReturnValue({
      data: null,
      error: { message: errorMessage },
      status: 'error',
    });

    render(
      <CharacterComparatorRenderer
        episodes={['-1']}
        title={mockTitle}
      />
    );

    await waitFor(() => {
      const alertIcon = screen.getByLabelText("alert icon");
      expect(alertIcon).toBeInTheDocument();

      const message = screen.getByText(errorMessage);
      expect(message).toBeInTheDocument();
    });
  });

  it('should render empty div when episodes are null', () => {
    render(<CharacterComparatorRenderer episodes={null} title="Episode Comparison" />);
    expect(screen.getByLabelText('no episodes found for Episode Comparison')).toBeInTheDocument();
  });

  it('should render empty div when episodes are empty array', () => {
    render(<CharacterComparatorRenderer episodes={[]} title="Episode Comparison" />);
    expect(screen.getByLabelText('no episodes found for Episode Comparison')).toBeInTheDocument();
  });
});
