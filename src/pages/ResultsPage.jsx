import React, { useContext } from "react";
import { SurveyContext } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const ResultsPage = () => {
  const { answers } = useContext(SurveyContext);
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const sortedAnswers = [...answers].sort(
    (a, b) => a.questionNum - b.questionNum
  );

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[700px] text-center">
        <h2 className="text-3xl font-extrabold">Results</h2>
        <p className="mb-12 text-sm text-gray-500">Your survey result is available here</p>

        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 pb-4 text-center">Question</th>
              <th className="px-4 py-2 pb-4 text-center">Selected Answer</th>
              <th className="px-4 py-2 pb-4 text-center">Time Taken</th>
            </tr>
          </thead>
          <tbody>
            {sortedAnswers.map((answer, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="px-4 py-2 text-center">{answer.questionheader}</td>
                  {/* <td className="px-4 py-2 text-center">Question {answer.questionNum}</td> */}
                  <td className="px-4 py-2 text-center">
                    {answer.selected !== null ? answer.selected : "null"}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {answer.selected === null
                      ? "Time Over"
                      : `${answer.timeTaken} seconds`}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="pt-4 border-t border-gray-300"></td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center mt-10">
          <Button onClick={handleBackToHome}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
