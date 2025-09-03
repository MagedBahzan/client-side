import React from "react";
import Ads from "./componants/home-componants/Ads";
import RecentNews from "./componants/home-componants/BreakingNews";

function Home() {
  return (
    <div className="home">
      <Ads />
      <RecentNews />
    </div>
  );
}

export default Home;
