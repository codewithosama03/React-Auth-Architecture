import { render, screen } from "@testing-library/react";
import { AuthProvider} from "./AuthContext";
import { expect, test } from "vitest";
import { useAuth } from "./useAuth";


// testing component
function TestComponent() {
const {user} = useAuth()
return <div>
 {user ? user.name : "no user"}
</div>
}

test(
    "default user is null" , () => {
     render(
     <AuthProvider>
        <TestComponent/>
     </AuthProvider>
     )

   expect(screen.getAllByText("no user")).toBeInTheDocument()  
})

// mocking of fake login for simulation test
test("login sets user correctly", () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Normal User")).toBeInTheDocument();
});

// testing log out 

test("logout clears user", () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  fireEvent.click(screen.getByText("Login"));
  fireEvent.click(screen.getByText("Logout"));

  expect(screen.getByText("No User")).toBeInTheDocument();
});