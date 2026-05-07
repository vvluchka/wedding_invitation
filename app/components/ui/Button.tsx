type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
};

export function Button({ 
  children, 
  variant = "primary", 
  size = "default", 
  className = "", 
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = "font-medium rounded-2xl transition-all";

  const variants = {
    primary: "bg-[#3f2e1e] hover:bg-[#2c2115] text-white",
    secondary: "bg-white border border-[#d4b88a] text-[#3f2e1e] hover:bg-[#f9f5eb]"
  };

  const sizes = {
    default: "py-4 px-8 text-lg",
    large: "py-5 px-10 text-xl"
  };

  const disabledStyles = disabled 
    ? "opacity-60 cursor-not-allowed hover:bg-[#3f2e1e] active:scale-100" 
    : "active:scale-95";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}