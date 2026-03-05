import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import * as authHook from "./useAuth";

vi.mock("./useAuth");


// test 1 = Shows Children If User Exists
test("renders children when user exists", () => {
  authHook.useAuth.mockReturnValue({
    user: { name: "Test User" },
    loading: false,
  });

  render(
    <MemoryRouter>
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    </MemoryRouter>
  );

  expect(screen.getByText("Protected Content")).toBeInTheDocument();
});

// Test 2 = Redirects If No User
test("redirects to login if no user", () => {
  authHook.useAuth.mockReturnValue({
    user: null,
    loading: false,
  });

  render(
    <MemoryRouter>
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    </MemoryRouter>
  );

  expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
});

// Test 3 = Returns Null While Loading

test("renders nothing while loading", () => {
  authHook.useAuth.mockReturnValue({
    user: null,
    loading: true,
  });

  const { container } = render(
    <MemoryRouter>
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    </MemoryRouter>
  );

  expect(container).toBeEmptyDOMElement();
});