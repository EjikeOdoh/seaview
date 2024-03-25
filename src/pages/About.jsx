import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CustomInput = ({ label, type = "text", value, onChange }) => {
  return (
    <div className="flex-1 sm:mt-0 mt-4">
      <input
        placeholder={label}
        required
        type={type}
        className="w-full bg-[#EDEDED] rounded-lg h-14 px-5"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="">
      <Navbar />
      <div className="h-80 grid place-items-center">
        <h2>About</h2>
      </div>
      <div className="sm:py-28 py-16 sm:px-24 px-5 grid gap-5">
        <p>
          At Seaview Golf Club, located in the vibrant coastal city of Monrovia,
          Liberia, we invite you to embark on a golfing journey unlike any
          other. Nestled along the scenic shores of the Atlantic Ocean, our club
          stands as a beacon of recreation, relaxation, and camaraderie for golf
          enthusiasts of all levels.
        </p>
        <p>
          Established in [Year], Seaview Golf Club has been a cherished
          cornerstone of the Monrovia community for [Number of Years] years. Our
          rich history reflects our dedication to providing exceptional golfing
          experiences amidst the breathtaking beauty of Liberia's coastline.
          Over the years, we have cultivated a reputation for excellence in
          service, facilities, and fostering a welcoming environment for all who
          grace our fairways.
        </p>
        <p>
          Experience the allure of golfing paradise at Seaview Golf Club,
          Monrovia. Whether you're seeking the thrill of competition, the
          tranquility of nature, or simply the joy of shared moments, we invite
          you to become a part of our vibrant community. Come, tee off with us,
          and discover the magic of golf amidst the beauty of Liberia's
          coastline.
        </p>
      </div>
      {/* Contact Form */}
      <div className="bg-black">
        <form className="grid gap-5 max-w-[600px] mx-auto py-10 bg-black px-10">
          <CustomInput label="Full Name" />
          <CustomInput label="Email" type="email" />
          <CustomInput label="Telephone" type="number" />
          <CustomInput label="Subject" />
          <textarea
            className="w-full min-h-28 p-5 rounded-lg"
            placeholder="Type your message..."
          ></textarea>

          <button className="border-white rounded-full text-white w-full h-10 bg-red-600 text-center">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default About;
