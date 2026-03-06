import React, { useEffect, useState } from "react";
import "./app.css";

const ARENA_CHANNEL_SLUG = "png-app2b046clc";

const App = () => {
  const [imageUrls, setImageUrls] = useState([]);

  async function fetchImages() {
    const response = await fetch(
      `https://api.are.na/v2/channels/${ARENA_CHANNEL_SLUG}/contents`
    );
    const data = await response.json();

    const images = data.contents
      .filter((block) => block.class === "Image")
      .map((block) => ({
        url: block.image.original.url,
        arenaUrl: `https://www.are.na/block/${block.id}`,
      }));

    setImageUrls(images);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div className="heading">
        <a href="https://corbinmuraro.com">Corbin Muraro</a>
      </div>
      <div className="main">
        {imageUrls.map((image, i) => {
          return (
            <a className="image" href={image.arenaUrl} target="_blank" rel="noreferrer" key={i}>
              <img className="image" src={image.url} alt="" />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default App;
