import { axiosPrivate } from "./client";
import type { ReservationRequest, ReservationResponse } from "./types";

export const reservationService = {
  createReservation: async (reservation: ReservationRequest): Promise<ReservationResponse> => {
    try {
      const response = await axiosPrivate.post<ReservationResponse>("/api/reservation", reservation);
      return response.data;
    } catch (error) {
      console.error("Failed to create reservation:", error);
      throw error;
    }
  },

  getReservationsByUserId: async (userId: number): Promise<ReservationResponse[]> => {
    try {
      const response = await axiosPrivate.get<ReservationResponse[]>(`/api/reservation/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch reservations for user ${userId}:`, error);
      throw error;
    }
  }
};
