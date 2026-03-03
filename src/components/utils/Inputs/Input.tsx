import type React from "react";
import type { ChangeEvent } from "react";

interface inputProps {
    inputType: string;
    name: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    placeholder?: string;
    isRequired?: boolean;
    labelRequired?: boolean;
    lableText?: string;
}

const Input: React.FC<inputProps> = ({
    inputType,
    name,
    value,
    onChange,
    onFocus,
    placeholder,
    lableText,
    isRequired = false,
    labelRequired = false,
}) => {
    return (
        <>
            {labelRequired && <label className="block text-sm font-medium text-slate-700 mb-2">
                {lableText}
            </label>}

            <input
                className="w-full border border-slate-300 px-3 py-2.5 text-sm 
                focus:outline-none focus:border-[#1A2CA3]
                focus:ring-1 focus:ring-[#1A2CA3]"

                type={inputType}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                placeholder={placeholder}
                required={isRequired}
            />
        </>
    )
}

export default Input