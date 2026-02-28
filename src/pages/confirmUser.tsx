import { useRef, useState } from 'react'
import AuthSidebar from '../components/AuthSidebar'
import RedirectLink from '../components/utils/RedirectLink'
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmUser } from '../services/auth';

export interface ConfirmUserProps {
    email: string;
    confirmationType: string;
}

const ConfirmUser = ({ confirmationType }: ConfirmUserProps) => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleVerify = async () => {
        try {
            setLoading(true);
            setError("");

            const code = otp.join("");

            if (code.length !== 6) {
                setError("Please enter the 6 digit code");
                return;
            }

            await confirmUser(email, code, password);
            const redirectLocation = confirmationType === "forgot-password" ? '/dashboard' : "/login";
            navigate(redirectLocation);

        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Failed to verify otp";
            setError(message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">

            {/* LEFT SIDE - Brand Panel */}
            <AuthSidebar />

            {/* RIGHT SIDE - OTP Form */}
            <div className="flex items-center justify-center px-6 sm:px-12">
                <div className="w-full max-w-md">

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-slate-800">
                            Verify Your Email
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                            Enter the 6 digit code sent to your email
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 text-sm text-rose-600 bg-rose-50 border border-rose-200 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    {/* OTP BOXES */}
                    <div className="flex justify-between gap-3 mb-8">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => {
                                    inputsRef.current[index] = el;
                                }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-14 text-center text-lg font-semibold border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A2CA3] focus:border-[#1A2CA3] transition"
                            />
                        ))}
                    </div>

                    {confirmationType === "forgot-password" && (
                        <div className="my-4">
                            <label
                                htmlFor="newPassword"
                                className="block text-sm font-medium text-slate-700 mb-1"
                            >
                                New Password
                            </label>

                            <input
                                id="newPassword"
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your new password"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-[#1A2CA3]
                 focus:border-[#1A2CA3] transition"
                            />
                        </div>
                    )}

                    <button
                        onClick={handleVerify}
                        disabled={loading}
                        className="w-full bg-[#1A2CA3] text-white py-2.5 text-sm font-medium
                                 hover:opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? "Verifying..." : "Change Password"}
                    </button>

                    <div className="mt-6 text-center">
                        <RedirectLink to="/login" text="Go Back" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConfirmUser;