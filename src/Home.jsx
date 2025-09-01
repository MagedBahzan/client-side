import React from "react";
import Ads from "./componants/home-componants/Ads";
import BenefitsSection from "./componants/home-componants/BenefitsSection";
import RecentNews from "./componants/home-componants/CoursesSection";
import PricingSection from "./componants/home-componants/PricingSection";
import TestimonialsSection from "./componants/home-componants/TestimonialsSection";

function Home() {
  const [theApiData, setTheApiData] = React.useState({});
  React.useEffect(function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (this.responseText === undefined) {
        setTheApiData(null);
      } else {
        setTheApiData(JSON.parse(this.responseText).data);
      }
    };
    xhttp.open("GET", "http://127.0.0.1:8000/api/v1/main/news", true);
    xhttp.send();
  }, []);
  console.log(theApiData ? theApiData.allDocs : null);
  const firstDoc = theApiData.allDocs ? theApiData.allDocs[0] : null;
    console.log(firstDoc);

  return (
    <div className="home">
      {/* <div className="joks--contaner">
              {<pre>{JSON.stringify(theApiData, null, 2)}</pre>}
              <p>{count}</p>
              <button onClick={numCount}>Clic for Counting</button>
          </div> */}
      <Ads />
      <RecentNews />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
        </div>
  );
}

export default Home;
