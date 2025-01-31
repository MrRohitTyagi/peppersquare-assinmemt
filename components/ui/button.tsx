import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "default" | "outline" | "selected";
  size?: "sm" | "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles = "rounded-[3px] font-medium  transition-colors";

  const variantStyles: Record<string, string> = {
    default: "",
    selected: "bg-[#3481E8] text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
