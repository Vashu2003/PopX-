import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring

const AccountPage = () => {
  const navigate = useNavigate();

  // Random profile image URL (you can replace this with a dynamic image)
  const profileImage = "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg";

  // Fade-in animation for the profile container
  const fadeInAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#F7F8F9]">
      {/* Profile Container with Fade-In Animation */}
      <animated.div style={fadeInAnimation} className="w-full max-w-md h-[95vh] flex flex-col justify-between">
        {/* Profile Content */}
        <div>
          {/* Account Settings Header */}
          <div className="w-full max-w-md text-black text-left text-xl font-rubik font-bold bg-white border-gray-400 p-4">
            Account Settings
          </div>

          {/* Profile Section */}
          <div className="flex items-center p-4">
            {/* Circular Profile Photo with Camera Icon */}
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              {/* Camera Icon */}
              <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Name and Email */}
            <div className="mx-4">
              <h2 className="text-2xl font-bold text-gray-800 font-rubik">
                John Doe
              </h2>
              <p className="text-gray-600 font-rubik">johndoe@example.com</p>
            </div>
          </div>

          {/* Paragraph */}
          <p className="mt-6 text-gray-700 font-rubik p-4">
            Welcome to your account page! Here, you can manage your profile,
            settings, and more. Feel free to explore and customize your
            experience.
          </p>
        </div>

        {/* Logout Button with Hover Animation */}
        <button
          type="button"
          onClick={() => navigate("/")}
          style={{ backgroundColor: "#6C25FF" }}
          className="w-auto text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 font-rubik m-4"
        >
          Logout
        </button>
      </animated.div>
    </div>
  );
};

export default AccountPage;