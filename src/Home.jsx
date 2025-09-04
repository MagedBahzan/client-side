import React from "react";
import Ads from "./componants/home-componants/Ads";
import RecentNews from "./componants/home-componants/BreakingNews";

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
  // const firstDoc = theApiData.allDocs ? theApiData.allDocs[0] : null;
  //   console.log(firstDoc);
    // const selctedCategory = theApiData ? (theApiData.allDocs).filter((ele) => ele.category === this.includs(ele)) : null;
    // console.log(selctedCategory);

  return (
    <div className="home">
      {/* <div className="joks--contaner">
              {<pre>{JSON.stringify(theApiData, null, 2)}</pre>}
              <p>{count}</p>
              <button onClick={numCount}>Clic for Counting</button>
          </div> */}
      <Ads />
      <RecentNews />
      </div>
  );
}

export default Home;
