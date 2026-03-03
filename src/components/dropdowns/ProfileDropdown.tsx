import React, { useState, useRef, useEffect } from "react";
import LogoutButton from "../utils/Buttons/LogoutButton";

const ProfileDropdown: React.FC = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>

            <div
                onClick={() => setOpen((prev) => !prev)}
                className="w-9 h-9 rounded-full bg-slate-300 cursor-pointer"
            />

            {open && (
                <div className="absolute right-0 mt-3 w-48 
                bg-white rounded-xl shadow-xl 
                border border-slate-200 
                py-2 z-50 animate-in fade-in zoom-in-95 items-center ">

                    <button
                        disabled
                        className="w-full text-left px-4 py-2.5 text-sm 
               text-slate-400 cursor-not-allowed 
               rounded-md transition"
                    >
                        Settings
                    </button>

                    {/* Divider */}
                    <div className="my-2 h-px bg-slate-200" />

                    <div className="px-2">
                        <LogoutButton />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;