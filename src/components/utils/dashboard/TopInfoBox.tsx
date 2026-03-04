import type { ReactNode } from "react";

interface TopInfoBoxAttributes {
    title: string;
    value: string;
    titleCustomClass?: string;
    icon?: ReactNode;
    iconBg?: string;
    iconTextColor?: string;
}


const TopInfoBox = ({ title, value, titleCustomClass, icon, iconBg, iconTextColor }: TopInfoBoxAttributes) => {
    return (
        <div className="flex items-center gap-8 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <span className={`flex items-center justify-center w-14 h-14 rounded-full ${iconBg} ${iconTextColor}`}>
                {icon}
            </span>

            <div>
                <h2 className="text-2xl font-semibold text-slate-800">
                    {value}
                </h2>
                <p className={`text-sm text-slate-500 ${titleCustomClass}`}>
                    {title}
                </p>
            </div>
        </div>
    )
}

export default TopInfoBox