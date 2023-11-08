import React, { useState } from "react";

const places = {
  ap: ["Tirupati", "Vizag", "Guntur"],
  mp: ["Bhopal", "Indore"],
  // Add more states and their places here
};

function Placequiz() {
  const [currentPlace, setCurrentPlace] = useState("Tirupati");
  const [showState, setShowState] = useState(false);

  const handleNextClick = () => {
    // Get a random place from the object
    const stateKeys = Object.keys(places);
    const randomState = stateKeys[Math.floor(Math.random() * stateKeys.length)];
    const statePlaces = places[randomState];
    const randomPlace =
      statePlaces[Math.floor(Math.random() * statePlaces.length)];

    setCurrentPlace(randomPlace);
    setShowState(false);
  };

  const handleAnswerClick = () => {
    setShowState(true);
  };

  return (
    <div>
      <h2>{currentPlace}</h2>
      {showState && (
        <p>
          State:{" "}
          {Object.keys(places).find((state) =>
            places[state].includes(currentPlace)
          )}
        </p>
      )}
      <button onClick={handleAnswerClick}>Show State</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Placequiz;
