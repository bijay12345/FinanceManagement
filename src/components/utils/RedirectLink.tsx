import { Link } from "react-router-dom";

type LinkProp = {
    text: string;
    to: string;
    textSize?: string;
};

const RedirectLink = ({ text, to, textSize = 'sm' }: LinkProp) => {
    return (
        <Link
            to={to}
            className={`text-[${textSize}] font-medium text-[#1A2CA3] 
                 hover:underline 
                 transition my-2`}
        >
            {text}
        </Link>
    );
};

export default RedirectLink;
