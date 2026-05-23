import { Quote } from "lucide-react";

export function Testimonials() {
  const Card = ({ name, role, title, text, img }: any) => (
    <div className="relative isolate overflow-hidden p-8 lg:p-10 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-2 text-left group">
      {/* Background Hover Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-1/5 rounded-bl-[100px] -z-10 transition-all duration-500 group-hover:bg-primary-1 group-hover:scale-[15] origin-top-right" />
      
      <div className="flex items-center gap-4 mb-6">
        <img src={img} alt={name} className="w-16 h-16 object-cover rounded-full border-2 border-primary-1 transition-colors duration-300 group-hover:border-white shadow-sm" />
        <div>
          <h5 className="text-lg font-bold text-text-dark transition-colors duration-300 group-hover:text-white">{name}</h5>
          <h6 className="text-sm font-medium text-accent">{role}</h6>
        </div>
      </div>

      <Quote className="w-10 h-10 text-primary-1/20 mb-4 transition-colors duration-300 group-hover:text-white/50" fill="currentColor" />
      
      <h4 className="mb-3 text-xl font-serif font-bold text-primary-2 transition-colors duration-300 group-hover:text-white">
        "{title}"
      </h4>
      <p className="text-text-light text-base leading-relaxed transition-colors duration-300 group-hover:text-white/90">
        {text}
      </p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" data-aos="zoom-in" data-aos-duration="500">
      <Card 
        name="Emily Thompson" role="Travel Blogger" title="Amazing Experience!"
        text="The food was exquisite, and the hotel provided top-notch comfort. A must-visit for anyone seeking both luxury and relaxation."
        img="/images/home/s6-person1.jpg"
      />
      <Card 
        name="Michael Rodriguez" role="Executive Chef" title="Food and Comfort!"
        text="The food was outstanding, and the hotel atmosphere was so cozy. Truly the best place to stay and dine on the coast!"
        img="/images/home/s6-person2.jpg"
      />
      <Card 
        name="Sarah Collins" role="Food Critic" title="Top-Notch Quality"
        text="The hotel was fantastic, but the food was even better. A perfect spot for both relaxation and great meals with family."
        img="/images/home/s6-person3.jpg"
      />
    </div>
  );
}
