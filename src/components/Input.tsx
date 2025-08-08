"use client";
import { Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "number" | "email";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  clearable?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      value,
      clearable = false,
      onClear,
      onChange,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;

    const handleClear = () => {
      if (onClear) {
        onClear();
      } else if (onChange) {
        const event = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    return (
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          ref={ref}
          className={`
            flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
            file:border-0 file:bg-transparent file:text-sm file:font-medium
            placeholder:text-muted-foreground
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50
            pr-10
            ${className} 
          `}
          {...props}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
          {clearable && value && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear input"
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
