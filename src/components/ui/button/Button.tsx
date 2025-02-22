interface ButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md transition-all ${className} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
