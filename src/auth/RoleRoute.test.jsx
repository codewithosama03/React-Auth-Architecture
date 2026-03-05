import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RoleRoute from "./RoleRoute";
import * as authHook from "./useAuth";

vi.mock("./useAuth");

// Test 1 — Allows Correct Role

test("renders children if role is allowed", () => {
  authHook.useAuth.mockReturnValue({
    user: { role: "admin" },
  });

  render(
    <MemoryRouter>
      <RoleRoute allowedRoles={["admin"]}>
        <div>Admin Panel</div>
      </RoleRoute>
    </MemoryRouter>
  );

  expect(screen.getByText("Admin Panel")).toBeInTheDocument();
});

//  Test 2 — Blocks Wrong Role
test("redirects if role is not allowed", () => {
  authHook.useAuth.mockReturnValue({
    user: { role: "user" },
  });

  render(
    <MemoryRouter>
      <RoleRoute allowedRoles={["admin"]}>
        <div>Admin Panel</div>
      </RoleRoute>
    </MemoryRouter>
  );

  expect(screen.queryByText("Admin Panel")).not.toBeInTheDocument();
});