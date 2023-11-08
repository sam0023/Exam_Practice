//import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Switch' from 'react-router'

import CommonQuiz from "./CommonQuiz";
import Home from "./Home";
import SubtopicList from "./SubtopicList";

//const App = () => <Animalquiz />;
const App = () => (
  <Router>
    <div>
      <Routes>
        <Route exact path="/:subjectId" element={<SubtopicList />} />

        <Route exact path="/:subjectId/:subtopicId" element={<CommonQuiz />} />
        <Route exac path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);
export default App;
