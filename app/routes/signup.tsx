"use client";

import React, { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";


import { authService } from "../api/authService";
import type { UserRequest, UserResponse } from "../api/types";
import GoogleLogin from "~/components/googleLogin";

export default function SignUp(): React.JSX.Element {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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
    if (
      !formData.username.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.password.trim()
    ) {
      setError("Please fill in all fields.");
      return false;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
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
      const payload: UserRequest = {
        username: formData.username,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        authProvider: "LOCAL",
      };

      const user = await authService.register(payload);
      console.log("REGISTER SUCCESS", user);

      navigate("/profile");
    } catch (err: any) {
      console.log("REGISTER ERROR:", err);
      console.log("RESPONSE:", err?.response);
      console.log("DATA:", err?.response?.data);

      setError(
        err?.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <>
      <Link
        to="/"
        className="fixed top-8 left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-primary-1 hover:text-white"
      >
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <main className="min-h-screen bg-secondary px-5 py-10 flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
          <h1 className="mb-2 text-3xl font-bold text-primary-1">Sign Up</h1>

          <p className="mb-8 text-text-light">
            Create your account to start booking hotels.
          </p>

          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium"
              >
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-primary-1"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="mb-2 block text-sm font-medium"
              >
                Phone Number
              </label>

              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-primary-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-primary-1"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-primary-1"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-primary-1 px-6 py-3 font-semibold text-white hover:bg-primary-2 disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-text-light">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary-1">
              Login
            </Link>
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400">OR</span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>

          <GoogleLogin />
        </div>
      </main>
    </>
  );
}
