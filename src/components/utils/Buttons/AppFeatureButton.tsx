import type React from "react";

interface AppButtonProps {
    text: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    colorFormat?: string;
}

const AppFeatureButton: React.FC<AppButtonProps> = ({ text, onClick, colorFormat = "#f12424" }) => {
    return (
        <>
            <button className={`px-4 py-2 text-sm font-medium rounded-md 
                        bg-[${colorFormat}] text-white 
                        hover:opacity-90 transition inline-block cursor-pointer`} onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default AppFeatureButton;