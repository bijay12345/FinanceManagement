import { useState, type ChangeEvent, type FormEvent } from "react"
import AuthSidebar from "../components/AuthSidebar"
import { useNavigate } from "react-router-dom";
import RedirectLink from "../components/utils/RedirectLink";
import { signUp } from "../features/auth/authApi";
import Input from "../components/utils/Inputs/Input";
import SubmitButton from "../components/utils/Buttons/SubmitButton";

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
            navigate('/signup-otp-verification', { state: { email: form.email } });

        } catch (err: unknown) {
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
                        <Input inputType="email" name="email" value={form.email} onChange={handleChange}
                            isRequired={true} placeholder="jhon@comnapy.com" labelRequired={true}
                            lableText="Email Address" />

                        <Input inputType="password" name="password" value={form.password} onChange={handleChange}
                            isRequired={true} placeholder="Enter your password" labelRequired={true}
                            lableText="Password" />

                        <Input inputType="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}
                            isRequired={true} placeholder="confirm your password" labelRequired={true}
                            lableText="Confirm Password" />
                        <SubmitButton text={loading ? "Signing up..." : "Sign Up"} colorFormat="#1A2CA3" isDisabled={loading} />
                    </form>

                    <p className="mt-3">Already have an account?</p>
                    <RedirectLink to="/login" text="Login" />

                </div>
            </div>
        </div>
    )
}

export default Signup