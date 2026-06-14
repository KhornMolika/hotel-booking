import { axiosPublic, axiosPrivate, setInMemoryToken } from "./client";
import type {
  UserResponse,
  AuthResponse,
  AuthRequest,
  UserRequest,
} from "./types";

export const authService = {

  register: async (registrationData: UserRequest): Promise<UserResponse> => {

    const response = await axiosPublic.post<AuthResponse>(
      "/api/auth/register",
      registrationData,
    );

    if (response.data.accessToken) {
      setInMemoryToken(response.data.accessToken);
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
    }
    return response.data.user;
  },


  login: async (loginData: AuthRequest): Promise<UserResponse> => {

    const response = await axiosPublic.post<AuthResponse>(
      "/api/auth/login",
      loginData,
    );

    if (response.data.accessToken) {

      setInMemoryToken(response.data.accessToken);

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
    }
    return response.data.user;
  },


  logout: async (): Promise<void> => {
    try {
      const storedRefreshToken =
        typeof window !== "undefined"
          ? localStorage.getItem("refreshToken")
          : null;
      await axiosPrivate.post("/api/auth/logout", {
        refreshToken: storedRefreshToken,
      });
    } catch (err) {
      console.error("Backend logout clean up failed", err);
    } finally {
      setInMemoryToken("");
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
      }
    }
  },

  googleLogin: async (googleEmail: string): Promise<UserResponse> => {
    const loginPayload: AuthRequest = {
      email: googleEmail,
      authProvider: "GOOGLE", 
    };

    const response = await axiosPublic.post<AuthResponse>(
      "/api/auth/login",
      loginPayload,
    );

    if (response.data.accessToken) {
      setInMemoryToken(response.data.accessToken);
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
    }
    return response.data.user;
  },
};
export { setInMemoryToken };

