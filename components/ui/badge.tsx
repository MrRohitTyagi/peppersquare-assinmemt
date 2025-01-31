import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "outline" | "success" | "warning" | "destructive";
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium";

  const variantStyles: Record<string, string> = {
    default: "bg-gray-200 text-gray-800",
    outline: "border border-gray-300 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
    destructive: "bg-red-200 text-red-800",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
