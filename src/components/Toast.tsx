"use client";
import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ToastProps {
  type?: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  showIcon?: boolean;
}

const Toast: React.FC<ToastProps> = ({
  type = "info",
  message,
  duration = 3000,
  onClose,
  showCloseButton = false,
  position = "bottom-right",
  showIcon = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  const getToastStyles = () => {
    const baseStyles =
      "rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out";

    switch (type) {
      case "success":
        return `${baseStyles} bg-green-50 border-green-200 text-green-800`;
      case "error":
        return `${baseStyles} bg-red-50 border-red-200 text-red-800`;
      case "warning":
        return `${baseStyles} bg-yellow-50 border-yellow-200 text-yellow-800`;
      default:
        return `${baseStyles} bg-blue-50 border-blue-200 text-blue-800`;
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case "top-right":
        return "top-4 right-4";
      case "top-left":
        return "top-4 left-4";
      case "bottom-left":
        return "bottom-4 left-4";
      default:
        return "bottom-4 right-4";
    }
  };

  const getIcon = () => {
    if (!showIcon) return null;

    const iconClass = "h-5 w-5 mr-2";
    switch (type) {
      case "success":
        return <CheckCircle className={iconClass} />;
      case "error":
        return <XCircle className={iconClass} />;
      case "warning":
        return <AlertTriangle className={iconClass} />;
      default:
        return <Info className={iconClass} />;
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-50 min-w-80 max-w-md transform transition-all duration-300 ease-in-out ${getPositionStyles()} ${
        isAnimating
          ? "translate-x-0 opacity-100 scale-100"
          : "translate-x-full opacity-0 scale-95"
      }`}
    >
      <div className={getToastStyles()}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {getIcon()}
            <span className="text-sm font-medium">{message}</span>
          </div>
          {showCloseButton && (
            <button
              aria-label="Close"
              onClick={handleClose}
              className="ml-2 text-current opacity-60 hover:opacity-100 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toast;
