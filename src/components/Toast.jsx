import { useEffect, useState } from 'react';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const iconTypes = {
  success: {
    icon: <CheckCircle2 className="h-5 w-5" />,
    color: 'bg-green-100 text-green-700 border-green-200',
    iconColor: 'text-green-500',
  },
  error: {
    icon: <AlertCircle className="h-5 w-5" />,
    color: 'bg-red-100 text-red-700 border-red-200',
    iconColor: 'text-red-500',
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5" />,
    color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    iconColor: 'text-yellow-500',
  },
  info: {
    icon: <Info className="h-5 w-5" />,
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    iconColor: 'text-blue-500',
  },
};

export default function Toast({ 
  message, 
  type = 'info', 
  duration = 5000, 
  onClose,
  position = 'bottom-right',
  title,
  showClose = true,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(true);
  const { icon, color, iconColor } = iconTypes[type] || iconTypes.info;

  // Posiciones del toast
  const positions = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // Tiempo para la animación de salida
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed z-50 max-w-sm w-full p-4 rounded-lg shadow-lg border ${color} ${positions[position]} ${className} animate-fade-in`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 pt-0.5 ${iconColor}`}>
          {icon}
        </div>
        <div className="ml-3 w-0 flex-1">
          {title && (
            <h3 className="text-sm font-medium">
              {title}
            </h3>
          )}
          <p className="text-sm">
            {message}
          </p>
        </div>
        {showClose && (
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={handleClose}
              className="inline-flex text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Hook para usar el toast
export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (options) => {
    setToast({
      ...options,
      id: Date.now().toString(),
    });
  };

  const ToastContainer = () => {
    if (!toast) return null;

    return (
      <Toast
        {...toast}
        onClose={() => setToast(null)}
      />
    );
  };

  return { showToast, ToastContainer };
};

// Componente de contenedor para múltiples toasts
export const ToastContainer = ({ toasts, onRemove }) => {
  return (
    <div className="fixed z-50 space-y-2 right-4 bottom-4">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
};
