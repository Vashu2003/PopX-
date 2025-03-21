import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    phone: "1478523698",
    email: "johndoe@example.com",
    password: "johndoe25",
    company: "Amazon",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (must be 10 digits)";
    }

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

  const handleCreateAccount = () => {
    if (validateForm()) {
      // Add account creation logic here (e.g., API call, validation)
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
      {/* Form Container */}
      <div className="w-full max-w-md h-[90vh] flex flex-col justify-between">
        {/* Form Content */}
        <div>
          {/* Heading */}
          <h1 className="text-2xl font-bold text-left text-gray-800 font-rubik">
            Create your
          </h1>
          <h1 className="text-2xl font-bold text-left text-gray-800 mb-6 font-rubik">
            PopX account
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-2 border-2 border-[#6C25FF] rounded-lg appearance-none focus:outline-none focus:border-[#6C25FF] peer bg-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-3 px-2 bg-[#F7F8F9] text-[#6C25FF] text-sm font-rubik"
              >
                Name <span className="text-red-500">*</span>
              </label>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder=" "
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-4 py-2 border-2 border-[#6C25FF] rounded-lg appearance-none focus:outline-none focus:border-[#6C25FF] peer bg-transparent"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 -top-3 px-2 bg-[#F7F8F9] text-[#6C25FF] text-sm font-rubik"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 border-2 border-[#6C25FF] rounded-lg appearance-none focus:outline-none focus:border-[#6C25FF] peer bg-transparent"
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
                className="block w-full px-4 py-2 border-2 border-[#6C25FF] rounded-lg appearance-none focus:outline-none focus:border-[#6C25FF] peer bg-transparent"
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

            {/* Company Name Input */}
            <div className="relative">
              <input
                type="text"
                id="company"
                name="company"
                placeholder=" "
                value={formData.company}
                onChange={handleChange}
                className="block w-full px-4 py-2 border-2 border-[#6C25FF] rounded-lg appearance-none focus:outline-none focus:border-[#6C25FF] peer bg-transparent"
              />
              <label
                htmlFor="company"
                className="absolute left-4 -top-3 px-2 bg-[#F7F8F9] text-[#6C25FF] text-sm font-rubik"
              >
                Company Name
              </label>
            </div>

            {/* Checkbox for Agency */}
            <div className="flex items-center">
              <div
                onClick={() => setIsAgency(!isAgency)}
                className={`h-5 w-5 rounded-full border-2 border-[#6C25FF] flex items-center justify-center cursor-pointer transition duration-200 ${
                  isAgency ? "bg-[#6C25FF]" : "bg-transparent"
                }`}
              >
                {/* Checkmark Icon */}
                {isAgency && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <label
                htmlFor="agency"
                className="ml-2 block text-sm text-gray-700 font-rubik"
              >
                Are you an agency?
              </label>
            </div>
          </form>
        </div>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={handleCreateAccount}
          style={{ backgroundColor: "#6C25FF" }}
          className="w-full text-white py-2 px-4 rounded-lg hover:opacity-90 transition duration-300 font-rubik"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccountPage;