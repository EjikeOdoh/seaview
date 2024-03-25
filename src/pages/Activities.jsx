import React from "react";
import Navbar from "../components/Navbar";

const Activities = () => {
  return (
    <div>
      <Navbar />
      <div className="h-80 grid place-items-center">
        <h2>Activities</h2>
      </div>
      <div className="sm:py-28 py-16 sm:px-24 px-5">
        <p>
          At Seaview Golf Club, membership transcends mere access to our
          esteemed facilities; it serves as an entrée into an exclusive
          community bound by a shared passion for the game and a steadfast
          commitment to fostering enduring friendships. Whether you are a
          seasoned golfing aficionado honing your skills or an enthusiastic
          newcomer eager to explore the sport, our meticulously curated
          membership options cater to your individual preferences, providing
          privileged access to world-class practice facilities, opulent
          clubhouse amenities, and an engaging calendar brimming with social
          events and prestigious tournaments.
        </p>
      </div>
    </div>
  );
};

export default Activities;
