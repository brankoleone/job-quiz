interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
