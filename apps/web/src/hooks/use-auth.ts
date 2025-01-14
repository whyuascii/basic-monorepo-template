import { useCallback, useState } from 'react';

/**
 * A simple custom hook to manage authentication state.
 *
 * Features:
 * - Allows enabling/disabling authentication without API calls.
 * - Provides an `isAuthenticated` state and methods to log in and log out.
 */
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Log in the user by setting the authentication state to true.
   * This can later be enhanced to include API calls.
   */
  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  /**
   * Log out the user by setting the authentication state to false.
   * This can later be enhanced to include API calls or token clearing.
   */
  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, login, logout };
};
