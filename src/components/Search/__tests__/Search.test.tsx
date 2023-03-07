import { render } from '../../test-utils';
import Search from '../Search';
import userEvent from '@testing-library/user-event';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockUseNavigate,
}));

test('Search renders well', () => {
  const { getByRole } = render(<Search />);
  expect(getByRole('heading', { name: /find your movie/i })).toBeInTheDocument();
  expect(getByRole('textbox')).toBeInTheDocument();
  expect(getByRole('button', { name: /search/i })).toBeInTheDocument();
});

test('Search renders well', () => {
  const route = '/search';
  const { asFragment, getByText } = render(<Search />, { route });
  expect(getByText('Search')).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test('Search input event', () => {
  const route = '/search';
  const { getByRole } = render(<Search />, { route });
  userEvent.type(getByRole('textbox'), 'star');
  expect(getByRole('textbox')).toHaveValue('star');
});

test('Search click event', () => {
  const route = '/search';
  const { getByRole } = render(<Search />, { route });
  userEvent.type(getByRole('textbox'), 'the');
  expect(getByRole('textbox')).toHaveValue('the');

  userEvent.click(getByRole('button', { name: /search/i }));
  expect(mockUseNavigate).toHaveBeenCalledTimes(1);
  expect(mockUseNavigate).toHaveBeenCalledWith(`${route}/the`);
});
