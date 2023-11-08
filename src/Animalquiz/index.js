import React, { useState } from "react";

const animals = {
  tiger: "Tigers are endangered.",
  elephant: "Elephants are vulnerable.",
  // Add more animals and their answers here
};

function Animalquiz() {
  const [currentAnimal, setCurrentAnimal] = useState("tiger");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextClick = () => {
    // Get a random animal from the object
    const animalKeys = Object.keys(animals);
    const randomAnimal =
      animalKeys[Math.floor(Math.random() * animalKeys.length)];
    setCurrentAnimal(randomAnimal);
    setShowAnswer(false);
  };

  const handleAnswerClick = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <h2>{currentAnimal}</h2>
      {showAnswer && <p>{animals[currentAnimal]}</p>}
      <button onClick={handleAnswerClick}>Show Answer</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Animalquiz;
