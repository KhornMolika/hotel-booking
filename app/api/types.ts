
export interface UserResponse {
  id: number;
  username: string;
  email: string;
  phoneNumber: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserResponse;
}

export interface AuthRequest {
  email?: string;
  phoneNumber?: string;
  password?: string;
  authProvider: 'LOCAL' | 'GOOGLE'; 
}

export interface UserRequest {
  username: string;
  phoneNumber: string;
  authProvider: 'LOCAL' | 'GOOGLE';
  password?: string;
}

export interface UserRequestLogin {
    phoneNumber: string;
    password: string;
    authProvider: 'LOCAL';
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RoomTypeResponse {
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
}

export interface RoomResponse {
  id?: number;
  roomNumber: string;
  roomType: RoomTypeResponse;
  status: string;
}

export interface ReservationRequest {
  checkinDate: string; // ISO String
  checkoutDate: string; // ISO String
  adultAmount: number;
  childAmount: number;
  status: string;
  roomId: number;
  userId: number;
}

export interface ReservationResponse {
  id?: number;
  checkinDate: string;
  checkoutDate: string;
  adultAmount: number;
  childAmount: number;
  status: string;
  createdDate: string;
  totalPrice: number;
  room: RoomResponse;
}