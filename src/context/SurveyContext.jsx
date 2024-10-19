import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const storeAnswer = ({ questionNum, questionheader, selected, timeTaken }) => {
    const labels = ["VeryBad", "Bad", "Average", "Good", "Perfect"];

    const answer = {
      questionNum,
      questionheader, 
      selected: selected !== null ? labels[selected] : null,
      timeTaken: selected === null ? 60 : timeTaken,
    };

    setAnswers((prevAnswers) => {
      const existingAnswerIndex = prevAnswers.findIndex(
        (answer) => answer.questionNum === questionNum
      );

      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = answer;
        return updatedAnswers;
      } else {
        return [...prevAnswers, answer];
      }
    });
  };

  return (
    <SurveyContext.Provider value={{ answers, storeAnswer }}>
      {children}
    </SurveyContext.Provider>
  );
};

SurveyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
