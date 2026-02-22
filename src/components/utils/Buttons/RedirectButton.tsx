import { Link } from "react-router-dom";

type ButtonProp = {
  text: string;
  to: string;
};

const RedirectButton = ({ text, to }: ButtonProp) => {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-sm font-medium rounded-md 
                    bg-[#1A2CA3] text-white 
                    hover:opacity-90 transition inline-block"
    >
      {text}
    </Link>
  );
};

export default RedirectButton;
