import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Results from './index';

describe('Results Component', () => {
  it('loads API results', () => {
    render(<Results data={{}} />);

    const results = screen.getByTestId("results");
    expect(results).toBeInTheDocument();
  });
});
