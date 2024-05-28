import { CharacterComparatorItem } from '@/app/components/characters/CharacterComparatorItem';
import { render, screen, waitFor, debug } from '../setup';

const mockData = { episode: 'S01E01', name: 'Pilot', air_date: 'January 20, 2008' };

describe('<CharacterComparatorItem />', () => {
  it('should render without crashing when provided with valid data', () => {
    const { container } = render(<CharacterComparatorItem data={mockData} />);
    expect(container).toBeInTheDocument();
  });

  it('should display episode, name, and air date correctly with minimal valid data', () => {
    render(<CharacterComparatorItem data={mockData} />);
    expect(screen.getByText(mockData.episode)).toBeInTheDocument();
    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.air_date)).toBeInTheDocument();
  });

  it('should show episode name in text-gray-500 style', () => {
    const { container } = render(<CharacterComparatorItem data={mockData} />);
    const episodeNameElement = container.querySelector('.text-gray-500');
    expect(episodeNameElement).toHaveTextContent(mockData.name);
  });

  it('should show episode number in text-accent-primary style', () => {
    const { container } = render(<CharacterComparatorItem data={mockData} />);
    const episodeNumberElement = container.querySelector('.text-accent-primary');
    expect(episodeNumberElement).toBeInTheDocument();
  });
});