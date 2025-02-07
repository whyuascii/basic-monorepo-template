import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from 'src/molecules/toast';

import { useToast } from '../hooks/use-toast';

export function Toaster() {
  const { toasts } = useToast();

  if (!toasts.length) return null; // ✅ Optimization: Prevent unnecessary rendering when no toasts exist.

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose aria-label="Close notification" />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
