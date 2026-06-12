import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import googleLogo from "../../public/images/logo/google-logo.svg";

export default function SignUp() {
  return (
    <>
      <Link to="/" className="fixed top-8 left-8 sm:top-10 sm:left-10 z-50 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md text-primary-1 hover:bg-primary-1 hover:text-white transition-all duration-300">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <main style={{ fontFamily: "var(--font-sans)" }} className="min-h-screen flex items-center justify-center py-10 bg-secondary px-5 font-sans relative">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
          <h1 className="text-3xl font-sans font-bold text-primary-1 mb-2" style={{ fontFamily: "var(--font-sans)" }}>Sign Up</h1>
          <p className="mb-8 text-text-light font-sans">Create your account to start booking and managing reservations.</p>

          <form className="space-y-5">
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-dark">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-text-dark outline-none transition focus:border-primary-1"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-text-dark">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-text-dark outline-none transition focus:border-primary-1"
              />
            </div>

            <div>
              <label htmlFor="confirm_password" className="mb-2 block text-sm font-medium text-text-dark">Confirm Password</label>
              <input
                id="confirm_password"
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-text-dark outline-none transition focus:border-primary-1"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary-1 px-6 py-3 text-base font-semibold text-white transition hover:bg-primary-2"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-text-light font-sans">
            Already have an account? {' '}
            <Link to="/login" className="font-semibold text-primary-1 hover:text-primary-2">
              Log in
            </Link>
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-text-light">
            <span className="h-px flex-1 bg-gray-200"></span>
            <span>OR</span>
            <span className="h-px flex-1 bg-gray-200"></span>
          </div>

          <button
            type="button"
            className="mt-4 w-full flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-text-dark transition hover:bg-gray-50"
          >
            <img src={googleLogo} alt="Google logo" className="mr-3 h-5 w-5" />
            Continue with Google
          </button>
        </div>
      </main>
    </>
  );
}
