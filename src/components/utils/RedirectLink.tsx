import { Link } from "react-router-dom";

type LinkProp = {
    text: string;
    to: string;
};

const RedirectLink = ({ text, to }: LinkProp) => {
    return (
        <Link
            to={to}
            className="text-sm font-medium text-[#1A2CA3] 
                 hover:underline 
                 transition"
        >
            {text}
        </Link>
    );
};

export default RedirectLink;
