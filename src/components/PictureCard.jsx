import { useState, useEffect } from "react";

function PictureCard() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          `https://64986b389543ce0f49e20545.mockapi.io/games`
        );
        const result = await response.json();

        setPictures(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGames();
  }, []);

  return (
    <div>
      {pictures.length ? (
        pictures.map((picture) => {
          return (
            <div key={picture._id}>
              <div>{picture.picture}</div>
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default PictureCard;
