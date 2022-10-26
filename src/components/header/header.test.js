import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '../../app';

describe('Welcome Component', () => {
  it('loads and shows expected display', () => {
    render(<Header />);

    const h1 = screen.getByText('RESTy');
    expect(h1).toBeInTheDocument();
  });
});
