import React from "react";
import Footer from "../components/Footer";

import Image from "../assets/Image.jpg";
import Navbar from "../components/Navbar";

const SlideContainer = ({ label }) => {
  return (
    <div className="flex-1 sm:min-h-[450px] flex flex-col">
      <div className="flex-1"></div>
      <p className="text-center p-5 bg-black text-white">{label}</p>
    </div>
  );
};

const Golf = () => {
  return (
    <div className="">
      <Navbar />
      <div className="h-80 grid place-items-center">
        <h2>Golf</h2>
      </div>
      <div className="flex items-center gap-5 sm:py-28 py-16 sm:px-24 px-5">
        <div className="flex-1">
          <h2>The Seaview Golf Club</h2>
          <p>
            Spanning across [Number of Acres] acres of lush, coastal terrain,
            our championship course stands as a testament to the natural
            splendor of Liberia's picturesque coastline. Crafted with meticulous
            attention to detail by esteemed course designers, each meticulously
            sculpted hole offers a captivating blend of strategic challenge and
            awe-inspiring scenery. From sweeping vistas of the azure ocean to
            the tranquil embrace of verdant mangrove forests, every round at
            Seaview Golf Club promises an exhilarating odyssey, inviting players
            to immerse themselves in the unparalleled beauty and serenity of
            their surroundings.
          </p>
        </div>
        <div className="flex-1">
          <img src={Image} />
        </div>
      </div>

      <div className="flex w-2/3 mx-auto">
        <SlideContainer label="Driving Range" />
        <SlideContainer label="Clubhouse" />
        <SlideContainer label="Golf Academy" />
      </div>
      <div className="sm:py-28 py-16 sm:px-24 px-5 flex items-center gap-5">
        <div className="flex-1">
          <img src={Image} />
        </div>
        <div className="flex-1 grid gap-5">
          <h2>Play in Seaview Golf Club</h2>
          <p>
            Embrace the allure of golfing paradise at Seaview Golf Club, where
            every swing is accompanied by the gentle melody of ocean waves
            caressing the shoreline and the rustling of palm fronds swaying in
            the tropical breeze. Whether you are drawn by the thrill of
            competitive play, the serenity of nature, or the joy of forging
            lasting connections with like-minded individuals, we extend a warm
            invitation to become an integral part of our vibrant coastal
            enclave. Come, tee off with us, and discover the enchanting magic of
            golf amidst the breathtaking splendor of Liberia's coastal landscape
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Golf;
