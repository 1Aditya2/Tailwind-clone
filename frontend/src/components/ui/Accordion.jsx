import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({
  title,
  content,
  icon,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = icon || ChevronDown;

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex group w-full border-b border-gray-200 items-center justify-between p-3 text-left"
      >
        <span className="text-base font-light text-text group-focus:text-primary">
          {title}
        </span>

        <Icon
          className={`h-5 group-focus:text-primary w-5 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
}