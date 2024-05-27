import { render, screen } from '../setup';
import Home from '../../src/app/page';
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText('First setup');
    expect(heading).toBeInTheDocument()
  });
});
