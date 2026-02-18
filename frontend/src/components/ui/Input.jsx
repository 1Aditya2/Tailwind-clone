export default function PillInput({
    placeholder = "Enter your email",
    rightSlot,
    className = "",
    ...props
  }) {
    return (
      <div
        className={`flex items-center w-full rounded-full justify-between h-12 py-6
          border border-white/10
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)]
          ${className}`}
      >
        <input
          type="email"
          placeholder={placeholder}
          className="text-sm pl-6 bg-transparent text-white placeholder:text-white/50 outline-none border-none focus:ring-0"
          {...props}
        />
  
        {rightSlot && (
          <div className="flex items-center">
            {rightSlot}
          </div>
        )}
      </div>
    );
  }
  