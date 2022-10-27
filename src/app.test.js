import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './app';

describe('App Component', () => {
  it('loads form', () => {
    render(<App />);

    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
  });
  it('loads results', () => {
    render(<App />);

    const results = screen.getByTestId("results");
    expect(results).toBeInTheDocument();
  });

});
