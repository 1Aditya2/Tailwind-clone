import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function VersionDropdown({
  value = "V 2.2",
  options = ["V 2.2", "V 1.3"],
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const select = (opt) => {
    setSelected(opt);
    setOpen(false);
    onChange?.(opt);
  };

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-2 py-1 rounded-full cursor-pointer bg-gray-100"
      >
        <span className="text-xs text-text-secondary">
          {selected}
        </span>
        {open ? (
          <ChevronUp size={14} className="text-text-secondary" />
        ) : (
          <ChevronDown size={14} className="text-text-secondary" />
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2.5 w-32 rounded-md bg-white border border-gray-200 shadow-lg p-1.5">
          {options.map((opt, i) => (
            <button
              key={opt}
              onClick={() => select(opt)}
              className={`w-full font-medium text-sm text-left px-4 py-1 rounded-md text-text hover:bg-gray-50 ${options.length - 1 === i ? 'mt-1.5' : 'mt-0' }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
