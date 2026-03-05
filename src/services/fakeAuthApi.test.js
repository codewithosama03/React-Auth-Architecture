// import { fakeLogin } from "./fakeAuthApi";
import { describe, test, expect, vi } from "vitest";
import { fakeLogin } from "./FakeAuthApi";


//  Test 1 — Admin Login Works
test("resolves for admin user", async () => {
  vi.useFakeTimers();

  const promise = fakeLogin("admin@test.com", "123");

  vi.advanceTimersByTime(1000);

  await expect(promise).resolves.toEqual({
    token: "fake-admin-token",
    user: {
      name: "Admin User",
      role: "admin",
    },
    expiresIn: 10000,
  });
});


//  Test 2 — Normal User Works
test("resolves for normal user", async () => {
  vi.useFakeTimers();

  const promise = fakeLogin("user@test.com", "123");

  vi.advanceTimersByTime(1000);

  await expect(promise).resolves.toEqual({
    token: "fake-user-token",
    user: {
      name: "Normal User",
      role: "user",
    },
    expiresIn: 5000,
  });
});


//Test 3 — Invalid Login Rejects
test("rejects for invalid credentials", async () => {
  vi.useFakeTimers();

  const promise = fakeLogin("wrong@test.com", "123");

  vi.advanceTimersByTime(1000);

  await expect(promise).rejects.toBe("Invalid credentials");
});