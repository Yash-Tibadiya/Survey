import { useContext } from "react";
import VeryBad from "../assets/VeryBad.png";
import VeryBadFill from "../assets/VeryBadFill.png";
import Bad from "../assets/Bad.png";
import BadFill from "../assets/BadFill.png";
import Average from "../assets/Average.png";
import AverageFill from "../assets/AverageFill.png";
import Good from "../assets/Good.png";
import GoodFill from "../assets/GoodFill.png";
import Perfect from "../assets/Perfect.png";
import PerfectFill from "../assets/PerfectFill.png";
import Question from "../components/Question";
import { SurveyContext } from "../context/SurveyContext";

const Question1 = () => {
  const { storeAnswer } = useContext(SurveyContext);

  const emojis = [VeryBad, Bad, Average, Good, Perfect];
  const filledEmojis = [
    VeryBadFill,
    BadFill,
    AverageFill,
    GoodFill,
    PerfectFill,
  ];

  return (
    <Question
      questionheader="Overall Satisfaction"
      questionText="How satisfied are you with your overall experience with our credit card?"
      ratingType="emoji"
      emojis={emojis}
      filledEmojis={filledEmojis}
      nextRoute="/question2"
      questionNum={1}
      totalQuestions={3}
      storeAnswer={storeAnswer}
    />
  );
};

export default Question1;
