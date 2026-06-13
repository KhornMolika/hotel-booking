import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import GoogleLogin from "~/components/googleLogin";
import { useState, type FormEvent } from "react";
import type { UserRequestLogin } from "~/api/types";
import { authService } from "~/api/authService";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.phoneNumber.trim() || !formData.password.trim()) {
      setError("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const payload: UserRequestLogin = {
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        authProvider: "LOCAL",
      };

      const user = await authService.login(payload);
      console.log("LOGIN SUCCESS", user);

      navigate("/profile");
    } catch (err: any) {
      console.log("LOGIN ERROR:", err);
      setError(
        err?.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Link
        to="/"
        className="fixed top-8 left-8 sm:top-10 sm:left-10 z-50 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md text-primary-1 hover:bg-primary-1 hover:text-white transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <main
        style={{ fontFamily: "var(--font-sans)" }}
        className="min-h-screen flex items-center justify-center py-10 bg-secondary px-5 font-sans relative"
      >
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
          <h1 className="text-3xl font-sans font-bold text-primary-1 mb-2">
            Log In
          </h1>
          <p className="mb-8 text-text-light font-sans">
            Welcome back! Enter your details to access your account.
          </p>

          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="phoneNumber"
                className="mb-2 block text-sm font-medium text-text-dark"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-text-dark outline-none transition focus:border-primary-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-text-dark"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-text-dark outline-none transition focus:border-primary-1"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-primary-1 px-6 py-3 font-semibold text-white hover:bg-primary-2 transition-all disabled:opacity-50"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-text-light font-sans">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary-1 hover:text-primary-2"
            >
              Sign Up
            </Link>
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-text-light">
            <span className="h-px flex-1 bg-gray-200"></span>
            <span>OR</span>
            <span className="h-px flex-1 bg-gray-200"></span>
          </div>

          {/* Wrap Google button to safely block action while manual form is processing */}
          <div className={loading ? "opacity-50 pointer-events-none" : ""}>
            <GoogleLogin />
          </div>
        </div>
      </main>
    </>
  );
}