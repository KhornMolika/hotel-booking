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

  // ✅ FIXED TYPE FOR EVENT
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
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
const randomImages = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
];
const roomTypeMap: Record<string, string> = {
  "1": "Standard Room",
  "2": "Deluxe Room",
  "3": "Suite Room",
};
const getRandomImage = () => {
  const index = Math.floor(Math.random() * randomImages.length);
  return randomImages[index];
};

const newReview = {
  name: "Guest User",
  role: "Hotel Guest",
   img: getRandomImage(),
  title: `${roomTypeMap[formData.roomTypeId]} Review`,
  text: formData.message,
  roomType: roomTypeMap[formData.roomTypeId],
};
  // get existing reviews
  const existingReviews =
    JSON.parse(localStorage.getItem("reviews") || "[]");

  // add new review on top
  const updatedReviews = [newReview, ...existingReviews];

  // save back
  localStorage.setItem("reviews", JSON.stringify(updatedReviews));

  console.log("REVIEW SAVED:", newReview);

  // reset form (KEEP YOUR UI SAME)
  setFormData({
    roomTypeId: "",
    message: "",
  });
};

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mt-[70px] min-h-[calc(100vh-116px)]">
  <section className="py-20 px-8 lg:px-16 flex flex-col lg:flex-row gap-12 bg-whitesmoke justify-center items-center lg:items-start max-w-7xl mx-auto">

    {/* LEFT SIDE (UNCHANGED STRUCTURE, SMALLER TEXT) */}
    <div className="flex-1 max-w-md w-full">
      <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-2 mb-4 leading-tight">
        Share Your Experience
      </h2>

      <p className="text-sm lg:text-base text-text-light leading-relaxed mb-4">
        We value every guest's feedback and strive to provide the best hospitality experience possible.
      </p>

      <p className="text-sm lg:text-base text-text-light leading-relaxed mb-4">
        Tell us about your stay, room quality, service, and overall experience.
      </p>

      <div className="border-l-4 border-primary-1 pl-5">
        <p className="text-sm lg:text-base text-text-dark italic leading-relaxed">
          “Thank you for taking the time to share your valuable feedback.”
        </p>
      </div>
    </div>

    {/* RIGHT SIDE (ONLY TEXT SMALLER, SAME UI) */}
    <div className="flex-1 max-w-2xl w-full bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-2 mb-2 leading-tight">
          Write a Review
        </h2>

        <p className="text-sm lg:text-base text-text-light mb-2">
          Share your experience with us.
        </p>

        <select
          name="roomTypeId"
          value={formData.roomTypeId}
          onChange={handleChange}
          required
          className="w-full p-3 border border-[#e2e8f0] rounded text-sm lg:text-base text-text-dark focus:outline-none focus:border-primary-1 font-sans"
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
          className="w-full p-3 border border-[#e2e8f0] rounded text-sm lg:text-base text-text-dark focus:outline-none focus:border-primary-1 font-sans"
        />

        <button
          type="submit"
          className="bg-primary-1 text-white py-3 px-6 border-none rounded-full text-sm lg:text-base font-medium cursor-pointer transition-all self-start hover:bg-primary-2 hover:scale-105"
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