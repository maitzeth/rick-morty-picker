import { CharacterComparator } from '@/app/components/characters/CharacterComparator';
import { render, screen, waitFor } from '../setup';

describe('<CharacterComparator />', () => {
  it('should display no episodes found message when episodes are null', async () => {
    const { container } = render(<CharacterComparator />);

    await waitFor(() => {
      expect(screen.getByLabelText("no episodes found for Character #1 - Only Episodes")).toBeInTheDocument();
      expect(screen.getByLabelText("no episodes found for Character #1 & #2 - Shared Episodes")).toBeInTheDocument();
      expect(screen.getByLabelText("no episodes found for Character #2 - Only Episodes")).toBeInTheDocument();
    });
  });
});
