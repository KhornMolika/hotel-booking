import React, { useState } from "react";
import { useNavigate } from "react-router";
import { authService } from "~/api/authService"; 
import { setInMemoryToken } from "~/api/authService";

export default function Logout(): React.JSX.Element {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = async (): Promise<void> => {
    setLoading(true);
    setError("");

    try {
      await authService.logout().catch((err) => {
        console.warn("Backend logout failed, proceeding with local cleanup...", err);
      });
    } catch (err) {
    } finally {
      setInMemoryToken(""); 
      
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
      }

      setLoading(false);
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md max-w-sm mx-auto mt-10 border border-gray-100">
      {!showConfirm ? (
        <button
          onClick={() => setShowConfirm(true)}
          className="w-full px-5 py-3 font-semibold bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      ) : (
        <div className="text-center animate-fadeIn">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Are you sure you want to logout?
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            You will need to sign back in to access your hotel bookings.
          </p>

          {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleLogout}
              disabled={loading}
              className="px-5 py-2.5 font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 transition"
            >
              {loading ? "Logging out..." : "Yes, Logout"}
            </button>
            
            <button
              onClick={() => setShowConfirm(false)}
              disabled={loading}
              className="px-5 py-2.5 font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}