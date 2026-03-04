import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AuthSidebar from "../components/AuthSidebar";
import RedirectLink from "../components/utils/RedirectLink";
import { login } from "../features/auth/authApi";
import { useAppDispatch } from "../app/hooks";
import { loginSuccess } from "../features/auth/AuthSlice";
import Input from "../components/utils/Inputs/Input";
import SubmitButton from "../components/utils/Buttons/SubmitButton";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev, [name]: value,
    }));
  }

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await login(form.email, form.password);
      dispatch(loginSuccess({
        accessToken: data.AuthenticationResult?.AccessToken,
        refreshToken: data.AuthenticationResult?.RefreshToken,
        user: {
          sub: '',
          email: '',

        },
        isAuthenticated: data.AuthenticationResult?.AccessToken ? true : false
      }));
      navigate('/dashboard');
    } catch (err: unknown) {
      console.error(err);
      const errorMessage = err instanceof Error ? err?.message : "login failed";
      setError(errorMessage);
      setForm((prev) => ({
        ...prev,
        password: "",
        email: ""
      }));
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
            Sign in to your account
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

            <Input inputType="password" name="password" value={form.password} onChange={handleChange} onFocus={() => setError(null)}
              isRequired={true} placeholder="Enter your password" labelRequired={true} lableText="Password" />
            <div className="mb-3 float-right">
              <RedirectLink to="/forgot-password-email" text="Reset Password" />
            </div>

            <SubmitButton text={loading ? "Signing in..." : "Sign in"} colorFormat="#1A2CA3" isDisabled={loading} />

          </form>

          <p className="pt-3">Need an account?</p>
          <RedirectLink to="/signup" text="Signup" />

        </div>
      </div>
    </div>
  );
};

export default Login;
