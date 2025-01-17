import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@workspace/ui/hooks/use-toast';

import { CreateUserRequest, LoginRequest, loginUser, logoutUser, registerUser } from '../services/user';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<void, Error, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/user'] });
      toast({ title: 'Success', description: 'Logged in successfully.' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<unknown, Error, CreateUserRequest>({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/user'] });
      toast({ title: 'Success', description: 'Registered successfully.' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<unknown, Error, void>({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/user'] });
      toast({ title: 'Success', description: 'Logged out successfully.' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });
};
