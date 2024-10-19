import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Checked from "../assets/Checked.png";

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleViewResults = () => {
    navigate("/results");
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[700px] text-center">
        <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6">
          <img
            className="object-cover w-full h-full"
            src={Checked}
            alt="Checked"
          />
        </div>
        <h2 className="text-3xl font-extrabold">Thank You!</h2>
        <p className="mb-10 text-extra-small">Your answers have been sent.</p>
        <p className="mb-12 text-xl mx-15">
          Thank you for taking the time to complete this survey. Your feedback
          is invaluable to us and helps us serve you better.
        </p>

        <Button onClick={handleViewResults}>View Results</Button>
      </div>
    </div>
  );
};

export default ThankYouPage;
