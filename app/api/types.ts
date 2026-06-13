
export interface UserResponse {
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