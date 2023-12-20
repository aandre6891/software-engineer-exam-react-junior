import React from 'react';
import { render, screen, act } from '@testing-library/react';
import New from '../components/New';
import userEvent from '@testing-library/user-event';

describe('New', () => {
  test('renders text prop correctly', () => {
    const text = 'hello';

    render(<New text={text} />);
    const spanElement = screen.getByText(text);

    expect(spanElement).toBeInTheDocument();
  });

  test('initially world is not displayed', () => {
    const text = 'hello';
    const textToCheck = 'world';

    render(<New text={text} />);

    expect(screen.queryByText(textToCheck)).toBe(null);

  })

  test('calls changeToWorld function on click and updates state', () => {
    const text = 'hello';
    render(<New text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();

    act(() => {
      userEvent.click(screen.getByText(text));
    });

    const updatedText = 'world';
    expect(screen.getByText(updatedText)).toBeInTheDocument();
  });
});