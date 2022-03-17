import React from "react";

export default function Meme(props) {
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemeImages(data.data.memes);
      });
  }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://images.unsplash.com/photo-1594639739395-d73d9f506f6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const [allMemeImages, setAllMemeImages] = React.useState([]);
  function getMeme() {
    let memesArr = allMemeImages;
    let num = Math.floor(Math.random() * memesArr.length);

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: allMemeImages[num].url,
      };
    });
  }

  return (
    <main>
      <form className="meme-form">
        <div className="input-wrapper">
          <input
            className="input"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          ></input>
          <input
            className="input"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={getMeme} type="button" className="button">
          Get a new Meme image &#128444;
        </button>
      </form>

      <div className="img-wrapper">
        <img className="big-img" src={meme.randomImage}></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
