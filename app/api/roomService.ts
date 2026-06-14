import { axiosPublic } from "./client";
import type { RoomResponse } from "./types";

export const roomService = {
  getAllRooms: async (): Promise<RoomResponse[]> => {
    try {
      const response = await axiosPublic.get<RoomResponse[]>("/api/room");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch rooms:", error);
      throw error;
    }
  },

  getRoomByNumber: async (roomNumber: string): Promise<RoomResponse> => {
    try {
      const response = await axiosPublic.get<RoomResponse>(`/api/room/byNumber/${roomNumber}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch room ${roomNumber}:`, error);
      throw error;
    }
  }
};
