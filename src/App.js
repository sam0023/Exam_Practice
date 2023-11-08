//import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom"; // Import 'Switch' from 'react-router'

import CommonQuiz from "./CommonQuiz";
import Home from "./Home";
import SubtopicList from "./SubtopicList";

//const App = () => <Animalquiz />;
const App = () => (
  <HashRouter basename="/">
    <Routes>
      <Route exact path="/:subjectId" element={<SubtopicList />} />

      <Route exact path="/:subjectId/:subtopicId" element={<CommonQuiz />} />
      <Route exac path="/" element={<Home />} />
    </Routes>
  </HashRouter>
);
export default App;
