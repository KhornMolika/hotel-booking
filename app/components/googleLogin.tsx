import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { authService } from "~/api/authService";
import googleLogo from "../../public/images/logo/google-logo.svg";

export default function GoogleLogin(): React.JSX.Element {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        setError("");

        console.log("Google Token Received:", tokenResponse.access_token);

        const googleProfileResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          },
        );

        const { email } = googleProfileResponse.data;
        console.log("Real Google Email Extracted:", email);

        const user = await authService.googleLogin(email);

        console.log("GOOGLE LOGIN SUCCESS", user);
        navigate("/profile");
      } catch (err: any) {
        setError(
          err?.response?.data?.message ||
            "Google authentication failed with server.",
        );
      } finally {
        setLoading(false);
      }
    },
    onError: (errorResponse) => {
      console.error("Google Popup Blocked or Closed:", errorResponse);
      setError("Google Sign-In was aborted or encountered an error.");
      setLoading(false);
    },
  });

  return (
    <div>
      {error && <div className="text-red-500 mb-2">{error}</div>}

      <button
        type="button"
        onClick={() => {
          setLoading(true);
          handleGoogleAuth(); 
        }}
        disabled={loading}
        className="mt-4 w-full flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-800 transition hover:bg-gray-50 disabled:opacity-50"
      >
        <img src={googleLogo} alt="Google logo" className="mr-3 h-5 w-5" />
        {loading ? "Connecting..." : "Continue with Google"}
      </button>
    </div>
  );
}
