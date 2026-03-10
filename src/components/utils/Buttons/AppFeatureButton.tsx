import type React from "react";

interface AppButtonProps {
    text: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    customClasses?: string;
}

const AppFeatureButton: React.FC<AppButtonProps> = ({ text, onClick, customClasses }) => {
    const defaultClasses =
        "bg-[#1A2CA3] text-white hover:bg-[#16248a]";
    return (
        <>
            <button className={`px-4 py-2 text-sm font-medium rounded-md 
                        hover:opacity-90 transition inline-block cursor-pointer ${customClasses ? customClasses : defaultClasses}`} onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default AppFeatureButton;