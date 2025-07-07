# use-toast-message
A simple React hook for toast notifications

import { useToast, Toast } from 'use-toast-message';

const MyComponent: React.FC = () => {
  const { toasts, showError, removeToast } = useToast();

  const handleApiError = async (): Promise<void> => {
    try {
      //  API call
      throw new Error('API Error');
    } catch (error) {
      const toastId = showError(
        error instanceof Error ? error.message : 'Unknown error',
        10000 // 10 seconds
      );
      
      // Manually remove after some condition
      setTimeout(() => removeToast(toastId), 5000);
    }
  };

  return (
    <div>
      <button onClick={handleApiError}>Trigger Error</button>
      <div>Active toasts: {toasts.length}</div>
    </div>
  );
};