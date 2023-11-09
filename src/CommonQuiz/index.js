import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SpeciesQuestions from "../Environment/Species";
import AphistoryPrintingQuestions from "../Subjects/ApHistory/Printing";
import chess from "../chess.mp3";
import "./index.css";

const env = [
  {
    topic: "np",
    questions: [
      {
        questionText: " np1?",
        ans: [1, 2, 3],
      },
      {
        questionText: " np1?",
        ans: [1, 2, 3],
      },
    ],
  },
  {
    topic: "tr",
    questions: [
      {
        questionText: " np1?",
        ans: [1, 2, 3],
      },
      {
        questionText: " np1?",
        ans: [1, 2, 3],
      },
    ],
  },
  {
    topic: "species",
    questions: SpeciesQuestions,
  },
];

const polity = [
  {
    topic: "fr",
    questions: [
      {
        questionText: " fr1?",
        ans: [1, 2, 3],
      },
      {
        questionText: " fr2?",
        ans: [1, 2, 3],
      },
    ],
  },
  {
    topic: "fd",
    questions: [
      {
        questionText: " fd1?",
        ans: [1, 2, 3],
      },
      {
        questionText: " fd2?",
        ans: [1, 2, 3, 4],
      },
    ],
  },
];

const apHistory = [
  {
    topic: "printing",
    questions: AphistoryPrintingQuestions,
  },
];
const subjects = {
  env: env,
  polity: polity,
  apHis: apHistory,
};

const questionsList = (subjectId, subtopicId) => {
  // Find the matching subtopic based on subjectId and subtopicId

  const subject = subjects[subjectId];

  const topic = subject.find((t) => t.topic === subtopicId);
  return topic ? topic.questions : [];
};

const CommonQuiz = (props) => {
  const { subjectId, subtopicId } = useParams();

  const questions = questionsList(subjectId, subtopicId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionNo, setQuestionNo] = useState(1);

  const audioRef = React.createRef();

  // Function to get a random question
  function getRandomQuestion() {
    audioRef.current.play();
    setQuestionNo(questionNo + 1);
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
    setShowAnswer(false);
  }

  // Function to show the answer for the current question
  function showAnswerForCurrentQuestion() {
    audioRef.current.play();
    setShowAnswer(true);
  }

  // Function to move to the next random question
  function moveToNextQuestion() {
    getRandomQuestion();
  }

  // Ensure that there are questions available
  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  return (
    <div className="quizcontainer">
      <h2>Quiz-Total question:{questions.length}</h2>
      <p>Question {questionNo}</p>
      <p>{questions[currentQuestionIndex].questionText}</p>

      {showAnswer && (
        <div>
          <h3>Answer:</h3>
          {questions[currentQuestionIndex].ans.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))}
        </div>
      )}

      <button onClick={showAnswerForCurrentQuestion}>Show Answer</button>
      <button onClick={moveToNextQuestion}>Next Question</button>
      <audio ref={audioRef}>
        <source src={chess} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default CommonQuiz;
