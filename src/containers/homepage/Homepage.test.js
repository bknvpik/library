import { fireEvent, render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

test('On render should display Login form', () => {
  render(<Homepage />);

  expect(screen.getByText(/account/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /login/i })).toHaveTextContent(/login/i);
});

test('Should display Register form after change state', () => {
  render(<Homepage />);
  const clickButton = screen.getByRole('button', { name: /register/i });
  fireEvent.click(clickButton);
  expect(screen.getByText(/already/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /register/i })).toHaveTextContent(/register/i);
});

