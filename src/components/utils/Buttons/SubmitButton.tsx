
interface buttonProp {
    text: string;
    colorFormat: string;
    isDisabled?: boolean;
}

const SubmitButton = ({ text, colorFormat, isDisabled = false }: buttonProp) => {
    return (
        <button
            className={`
            w-full bg-[${colorFormat}] text-white py-2.5 text-sm font-medium
                         hover:opacity-90 transition disabled:opacity-50 cursor-pointer
            `}
            disabled={isDisabled}
        >
            {text}
        </button>
    )
}

export default SubmitButton