import { CreateUserRequest, LoginRequest, loginUser, logoutUser, registerUser } from '../services';

export const loginQuery = (data: LoginRequest) => ({
  queryKey: ['login', data.email],
  queryFn: () => loginUser(data),
  meta: {
    errorMessage: 'Login failed. Please check your credentials and try again.',
  },
});

export const registerQuery = (data: CreateUserRequest) => ({
  queryKey: ['register', data.email],
  queryFn: () => registerUser(data),
  meta: {
    errorMessage: 'Registration failed. Please check your details and try again.',
  },
});

export const logoutQuery = () => ({
  queryKey: ['logout'],
  queryFn: () => logoutUser(),
  meta: {
    errorMessage: 'Logout failed. Please try again.',
  },
});
