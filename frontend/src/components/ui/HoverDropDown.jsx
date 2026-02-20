import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function HoverDropdown({
    label = "Resources",
    items = [],
    children = '',
    parentClassName = '',
    labelClassName = ''
}) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className={`flex items-center gap-1.5 cursor-pointer select-none ${parentClassName}`}>
                <span
                    className={`transition-colors ${open ? "text-primary" : "text-gray-700"
                        } ${labelClassName}`}
                >
                    {label}
                </span>

                <div className="relative w-5 h-5">
                    <ChevronUp
                        size={20}
                        className={`absolute inset-0 transition-all duration-200 ${open ? "opacity-100 text-primary" : "opacity-0"
                            } ${labelClassName}`}
                    />
                    <ChevronDown
                        size={20}
                        className={`absolute inset-0 transition-all duration-200 ${open ? "opacity-0" : "opacity-100 text-text"
                            } ${labelClassName}`}
                    />
                </div>
            </div>
            <div
                className={`absolute left-0 top-full pt-4 w-full -translate-x-1/2 transition-all duration-200 ${open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
            >
                {<DefaultMenu items={items} children={children} />}
            </div>
        </div>
    );
}

function DefaultMenu({ items, children }) {

    return (
        <>
            {children ? children : <div className="min-w-[270px] w-full rounded-xl bg-white border border-gray-200 shadow-lg p-3">
                <ul className="w-full flex flex-col gap-1 items-start">
                    {items.map((item) => (
                        <li
                            key={item}
                            className="text-text-secondary p-3 w-full rounded-md text-sm hover:bg-gray-100 hover:text-text cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>}
        </>

    );
}
