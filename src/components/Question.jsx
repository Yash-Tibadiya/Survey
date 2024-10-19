import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import Button from "./Button";
import TimerIcon from "../assets/Timer.svg";

const Question = ({
  questionheader,
  questionText,
  emojis,
  filledEmojis,
  nextRoute,
  questionNum,
  totalQuestions,
  storeAnswer,
  ratingType,
}) => {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const navigate = useNavigate();
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleNextQuestion(null);
          return 0;
        }
        return prev - 1;
      });
      setTimeTaken((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const handleNextQuestion = (selectedValue) => {
    const valueToStore = selectedValue !== null ? selectedValue : null;
    storeAnswer({
      questionNum,
      questionheader,
      selected: valueToStore,
      timeTaken,
    });
    navigate(nextRoute);
  };

  // Render Emoji Rating
  const renderEmojiRating = () => (
    <div className="flex justify-start gap-4 mb-10">
      {emojis.map((emoji, index) => (
        <img
          key={index}
          src={
            hovered === index || selected === index
              ? filledEmojis[index]
              : emoji
          }
          alt={`emoji-${index}`}
          className="w-12 h-12 transition-transform transform cursor-pointer hover:scale-110"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setSelected(index)}
        />
      ))}
    </div>
  );

  // Render Star Rating
  const renderStarRating = () => {
    const labels = ["VeryBad", "Bad", "Average", "Good", "Perfect"];
  
    return (
      <div className="flex flex-col items-start mb-10">
        {/* Stars */}
        <div className="flex flex-row">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i;
            const isActive = ratingValue <= (hovered || selected);
            return (
              <label key={i} className="flex flex-col items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setSelected(ratingValue)}
                  className="hidden"
                />
                <FaRegStar
                className="ml-5"
                  color={isActive ? "#0085FF" : "#000000"}
                  size={50}
                  onMouseEnter={() => setHovered(ratingValue)}
                  onMouseLeave={() => setHovered(null)}
                />
                <span
                  className={`mt-2 ml-5 text-sm ${
                    isActive ? "text-[#0085FF]" : "text-gray-500"
                  }`}
                >
                  {labels[i]}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    );
  };  

  return (
    <div className="flex items-center justify-center mt-44">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[700px]">
        <h2 className="mb-4 text-3xl font-bold text-left">{questionheader}</h2>
        <p className="mb-10 text-xl text-left">{questionText}</p>

        {/* Conditionally render emoji or star rating based on ratingType */}
        {ratingType === "emoji" ? renderEmojiRating() : renderStarRating()}

        <hr />

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <Button onClick={() => handleNextQuestion(selected)}>
              Next Question
            </Button>

            <div className="mr-32 text-xs text-gray-500">
              <p>
                Remaining Question {questionNum} / {totalQuestions}
              </p>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <div className="w-10 h-10">
                <img src={TimerIcon} alt="Timer" />
              </div>
              <div className="flex flex-col">
                <p className="mb-0 text-extra-small">Time Remaining</p>
                <p className="mt-[-4px] text-sm font-extrabold text-black">
                  {formatTime(timeRemaining)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  questionheader: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  emojis: PropTypes.arrayOf(PropTypes.string),
  filledEmojis: PropTypes.arrayOf(PropTypes.string),
  nextRoute: PropTypes.string.isRequired,
  questionNum: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  storeAnswer: PropTypes.func.isRequired,
  ratingType: PropTypes.oneOf(["emoji", "star"]).isRequired,
};

export default Question;
