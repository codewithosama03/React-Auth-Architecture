import { render, screen } from "@testing-library/react";
import App from "./app/App.jsx";

test("login button renders", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /login/i });
  expect(button).toBeInTheDocument();
});