import React from "react";
import Header from "./Header";
import Meme from "./Meme";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Meme darkmode={true} />
    </div>
  );
}
