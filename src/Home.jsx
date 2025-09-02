import React from "react";
import Ads from "./componants/home-componants/Ads";
import RecentNews from "./componants/home-componants/BreakingNews";

function Home() {
  const [theApiData, setTheApiData] = React.useState({});
  let categoryEle = [];
  React.useEffect(function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (this.responseText === undefined) {
        setTheApiData(null);
      } else {
        setTheApiData(JSON.parse(this.responseText).data.allDocs);
      }
    };
    xhttp.open("GET", "http://127.0.0.1:8000/api/v1/main/news", true);
    xhttp.send();
  }, []);
  // console.log(theApiData ? theApiData.allDocs : null);
  // const firstDoc = theApiData.allDocs ? theApiData.allDocs[0] : null;
  // console.log(firstDoc);
  // console.log(theApiData ? theApiData.allDocs : null);

  function categoryList() {
    if (theApiData.length > 0 && theApiData) {
      theApiData.map((val) =>
        !categoryEle.includes(val.category)
          ? categoryEle.push(val.category)
          : null
      );
    }
  }
  categoryList()

  console.log(categoryEle);
  console.log(theApiData);
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
