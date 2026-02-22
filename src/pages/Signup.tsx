import { useState, type ChangeEvent, type FormEvent } from "react"
import AuthSidebar from "../components/AuthSidebar"
import { signUp } from "../services/auth";
import { useNavigate } from "react-router-dom";
import RedirectLink from "../components/utils/RedirectLink";

const Signup = () => {
    const [error, setError] = useState<string | null>(null);
    const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev, [name]: value,
        }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (form.password !== form.confirmPassword) {
                setError("Passwords dont match");
            }
            await signUp(form.email, form.password);
            navigate('/validate-otp', { state: { email: form.email } });

        } catch (err: unknown) {
            console.error(err)
            const errorMessage = err instanceof Error ? err?.message : "login failed";
            setError(errorMessage);
            setForm((prev) => ({
                ...prev,
                password: "",
                confirmPassword: "",
            }))
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">

            {/* LEFT SIDE - Brand Panel */}
            <AuthSidebar />

            {/* RIGHT SIDE - Login Form */}
            <div className="flex items-center justify-center px-6 sm:px-12">
                <div className="w-full max-w-md">

                    <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                        Sign Up
                    </h2>

                    <p className="text-sm text-slate-500 mb-8">
                        Enter your credentials to continue.
                    </p>

                    {error && (
                        <div className="mb-6 text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-300 px-3 py-2.5 text-sm 
                                   focus:outline-none focus:border-[#1A2CA3]
                                   focus:ring-1 focus:ring-[#1A2CA3]"
                                placeholder="you@company.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                onFocus={() => setError(null)}
                                required
                                className="w-full border border-slate-300 px-3 py-2.5 text-sm 
                                   focus:outline-none focus:border-[#1A2CA3]
                                   focus:ring-1 focus:ring-[#1A2CA3]"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-300 px-3 py-2.5 text-sm 
                                   focus:outline-none focus:border-[#1A2CA3]
                                   focus:ring-1 focus:ring-[#1A2CA3]"
                                placeholder="confirm your password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#1A2CA3] text-white py-2.5 text-sm font-medium
                                 hover:opacity-90 transition disabled:opacity-50"
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>

                    </form>

                    <p className="mt-3">Already have an account?</p>
                    <RedirectLink to="/login" text="Login" />

                </div>
            </div>
        </div>
    )
}

export default Signup