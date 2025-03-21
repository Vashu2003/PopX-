import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "johndoe@example.com",
    password: "johndoe25",
  });
  const [errors, setErrors] = useState({});

  // Fade-in animation for the form container
  const fadeInAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
  });

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Add login logic here (e.g., API call, validation)
      // For now, just redirect to the Account Page
      navigate("/AccountPage");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-[#F7F8F9]">
      {/* Form Container with Fade-In Animation */}
      <animated.div style={fadeInAnimation} className="w-full max-w-md h-[90vh] flex flex-col justify-between">
        {/* Form Content */}
        <div className="mt-10">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-left text-gray-800 font-rubik">
            Signin to your
          </h1>
          <h1 className="text-2xl font-bold text-left text-gray-800 font-rubik">
            PopX account
          </h1>
          <p className="text-gray-500 font-rubik mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam velit
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 border-2 border-[#6C25FF] rounded-lg appearance-none focus:outline-none focus:border-[#6C25FF] peer bg-transparent transition-all duration-300 focus:scale-105"
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-3 px-2 bg-[#F7F8F9] text-[#6C25FF] text-sm font-rubik"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 py-2 border-2 border-[#6C25FF] rounded-lg appearance-none focus:outline-none focus:border-[#6C25FF] peer bg-transparent transition-all duration-300 focus:scale-105"
              />
              <label
                htmlFor="password"
                className="absolute left-4 -top-3 px-2 bg-[#F7F8F9] text-[#6C25FF] text-sm font-rubik"
              >
                Password <span className="text-red-500">*</span>
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </form>
        </div>

        {/* Login Button with Hover Animation */}
        <button
          type="button"
          onClick={handleLogin}
          style={{ backgroundColor: "#6C25FF" }}
          className="w-full text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 font-rubik"
        >
          Login
        </button>
      </animated.div>
    </div>
  );
};

export default LoginPage;