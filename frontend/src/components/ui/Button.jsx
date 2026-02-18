export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
  }) {
    const base =
      "inline-flex items-center text-sm gap-2 justify-center text-white px-6 py-3 rounded-md transition-all duration-200";
  
    const variants = {
      primary:
        "bg-primary text-white shadow-md hover:shadow-lg hover:bg-primary-600",
      secondary:
        "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 !text-black",
    };
  
    return (
      <button
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  