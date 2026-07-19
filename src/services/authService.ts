export const loginUser = async (
  email: string,
  password: string
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        email === "admin@gmail.com" &&
        password === "Admin@123"
      ) {
        resolve({
          token: "fake-jwt-token",
          user: {
            id: 1,
            name: "Ayush",
            email,
          },
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};