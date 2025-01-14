import { createUser, deleteUser, fetchUserById, fetchUsers, updateUser } from '../services';

export const usersQuery = () => ({
  queryKey: ['users'],
  queryFn: fetchUsers,
  meta: {
    errorMessage: 'Failed to fetch users.',
  },
});

export const userByIdQuery = (id: number) => ({
  queryKey: ['user', id],
  queryFn: () => fetchUserById(id),
  meta: {
    errorMessage: `Failed to fetch user with ID: ${id}.`,
  },
});

export const createUserMutation = () => ({
  mutationFn: createUser,
  meta: {
    successMessage: 'User created successfully!',
    errorMessage: 'Failed to create user.',
  },
});

export const updateUserMutation = () => ({
  mutationFn: updateUser,
  meta: {
    successMessage: 'User updated successfully!',
    errorMessage: 'Failed to update user.',
  },
});

export const deleteUserMutation = () => ({
  mutationFn: deleteUser,
  meta: {
    successMessage: 'User deleted successfully!',
    errorMessage: 'Failed to delete user.',
  },
});
