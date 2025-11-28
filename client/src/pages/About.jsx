import React from "react";
import aboutImg1 from "../assets/aboutImg1.webp"; // first living room image
import aboutImg2 from "../assets/aboutImg2.jpg"; // second building image
import Footer from "../components/Foooter";

const AboutPage = () => {
  return (
    <div className="w-full px-6 md:px-40 py-16" style={{backgroundColor:"#fff5e6"}}>

      {/* Top Section */}
      <h1 className="text-4xl font-bold text-[#0d2154]">About us</h1>
      <div className="w-16 h-[3px] bg-blue-500 mt-2 mb-6"></div>

      <p className="text-gray-600 leading-relaxed max-w-4xl text-lg">
        EasyPGRooms is a technology-based platform for Booking PG, Serviced 
        Apartments, Shared Flat and Rooms by Location with Specific requirement 
        by filtering by Location, IT Parks, Land Mark, Price, Room type, 
        Amenities, Gender and Food. Presently we have Launched in West Bengal. 
        We will soon expand to all the Major Cities 
        of the Country.
      </p>

      {/* Section 1: Image Left - Text Right */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
        
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImg1}
            alt="About"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#0d2154]">Who we are?</h2>
          <div className="w-16 h-[3px] bg-blue-500 mt-2 mb-6"></div>

          <p className="text-gray-600 leading-relaxed text-lg">
            We are a set of well-selected and chosen Paying Guest services. 
            This is a platform where those, who are willing to open their 
            homes to guests, meet the people looking for wonderful homes to 
            stay in and not have to look for hotels or favors in any city for 
            their long stays. We ensure the places listed and the people 
            looking for a stay are selected based on careful filtering 
            criteria so that both parties benefit and the safety of all 
            involved persons is ensured. We know how important a safe home is 
            to you at both ends of the deal and that is a promise we make.
          </p>
        </div>
      </div>

      {/* Section 2: Text Left - Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mt-16">
        
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImg2}
            alt="What we do"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#0d2154]">What we do?</h2>
          <div className="w-16 h-[3px] bg-blue-500 mt-2 mb-6"></div>

          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            We put together a list of places where our guests can stay as a 
            PG. This is done based on listings on our site by homeowners. We 
            ensure that not only are they a safe home for the guest but the 
            guest too is safe for them. These places can be searched based on 
            locality, budget, need, and multiple other filters. Find the 
            perfect PG stay or guest with us.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            To meet our aim, we eliminate the two major problems a guest or 
            host may face. The first of these is the lack of information for 
            anyone new in a city. Our site will list all the...
          </p>
        </div>
      </div>
      <div className="p-10"></div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default AboutPage;
