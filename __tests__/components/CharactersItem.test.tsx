import { debug, fireEvent, render, screen } from '../setup';
import { CharacterItem } from '@/app/components/characters/CharactersItem';
import type { Character } from '@/app/types/character';

const mockData = {
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
} as unknown as Character;

describe('<CharactersItem />', () => {

  it('should trigger onClick with character data when button is clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <CharacterItem
        data={mockData}
        onClick={mockOnClick}
        selectedCharacterId={undefined}
        displayImage={false}
        // This last prop was added due some bugs from nextjs that are currently being fixed
        // https://github.com/vercel/next.js/issues/65161
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledWith(mockData);
  });

  it('should disable the button and reduce opacity when selectedCharacterId matches characters id', () => {
    render(
      <CharacterItem
        data={mockData}
        onClick={jest.fn()}
        selectedCharacterId={2}
        displayImage={false}
      />
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-40');
  });

  it('should change shadow style on hover', () => {
    render(
      <CharacterItem
        data={mockData}
        onClick={jest.fn()}
        selectedCharacterId={2}
        displayImage={false}
      />
    );
    const card = screen.getByRole('article');

    expect(card).toHaveClass('hover:shadow-xl');
  });

  it('should display correct character information', () => {
    render(
      <CharacterItem
        data={mockData}
        onClick={jest.fn()}
        selectedCharacterId={2}
        displayImage={false}
      />
    );

    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.status)).toBeInTheDocument();
    expect(screen.getByText(mockData.species)).toBeInTheDocument();
  });

  it('should render StatusBadge component with correct status', () => {
    render(
      <CharacterItem
        data={mockData}
        onClick={jest.fn()}
        selectedCharacterId={2}
        displayImage={false}
      />
    );
    const statusBadge = screen.getByLabelText(`status badge for ${mockData.status}`);
    expect(statusBadge).toBeInTheDocument();
  });
});