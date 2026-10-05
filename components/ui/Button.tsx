export default function Button({ children, className, variant = 'primary', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300";
  
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800",
    secondary: "bg-white text-neutral-900 hover:bg-neutral-100",
    outline: "bg-transparent border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}
