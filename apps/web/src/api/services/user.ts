import { RequestError } from '../../error';
import { request } from './base-request';

//TODO: Interfaces should come from the service-contracts package
export interface LoginRequest {
  email: string;
  password: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  // Add other fields as needed
}

export const loginUser = async (data: LoginRequest) => {
  const [rData, response] = await request('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new RequestError('Login failed', '/api/login', errorText || 'Invalid login credentials.');
  }
};

export const registerUser = async (data: CreateUserRequest) => {
  const [rData, response] = await request('/api/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new RequestError(
      'Registration failed',
      '/api/register',
      errorText || 'Unable to register user. Please try again.',
    );
  }

  return rData;
};

export const logoutUser = async () => {
  const [rData, response] = await request('/api/logout', {
    method: 'POST',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new RequestError('Logout failed', '/api/logout', errorText || 'Unable to log out. Please try again.');
  }

  return rData;
};
