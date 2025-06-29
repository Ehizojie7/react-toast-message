import React, { useState, useCallback } from 'react';
import { Toast, ToastType, UseToastReturn, ToastContainerProps } from './types';
import './toast.css';

const useToast = (): UseToastReturn => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((
    message: string, 
    type: ToastType = 'info', 
    duration: number = 3000
  ): string | number => {
    const id = Date.now() + Math.random();
    const toast: Toast = { id, message, type, duration };
    
    setToasts(prev => [...prev, toast]);
    
    setTimeout(() => {
      removeToast(id);
    }, duration);
    
    return id;
  }, []);

  const removeToast = useCallback((id: string | number): void => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showSuccess = useCallback((message: string, duration?: number) => 
    addToast(message, 'success', duration), [addToast]);
  
  const showError = useCallback((message: string, duration?: number) => 
    addToast(message, 'error', duration), [addToast]);
  
  const showWarning = useCallback((message: string, duration?: number) => 
    addToast(message, 'warning', duration), [addToast]);
  
  const showInfo = useCallback((message: string, duration?: number) => 
    addToast(message, 'info', duration), [addToast]);

  return {
    toasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    removeToast
  };
};

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  if (!toasts.length) return null;

  return React.createElement('div', { className: 'toast-container' },
    toasts.map(toast => 
      React.createElement('div', {
        key: toast.id,
        className: `toast toast-${toast.type}`,
        onClick: () => removeToast(toast.id)
      }, [
        React.createElement('span', { key: 'message' }, toast.message),
        React.createElement('button', {
          key: 'close',
          className: 'toast-close',
          onClick: (e: React.MouseEvent) => {
            e.stopPropagation();
            removeToast(toast.id);
          }
        }, 'X')
      ])
    )
  );
};

export { useToast, ToastContainer };
export type { Toast, ToastType, UseToastReturn, ToastContainerProps };