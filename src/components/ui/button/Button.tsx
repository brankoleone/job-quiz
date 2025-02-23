import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-yellow-500 hover:bg-yellow-600 text-black',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  success: 'bg-green-500 hover:bg-green-600 text-white',
  warning: 'bg-orange-500 hover:bg-orange-600 text-white',
  error: 'bg-red-500 hover:bg-red-600 text-white',
  info: 'bg-blue-500 hover:bg-blue-600 text-white',
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-6 py-2 rounded-md transition-all',
        variantStyles[variant],
        props.disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
