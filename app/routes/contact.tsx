import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import axios from "axios"; // Ensure axios is imported for API calls

// 🌟 Define proper TypeScript types for your dynamic Room Types
interface RoomType {
  id: number | string;
  name: string; // e.g., "Standard Room"
  price?: number;
}

type FormDataType = {
  roomTypeName: string;
  message: string;
};

export default function Contact() {
  const [roomTypes, setRoomTypes] = useState<RoomType[]>([]); // State for fetched backend room types
  const [formData, setFormData] = useState<FormDataType>({
    roomTypeName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🌟 Step 1: Fetch Room Types dynamically from your Spring Boot backend on mount
  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        // 1. Grab your stored accessToken
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("accessToken")
            : null;
        console.log("Fetched token for API call:", token);

        // 2. Pass the token inside the Authorization header
        const response = await axios.get<RoomType[]>(
          `${import.meta.env.VITE_API_BASE_URL}/api/roomType`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setRoomTypes(response.data);
      } catch (error) {
        console.error("Failed to load room types from backend:", error);
      }
    };

    fetchRoomTypes();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 🌟 Step 2: Handle real API submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Grab your token and user profile object from local storage
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null;
      const storedUser =
        typeof window !== "undefined" ? localStorage.getItem("user") : null;

      // Parse the user object safely
      const userObj = storedUser ? JSON.parse(storedUser) : null;
      console.log("Current User Object:", userObj);

      // 🌟 Fix 1: Fallback securely to a default display name if the property is missing
      const currentUsername =
        userObj?.username || userObj?.email?.split("@")[0] || "Guest";
      console.log("Resolved Username:", currentUsername);

      // 2. Format the layout exactly to match your new backend string signature
      const reviewPayload = {
        username: currentUsername, // Matches "username": "Liza"
        roomTypeName: formData.roomTypeName, // Matches "roomTypeName": "Deluxe Room"
        message: formData.message, // Matches "message": "Very clean room..."
      };

      console.log("SENDING REVIEW PAYLOAD:", reviewPayload);

      // 3. Pass the payload with your secure Authorization bearer string header
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/reviews`,
        reviewPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("REVIEW SAVED TO DATABASE:", response.data);

      // 🌟 Fix 2: Reset your form keys precisely to match your new state properties
      setFormData({
        roomTypeName: "", // Ensure this perfectly matches the 'name' attribute on your JSX select element!
        message: "",
      });

      alert("Thank you for your valuable feedback!");
    } catch (error) {
      console.error("Error submitting review to backend:", error);
      alert("Could not submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mt-[70px] min-h-[calc(100vh-116px)]">
        <section className="py-20 px-8 lg:px-16 flex flex-col lg:flex-row gap-12 bg-whitesmoke justify-center items-center lg:items-start max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          <div className="flex-1 max-w-md w-full">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-2 mb-4 leading-tight">
              Share Your Experience
            </h2>
            <p className="text-sm lg:text-base text-text-light leading-relaxed mb-4">
              We value every guest's feedback and strive to provide the best
              hospitality experience possible.
            </p>
            <p className="text-sm lg:text-base text-text-light leading-relaxed mb-4">
              Tell us about your stay, room quality, service, and overall
              experience.
            </p>
            <div className="border-l-4 border-primary-1 pl-5">
              <p className="text-sm lg:text-base text-text-dark italic leading-relaxed">
                “Thank you for taking the time to share your valuable feedback.”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 max-w-2xl w-full bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-2 mb-2 leading-tight">
                Write a Review
              </h2>
              <p className="text-sm lg:text-base text-text-light mb-2">
                Share your experience with us.
              </p>

              {/* 🌟 Dynamic Dropdown Selection */}
              <select
                name="roomTypeName"
                value={formData.roomTypeName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#e2e8f0] rounded text-sm lg:text-base text-text-dark focus:outline-none focus:border-primary-1 font-sans"
              >
                <option value="">Select Room Type</option>
                {roomTypes.map((room) => (
                  // 🌟 Fix: Use room.name since your dynamic backend objects lack an explicit .id
                  <option key={room.name} value={room.name}>
                    {room.name}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your experience..."
                rows={5}
                required
                className="w-full p-3 border border-[#e2e8f0] rounded text-sm lg:text-base text-text-dark focus:outline-none focus:border-primary-1 font-sans"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-1 text-white py-3 px-6 border-none rounded-full text-sm lg:text-base font-medium cursor-pointer transition-all self-start hover:bg-primary-2 hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
