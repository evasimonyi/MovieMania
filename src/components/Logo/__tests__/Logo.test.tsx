import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

test('Logo renders well', () => {
  render(<Logo />)

  expect(screen.getByText(/netflix/i)).toBeInTheDocument();
  expect(screen.getByText(/roulette/i)).toBeInTheDocument();
})

test('Logo snapshot', () => {
  const { container } = render(<Logo />);
  expect(container.firstChild).toMatchSnapshot();
})