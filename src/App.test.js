import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RUMBXO home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/watch videos/i);
  expect(linkElement).toBeInTheDocument();
});
