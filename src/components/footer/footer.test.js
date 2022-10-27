import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Footer from './index';

describe('Footer Component', () => {
  it('loads footer content', () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
