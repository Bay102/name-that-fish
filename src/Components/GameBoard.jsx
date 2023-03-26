import { useState } from "react";
import "./styles/game-board.css";
// import { Images } from "../assets/images";


//> need an onSubmit function 

export const GameBoard = ({ fish, setUserEntry, matchFish}) => {

  const nextFishToName = fish.length ? fish[0] : undefined;

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fish.length ? nextFishToName.url : null} alt={fish.length ? nextFishToName.name : null} />
      </div>
      <form id="fish-guess-form" >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input onChange={(e) => setUserEntry(e.target.value)} type="text" name="fish-guess" />
        <button onClick={matchFish}>Enter</button>
      </form>
    </div>
  );
};


