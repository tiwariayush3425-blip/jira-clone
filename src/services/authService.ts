import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";
import type { User } from "../store/authStore";

interface LoginResponse {
  token: string;
  user: User;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  // Demo/mock authentication
  // Real backend available hone par yahan api.post() use kiya ja sakta hai.

  if (
    email === "admin@gmail.com" &&
    password === "Admin@123"
  ) {
    return {
      token: "fake-jwt-token",
      user: {
        id: 1,
        name: "Ayush",
        email,
        role: "admin",
      },
    };
  }

  throw new Error("Invalid email or password");
};

// Future API methods
export const fetchProjects = async () => {
  const response = await api.get(ENDPOINTS.PROJECTS);
  return response.data;
};

export const fetchTasks = async () => {
  const response = await api.get(ENDPOINTS.TASKS);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await api.get(ENDPOINTS.USERS);
  return response.data;
};

export const fetchComments = async () => {
  const response = await api.get(ENDPOINTS.COMMENTS);
  return response.data;
};