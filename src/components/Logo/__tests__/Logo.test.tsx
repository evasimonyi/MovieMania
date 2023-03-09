import React from 'react';
import { act, render, screen } from '@testing-library/react';
import Logo from '../Logo';

test('Logo renders well', () => {
  render(<Logo />)

  expect(screen.getByText(/movie/i)).toBeInTheDocument();
  expect(screen.getByText(/mania/i)).toBeInTheDocument();
})

test('Logo snapshot', () => {
  const { asFragment } = render(
    <Logo />
  );

  act(() => {
    expect(asFragment()).toMatchSnapshot();
  });
})
