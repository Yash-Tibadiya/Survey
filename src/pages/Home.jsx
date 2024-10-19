import "../App.css";
import Button from "../components/Button";
import heroImage from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="items-center justify-center">
      <div className="flex items-center justify-center mt-20">
        <img src={heroImage} alt="Hero" />
      </div>
      <div>
        <p className="text-[#FFDA2D] text-center text-3xl font-bold">
          Credit Card
        </p>
        <p className="text-[#FFDA2D] text-center text-3xl font-bold">
          Customer Satisfaction Survey
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p className="text-xl text-center text-white mr-28 ml-28">
          We value your feedback! At Gold Credit Card, we are dedicated to
          providing you with the best possible credit card experience. Your
          responses to this survey will help us understand what we&apos;re doing
          well and where we can improve. The survey should take about 5 minutes
          to complete. Thank you for your time and valuable input!
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button
          className="text-sm text-white p-14"
          onClick={() => navigate("/question1")}
        >
          Click to Start
        </Button>
      </div>
    </div>
  );
};

export default Home;
