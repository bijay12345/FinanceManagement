import { useState, type ChangeEvent, type FormEvent } from "react"
import AuthSidebar from "../components/AuthSidebar"
import RedirectLink from "../components/utils/RedirectLink"
import { useNavigate } from "react-router-dom";
import { handlePasswordResetEmailNotification } from "../features/auth/authApi";
import Input from "../components/utils/Inputs/Input";
import SubmitButton from "../components/utils/Buttons/SubmitButton";

const ForgotPasswordEmail = () => {
    const [error, setError] = useState("");
    const [form, setForm] = useState({ email: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await handlePasswordResetEmailNotification(form.email);
            setLoading(false)
            navigate("/forgot-password-otp-confirm", { state: { email: form.email } })
        } catch (err: unknown) {
            console.log(err);
            const message = err instanceof Error ? err?.message : "Failed to send email. Please try again";
            setError(message);
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
                        Reset Password
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

                        <SubmitButton text={loading ? "Processing..." : "Reset password"} colorFormat="#1A2CA3" isDisabled={loading} />
                    </form>

                    <p className="pt-3">Go back</p>
                    <RedirectLink to="/login" text="Login" />

                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordEmail