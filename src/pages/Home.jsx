import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Image from "../assets/Image.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-80 flex justify-center items-center">
        <p>Home</p>
      </div>

      <div className="sm:py-28 py-16 sm:px-24 px-5 grid gap-5">
        <div className="">
          <p>
            Lakowe Lakes Golf and Country Estate is an exclusive 308-hectare
            residential golf estate. Aptly dubbed “West Africa’s Best Kept
            Secret” because of its exclusive lifestyle and rare serene living
            within such a busy city like Lagos, Nigeria, the estate boasts of 3
            main sectors – Hospitality (short stays, events and meetings), Golf
            and Real Estate.{" "}
          </p>
          <p>
            Blending traditional country estate style with modern amenities,
            functionality and hospitality services, Lakowe Lakes Golf and
            Country Estate offers an 18 hole championship golf course, short
            stay hospitality services, 5 food and beverage outlets, over 14
            manmade lakes, meeting rooms and event spaces in an eco-friendly and
            natural setting, away from the distractions and stress of urban
            life. Whether you’re swinging a ball on our signature Par 3 Hole 12
            on the championship standard golf course, enjoying a mind clearing
            run or swim, or sweating it off on our tennis court or gym, you are
            assured of an environment where your wellbeing is priority.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-5">
          <div className="flex-1 grid gap-5">
            <h2 className="font-bold text-5xl">Book A Stay</h2>
            <p>
              Get a taste of the peace that Lakowe Lakes offers at any of our
              Balinese inspired cottages or short let apartments. Revive
              yourself with our activities at our sports center or excite your
              tastebuds at any of our 5 food and beverage outlets on ground. We
              offer breathtaking backgrounds for your personal and corporate
              events and also engage you and your guests with relaxing and fun
              activities
            </p>
            <div className="flex gap-5">
              <Button label="Book Now" />
              <Button label="Book Now" />
            </div>
          </div>
          <div className="flex-1">
            <img src={Image} />
          </div>
        </div>
        <div className="flex sm:flex-row-reverse  flex-col gap-5">
          <div className="flex-1 grid gap-5">
            <h2 className="font-bold text-5xl">Take A Swing</h2>
            <p>
              The Lakowe Lakes Golf Course is an 18-hole, par-72 championship
              course that delivers a golfing experience that can be enjoyed by
              both the most accomplished golfers and beginners alike. Lakowe
              Lakes Golf Club is arguably one of the largest in West Africa and
              consists of the full 18 hole course, a 9 hole mashie course and
              driving range.
            </p>
            <div className="flex gap-5">
              <Button label="Book a Member" />
              <button className="border border-white rounded-xl text-white w-40 h-14 bg-black text-center">
                View More
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src={Image} />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-5">
          <div className="flex-1 grid gap-5">
            <h2 className="font-bold text-5xl">Explore Our Real Estate</h2>
            <p>
              Living well never goes out of style in this exquisitely designed
              golf estate tailored for relaxation, rejuvenation and escape.
              Residential units and plots are offered in a range of styles to
              reflect your preferences, and personality. The residences at
              Lakowe Lakes have been designed for homeowners to enjoy the full
              splendor of the golf course, lakes, and garden views.
            </p>
            <div className="flex">
              <button className="border border-white rounded-xl text-white w-60 h-14 bg-black text-center">
                View More
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src={Image} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sm:py-28 py-16 sm:px-24 px-5">
        <h2 className="font-bold text-5xl">Activities in Lakowe</h2>
        <div></div>
        <button className="border border-white rounded-xl text-white w-72 h-14 bg-black text-center">
          Explore
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
