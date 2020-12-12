import React, { useEffect, useState } from "react";
import { Dropbox } from "dropbox";
import "./app.css";

const App = () => {
  const [imageUrls, setImageUrls] = useState([]);

  async function fetchImages() {
    let dbx = new Dropbox({
      accessToken:
        "mNuFKmh5rh8AAAAAAAAAAbOkVe8Gx_aezrRqg2hybN_DbtLyPTJ5BDRBOJEf9brq",
    });

    dbx.sharingGetSharedLinks({ path: "" }).then((response) => {
      const imageUrls = response.result.links.map((image) =>
        image.url.replace(/([^?]+$)/gi, "raw=1")
      );

      setImageUrls(imageUrls);
    });
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
        {imageUrls.map((url, i) => {
          return (
            <a className="image" href={url} target="_blank" key={i}>
              <img className="image" src={url} key={i} />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default App;
