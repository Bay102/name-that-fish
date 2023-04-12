import { useState } from "react";
import "./styles/game-board.css";
// import { Images } from "../assets/images";


//> need an onSubmit function 

export const GameBoard = ({ fish, userEntry ,setUserEntry, matchFish}) => {

 const nextFishToName = fish[0];

  const fishInput = ({ target: { value } }) => {
    setUserEntry(value);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userEntry}
          onChange={fishInput}
        />
        <input type="submit" onClick={matchFish} />
      </form>
    </div>
  );
};


