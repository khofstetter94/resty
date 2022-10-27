import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './index';

describe('Form Component', () => {
  it('loads URL input', () => {
    render(<Form />);

    const span = screen.getByText('URL:');
    expect(span).toBeInTheDocument();
  });

  it('can provide buttons for specific API call methods, sends API information', () => {
    const spy = jest.fn();
    render(<Form handleApiCall={spy} />);

    const putButton = screen.getByText('PUT');
    expect(putButton).toBeInTheDocument();
    const deleteButton = screen.getByText('DELETE');
    expect(deleteButton).toBeInTheDocument();
    const postButton = screen.getByText('POST');
    expect(postButton).toBeInTheDocument();
    const getButton = screen.getByText('GET');
    expect(getButton).toBeInTheDocument();

    const goButton = screen.getByText('GO!');
    const putTestButton = screen.getByText('PUT');
    fireEvent.click(putTestButton);
    const input = screen.getByTestId("url-input");
    const bodyInput = screen.getByTestId("body-input");
    const testUrl = 'https://foo.bar';
    const testBody = 'Test body';
    fireEvent.change(input, { target: { value: testUrl } });
    fireEvent.change(bodyInput, { target: { value: testBody } });
    fireEvent.click(getButton);
    fireEvent.click(goButton);

    expect(spy).toBeCalledWith({ method: 'GET', url: testUrl, body: testBody });
  })
});
