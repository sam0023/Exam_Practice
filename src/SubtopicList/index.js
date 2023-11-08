import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const env = [
  { id: 1, topicId: "np" },
  { id: 2, topicId: "tr" },
  { id: 3, topicId: "species" },
];
const polity = [
  { id: 1, topicId: "fr" },
  { id: 2, topicId: "fd" },
];

const subjects = [
  {
    id: "env",
    data: env,
  },
  {
    id: "polity",
    data: polity,
  },
];
const SubtopicList = (props) => {
  // Replace with your subtopic data
  console.log(props);
  const { subjectId } = useParams();
  console.log("subjectId", subjectId);

  const subtopicObject = subjects.find((subject) => subject.id === subjectId);
  console.log(subtopicObject);
  const subtopic = subtopicObject.data;
  // Get subjectId from route parameters

  // Filter subtopics based on the subjectId

  return (
    <div>
      <h2>Subtopics for Subject ID {subjectId}</h2>
      <ul>
        {subtopic.map((subtopic) => (
          <li key={subtopic.id}>
            <Link to={`/${subjectId}/${subtopic.topicId}`}>
              {subtopic.topicId}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubtopicList;
