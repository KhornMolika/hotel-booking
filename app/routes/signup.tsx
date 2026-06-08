import { Link } from "react-router";
import { Navbar } from "../components/Navbar";

export default function SignUp() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main style={{ fontFamily: "var(--font-sans)" }} className="min-h-screen flex items-center justify-center pt-33 pb-4 bg-secondary px-5 font-sans">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
          <h1 className="text-3xl font-sans font-bold text-primary-1 mb-2" style={{ fontFamily: "var(--font-sans)" }}>Sign Up</h1>
          <p className="mb-8 text-text-light font-sans">Create your account to start booking and managing reservations.</p>

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-dark">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
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
            <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                <path d="M23.51 12.24c0-.82-.07-1.62-.2-2.4H12v4.56h6.46c-.28 1.52-1.13 2.8-2.4 3.66v3.04h3.88c2.28-2.1 3.6-5.2 3.6-8.86Z" fill="#4285F4"/>
                <path d="M12 24c3.24 0 5.96-1.06 7.94-2.87l-3.88-3.04c-1.08.72-2.46 1.14-4.06 1.14-3.12 0-5.76-2.1-6.7-4.92H1.36v3.08C3.34 21.9 7.36 24 12 24Z" fill="#34A853"/>
                <path d="M5.3 14.31c-.24-.72-.38-1.5-.38-2.31 0-.81.14-1.59.38-2.31V6.61H1.36A11.99 11.99 0 0 0 0 12c0 1.96.46 3.82 1.36 5.39l3.94-3.08Z" fill="#FBBC05"/>
                <path d="M12 4.8c1.76 0 3.34.6 4.58 1.78l3.44-3.44C17.96 1.16 15.24 0 12 0 7.36 0 3.34 2.1 1.36 5.61l3.94 3.08C6.24 6.9 8.88 4.8 12 4.8Z" fill="#EA4335"/>
              </svg>
            </span>
            Continue with Google
          </button>
        </div>
      </main>
    </>
  );
}
