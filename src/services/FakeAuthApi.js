// services/fakeAuthApi.js

export function fakeLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@test.com") {
        resolve({
          token: "fake-admin-token",
          user: {
            name: "Admin User",
            role: "admin",
          },
          // timeout auto logout of token
          expiresIn: 10000, 
        });
      } else if (email === "user@test.com") {
        resolve({
          token: "fake-user-token",
          user: {
            name: "Normal User",
            role: "user",
          },
          expiresIn: 5000,
        });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}




