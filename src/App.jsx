import Question1 from "./pages/question1";
import Question2 from "./pages/question2";
import Question3 from "./pages/question3";
import ThankYouPage from "./pages/ThankYouPage";
import ResultsPage from "./pages/ResultsPage";
import { Routes, Route } from "react-router-dom";

import { SurveyProvider } from "./context/SurveyContext";
import Home from "./pages/Home";

function App() {
  return (
    <SurveyProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </SurveyProvider>
  );
}

export default App;
