import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring

const LandingPage = () => {
  const navigate = useNavigate();

  // Fade-in animation for the container
  const fadeInAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="w-screen min-h-screen flex flex-col justify-end p-4 bg-[#F7F8F9]">
      {/* Container with Fade-In Animation */}
      <animated.div style={fadeInAnimation} className="w-full max-w-md">
        {/* Heading and Paragraph */}
        <div className="text-left mb-8">
          <h1 className="text-2xl font-bold text-black mb-4 font-rubik">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 font-rubik">
            This is a simple and clean UI for your mobile app. Feel free to explore!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 items-stretch">
          {/* Create Account Button */}
          <button
            onClick={() => navigate("/CreateAccountPage")}
            style={{ backgroundColor: "#6C25FF" }}
            className="text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 font-rubik "
          >
            Create Account
          </button>

          {/* Login Button */}
          <button
            onClick={() => navigate("/LoginPage")}
            style={{ backgroundColor: "#6C25FF4B" }}
            className="text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 font-rubik"
          >
            Login
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default LandingPage;