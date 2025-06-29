export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface Toast {
    id: string | number;
    message: string;
    type: ToastType;
    duration: number;
}
export interface UseToastReturn {
    toasts: Toast[];
    showSuccess: (message: string, duration?: number) => string | number;
    showError: (message: string, duration?: number) => string | number;
    showWarning: (message: string, duration?: number) => string | number;
    showInfo: (message: string, duration?: number) => string | number;
    removeToast: (id: string | number) => void;
}
export interface ToastContainerProps {
    toasts: Toast[];
    removeToast: (id: string | number) => void;
}
//# sourceMappingURL=types.d.ts.map