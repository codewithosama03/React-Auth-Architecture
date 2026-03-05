import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Login from "./Login";
import * as api from "../services/fakeAuthApi";
vi.mock("../services/fakeAuthApi");



// normal component test
describe("login component" ,() => {

    test("render email input", () => {
        render(<Login/>)
          const input = screen.getByPlaceholderText(/email/i);
          expect(input).toBeInTheDocument();
    })

    test("renders login button" , () => {
        render(<Login/>) 
        const  button = screen.getByRole("button",{name :/login/i})  
        expect(button).toBeInTheDocument()
    })

    test("typing updates input value", () => {
       render(<Login/>)
       const input = screen.getByPlaceholderText(/email/i)
       fireEvent.change(input, {Target: {value : "test@mail.com"} })
       expect(input.value).toBe("test@email.com")  
    })
})

// test succesfull login
test("calls fakeLogin on button click", async () => {
  api.fakeLogin.mockResolvedValue({
    token: "fake-token",
    user: { name: "Test User", role: "user" },
    expiresIn: 5000,
  });

  render(<Login />);

  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const button = screen.getByRole("button", { name: /login/i });

  fireEvent.change(emailInput, { target: { value: "user@test.com" } });
  fireEvent.change(passwordInput, { target: { value: "123456" } });
  fireEvent.click(button);

  await waitFor(() => {
    expect(api.fakeLogin).toHaveBeenCalledWith("user@test.com", "123456");
  });
});

// testt failure of login with simulation
test("shows error on invalid login", async () => {
  api.fakeLogin.mockRejectedValue("Invalid credentials");

  render(<Login />);

  const button = screen.getByRole("button", { name: /login/i });
  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  });
});