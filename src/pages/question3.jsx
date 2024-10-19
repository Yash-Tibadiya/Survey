import { useContext } from "react";
import Question from "../components/Question";
import { SurveyContext } from "../context/SurveyContext";

const Question3 = () => {
  const { storeAnswer } = useContext(SurveyContext);

  return (
    <Question
      questionheader="Online and Mobile Banking"
      questionText="How would you rate your experience with our online and mobile banking services?"
      nextRoute="/thank-you"
      questionNum={3}
      totalQuestions={3}
      storeAnswer={storeAnswer}
      ratingType="star" 
    />
  );
};

export default Question3;
