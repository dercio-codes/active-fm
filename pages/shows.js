import ShowItem from "../component/ShowItem";
import Footer from "../component/Footer";
import { useState, useEffect } from "react";

export default function MusicShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("/shows.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShows(data);
      });
  }, []);

  return (
    <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            background:'rgb(17, 17, 17)'
          }}
        >
          {shows.map((show, index) => {
            console.log(show);
            return (
              <ShowItem
                key={index}
                title={show.name}
                img={show.img}
                description={show.description}
                link={show.link}
              />
            );
          })}
        </div>
      {/* </div> */}
      <Footer/>
    </main>
  );
}
