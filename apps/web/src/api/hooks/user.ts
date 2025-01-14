import { useQuery } from '@tanstack/react-query';

import { userByIdQuery, usersQuery } from '../queries';

/**
 * Hook to fetch all users.
 */
export const useFetchUsers = () => {
  return useQuery(usersQuery());
};
/**
 * Hook to fetch a user by ID.
 */
export const useFetchUserById = (id: number) => {
  return useQuery(userByIdQuery(id));
};
