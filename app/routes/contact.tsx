import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

// ✅ ADD TYPE
type FormDataType = {
  roomTypeId: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormDataType>({
    roomTypeId: "",
    message: "",
  });

  
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ✅ FIXED TYPE FOR SUBMIT
const API_URL = import.meta.env.VITE_API_URL;
console.log("API:", import.meta.env.VITE_API_URL);
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    const response = await fetch(`${API_URL}/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomTypeId: formData.roomTypeId,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit review");
    }

    const data = await response.json();

    console.log("Review submitted:", data);

    setFormData({
      roomTypeId: "",
      message: "",
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <>
      <header>
        <Navbar />
      </header>

<main className="mt-[70px] min-h-[calc(100vh-116px)] bg-whitesmoke">
  <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div className="space-y-6">
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-2 leading-tight">
        Share Your Experience
      </h2>

      <p className="text-text-light text-base leading-relaxed">
        We value every guest's feedback and continuously improve our service to give you the best stay possible.
      </p>

      <p className="text-text-light text-base leading-relaxed">
        Tell us about your room quality, cleanliness, staff service, and overall experience.
      </p>

      <div className="border-l-4 border-primary-1 pl-5">
        <p className="text-text-dark italic text-base">
          “Your feedback helps us create better stays for future guests.”
        </p>
      </div>

      {/* CONTACT INFO BLOCK */}
      <div className="pt-6 space-y-4 text-sm text-text-light">
        <div className="flex items-center gap-3">
          <MapPin size={18} />
          <span>Phnom Penh, Cambodia</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} />
          <span>+855 123 456 789</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail size={18} />
          <span>support@hotel.com</span>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

        <h2 className="text-3xl font-serif font-bold text-primary-2">
          Write a Review
        </h2>

        <p className="text-text-light text-sm">
          Share your experience with us.
        </p>

        <select
          name="roomTypeId"
          value={formData.roomTypeId}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded-lg text-text-dark focus:outline-none focus:border-primary-1"
        >
          <option value="">Select Room Type</option>
          <option value="1">Standard Room</option>
          <option value="2">Deluxe Room</option>
          <option value="3">Suite Room</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your experience..."
          rows={5}
          required
          className="w-full p-3 border border-gray-200 rounded-lg text-text-dark focus:outline-none focus:border-primary-1"
        />

        <button
          type="submit"
          className="bg-primary-1 text-white py-3 rounded-full font-medium hover:bg-primary-2 transition hover:scale-[1.02]"
        >
          Submit Review
        </button>

      </form>
    </div>

  </section>
</main>

      <Footer />
    </>
  );
}