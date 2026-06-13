import { useState, useEffect } from "react";

interface UserProfileType {
  username: string;
  email: string;
  phoneNumber: string;
}

interface Booking {
  hotel: string;
  date: string;
  status: string;
}

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<UserProfileType>({
    username: "",
    email: "",
    phoneNumber: "",
  });

  const [bookings] = useState<Booking[]>([
    { hotel: "Deluxe Hotel", date: "2026-06-10", status: "Confirmed" },
    { hotel: "Sea View Resort", date: "2026-06-12", status: "Pending" },
  ]);

  // =========================
  // FETCH USER (GET API)
  // =========================
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/2`
        );

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        console.log("GET USER:", data);

        setUser({
          username: data.username,
          email: data.email,
          phoneNumber: data.phoneNumber,
        });
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // =========================
  // SAVE USER (PUT API)
  // =========================
  const handleSave = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/2`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!res.ok) throw new Error("Failed to update user");

      const data = await res.json();
      console.log("UPDATED USER:", data);

      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      console.error("Update error:", err);
      alert("Update failed");
    }
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  // =========================
  // LOADING STATE
  // =========================
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading user...
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-12 font-sans bg-secondary/30">

      <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-gray-100">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary-1 flex items-center justify-center text-white font-semibold text-lg">
            {user.username?.charAt(0).toUpperCase() || "👤"}
          </div>

          <div>
            <h1 className="text-xl font-bold text-primary-1">
              User Profile
            </h1>
            <p className="text-xs text-text-light">
              Manage your account details
            </p>
          </div>
        </div>

        {/* INPUTS */}
        <div className="space-y-3.5">
          <input
            name="username"
            value={user.username}
            disabled={!isEditing}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary-1"
          />

          <input
            name="email"
            value={user.email}
            disabled={!isEditing}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary-1"
          />

          <input
            name="phoneNumber"
            value={user.phoneNumber}
            disabled={!isEditing}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary-1"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={() => {
            if (isEditing) {
              handleSave(); // SAVE TO API
            } else {
              setIsEditing(true);
            }
          }}
          className="mt-5 w-full rounded-full bg-primary-1 text-white py-3 text-sm font-semibold hover:bg-primary-2 transition"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>

        {/* BOOKINGS */}
        <div className="mt-6">
          <h2 className="text-xs font-semibold text-primary-1 mb-3">
            Booking History
          </h2>

          <div className="space-y-2.5">
            {bookings.map((b, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 rounded-2xl border border-gray-100"
              >
                <div>
                  <p className="text-sm font-medium">{b.hotel}</p>
                  <p className="text-xs text-gray-500">{b.date}</p>
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full border border-primary-1 text-primary-1 py-3 rounded-full hover:bg-primary-1 hover:text-white transition text-sm"
        >
          Logout
        </button>

      </div>
    </main>
  );
}