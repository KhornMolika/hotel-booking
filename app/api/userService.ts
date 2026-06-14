import { axiosPrivate } from "./client";
import type { UserResponse, UserRequest } from "./types";

export const userService = {
  updateUser: async (id: number, data: UserRequest): Promise<UserResponse> => {
    try {
      const response = await axiosPrivate.patch<UserResponse>(`/api/user/updateUser/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Failed to update user:", error);
      throw error;
    }
  }
};
