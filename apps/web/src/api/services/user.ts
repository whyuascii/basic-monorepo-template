import { request } from './base-request';

//TODO: Interfaces should come from the service-contracts package
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  id: number;
  name?: string;
  email?: string;
}

/**
 * Fetch all users from the API.
 */
export const fetchUsers = async (): Promise<User[]> => {
  const [data] = await request<User[]>('/users', { method: 'GET' });
  return data;
};

/**
 * Fetch a single user by ID.
 */
export const fetchUserById = async (id: number): Promise<User> => {
  const [data] = await request<User>(`/users/${id}`, { method: 'GET' });
  return data;
};

/**
 * Create a new user.
 */
export const createUser = async (user: CreateUserRequest): Promise<User> => {
  const [data] = await request<User>('/users', {
    method: 'POST',
    body: JSON.stringify(user),
  });
  return data;
};

/**
 * Update an existing user by ID.
 */
export const updateUser = async (user: UpdateUserRequest): Promise<User> => {
  const [data] = await request<User>(`/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
  });
  return data;
};

/**
 * Delete a user by ID.
 */
export const deleteUser = async (id: number): Promise<void> => {
  await request<void>(`/users/${id}`, { method: 'DELETE' });
};
