import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./adminViewStyles.css";

const BASE_URL = "http://localhost:8080";

function UpdateGameButton(props) {
  //Game id
  const { id } = useParams();
  console.log(id, "props");
  const navigate = useNavigate();

  console.log(props.isAdmin);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [msrp, setMsrp] = useState("");
  const [score, setScore] = useState("");
  const [ourreview, setOurReview] = useState("");
  const [studio, setStudio] = useState("");
  const [ourscore, setOurScore] = useState("");
  const [picturecard, setPictureCard] = useState("");
  const [pictureheader, setPictureHeader] = useState("");
  const [picturebody, setPictureBody] = useState("");
  const [picturefooter, setPictureFooter] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [about, setAbout] = useState("");
  const [forgamer, setForGamer] = useState("");
  const [notfor, setNotFor] = useState("");

  // submit function passed in OnSubmit in form below.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await updateGame(); // Passing our async function in from below.
    } catch (error) {
      console.log(error);
    }
  };

  async function updateGame() {
    try {
      const token = localStorage.getItem("token");
      props.setIsAdmin(true);

      const response = await fetch(`${BASE_URL}/api/games/updategame`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title,
          platform: platform,
          genre: genre,
          msrp: msrp,
          score: score,
          ourreview: ourreview,
          studio: studio,
          ourscore: ourscore,
          picturecard: picturecard,
          pictureheader: pictureheader,
          picturebody: picturebody,
          picturefooter: picturefooter,
          synopsis: synopsis,
          about: about,
          forgamer: forgamer,
          notfor: notfor,
          gameId: id,
        }),
      });
      // OUTSIDE FETCH
      const result = await response.json();
      console.log(result);
      if (result.error) {
        console.log(result.error);
      } else if (result.gameId) {
        const allGamesCopy = [...props.allGames];
        allGamesCopy.unshift(result);

        props.setAllGames(allGamesCopy);
        console.log(allGamesCopy);
      }
      //Needs to match props pass down from admin/games when rendered in admin dash

      setTitle("");
      setPlatform("");
      setGenre("");
      setMsrp("");
      setScore("");
      setOurReview("");
      setStudio("");
      setOurScore("");
      setPictureCard("");
      setPictureHeader("");
      setPictureBody("");
      setPictureFooter("");
      setSynopsis("");
      setAbout("");
      setForGamer("");
      setNotFor("");

      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="creategame-container">
      <p id="creategame-title">Create New Game Form</p>
      <form onSubmit={handleSubmit}>
        <label id="creategame-main-body" htmlFor="create game">
          <section id="creategame-first-section">
            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Title"
              value={title}
              onChange={(e) => {
                console.log(e.target.value);
                setTitle(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Platform"
              value={platform}
              onChange={(e) => {
                console.log(e.target.value);
                setPlatform(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Genre"
              value={genre}
              onChange={(e) => {
                console.log(e.target.value);
                setGenre(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game MSRP"
              value={msrp}
              onChange={(e) => {
                console.log(e.target.value);
                setMsrp(e.target.value);
              }}
            />
            {/* Whats the differnce between ourscore and score */}
            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Score"
              value={score}
              onChange={(e) => {
                console.log(e.target.value);
                setScore(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Our Score"
              value={ourscore}
              onChange={(e) => {
                console.log(e.target.value);
                setOurScore(e.target.value);
              }}
            />
          </section>

          {/* Handles picture inputs */}
          <section id="creategame-second-section">
            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Picture Card"
              value={picturecard}
              onChange={(e) => {
                console.log(e.target.value);
                setPictureCard(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Picture Header"
              value={pictureheader}
              onChange={(e) => {
                console.log(e.target.value);
                setPictureHeader(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Picture Body"
              value={picturebody}
              onChange={(e) => {
                console.log(e.target.value);
                setPictureBody(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="small-input"
              type="text"
              placeholder="Game Picture Footer"
              value={picturefooter}
              onChange={(e) => {
                console.log(e.target.value);
                setPictureFooter(e.target.value);
              }}
            />
          </section>

          <section id="creategame-third-section">
            <input
              id="creategame-body"
              className="large-input"
              type="text"
              placeholder="Game Our Review"
              value={ourreview}
              onChange={(e) => {
                console.log(e.target.value);
                setOurReview(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="large-input"
              type="text"
              placeholder="Game Studio"
              value={studio}
              onChange={(e) => {
                console.log(e.target.value);
                setStudio(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="large-input"
              type="text"
              placeholder="Synopsis"
              value={synopsis}
              onChange={(e) => {
                console.log(e.target.value);
                setSynopsis(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="large-input"
              type="text"
              placeholder="About"
              value={about}
              onChange={(e) => {
                console.log(e.target.value);
                setAbout(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="large-input"
              type="text"
              placeholder="Who it's for"
              value={forgamer}
              onChange={(e) => {
                console.log(e.target.value);
                setForGamer(e.target.value);
              }}
            />

            <input
              id="creategame-body"
              className="large-input"
              type="text"
              placeholder="Who it's not for"
              value={notfor}
              onChange={(e) => {
                console.log(e.target.value);
                setNotFor(e.target.value);
              }}
            />
          </section>
        </label>
        <div id="creategame-button-container">
          <button id="button-creategame" type="submit">
            Update Game ➡
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateGameButton;
