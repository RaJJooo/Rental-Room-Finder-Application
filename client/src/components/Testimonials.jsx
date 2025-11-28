import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "BookMyPG helped me find a clean and safe PG near my office. Super smooth experience!",
    rating: 5,
  },
  {
    name: "Neha Singh",
    location: "Hyderabad",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    message:
      "Found a girls' PG in my budget within minutes. The filters are very useful!",
    rating: 4,
  },
  {
    name: "Rahul Verma",
    location: "Chennai",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    message:
      "Transparent pricing and verified owners. Highly recommend this platform.",
    rating: 5,
  },
  {
    name: "Pooja Desai",
    location: "Pune",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Helped me find a very homely PG near my college. Loved the experience!",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    message:
      "Everything was super easy. Booked a room in just 10 minutes.",
    rating: 4,
  },
  {
    name: "Aarohi Patil",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    message:
      "Great app with genuine PG listings. Food & amenities filter helped a lot!",
    rating: 5,
  },
  {
    name: "Rohit Nair",
    location: "Kochi",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
    message:
      "Found a PG exactly next to my IT park. Perfect for working professionals.",
    rating: 5,
  },
  {
    name: "Ishita Basu",
    location: "Kolkata",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Safe, reliable, and fast. The reviews and images helped me decide.",
    rating: 4,
  },
  {
    name: "Vikram Rao",
    location: "Chennai",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
    message:
      "Very easy to compare different rooms. Saved me so much time!",
    rating: 5,
  },
  {
    name: "Sana Khatun",
    location: "Lucknow",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    message:
      "Amazing experience. Verified PGs made it stress-free for my parents too.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="w-full py-14 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Testimonials
        </h2>
        <p className="text-gray-600 mb-8">
          Real experiences from our happy users
        </p>

        {/* Horizontal scroll section */}
        <div className="overflow-x-auto hide-scroll-bar">
          <div className="flex space-x-6 pb-4">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{t.message}</p>

                <div className="flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar for all browsers */}
      <style>{`
        .hide-scroll-bar {
          -ms-overflow-style: none;  
          scrollbar-width: none;  
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
