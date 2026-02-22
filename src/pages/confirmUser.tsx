import { useRef, useState } from 'react'
import AuthSidebar from '../components/AuthSidebar'
import RedirectLink from '../components/utils/RedirectLink'
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmUser } from '../services/auth';

const ConfirmUser = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

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

            await confirmUser(email, code);
            navigate('/dashboard');

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
                                className="w-12 h-14 text-center text-lg font-semibold border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleVerify}
                        disabled={loading}
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-medium transition disabled:opacity-60"
                    >
                        {loading ? "Verifying..." : "Verify Account"}
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