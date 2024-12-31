import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const { setTokenInLs } = useTheme();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");  // To display success/error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HANDLESUBMIT: ", user);
    try {
      const response = await fetch("http://localhost:1000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseJson = await response.json();
        console.log("Login Response:", responseJson);

        // Successful login, clear the form, set token, and navigate
        setuser({
          email: "",
          password: "",
        });
        setTokenInLs(responseJson.token); 
        setMessage("User logged in successfully!");  // Success message
        navigate("/");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);  // Display error from server
        console.log("Error Response:", errorData);
      }
    } catch (error) {
      console.log("FETCH ERROR: ", error);
      setMessage("An error occurred during login.");  // Generic error message
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section: Animated Image */}
      <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500">
        <img
          src="https://via.placeholder.com/500"
          alt="Animation"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Section: Form Fields */}
      <div className="md:w-1/2 flex items-center justify-center bg-white p-10">
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              name="email"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
            {message && <p className="text-red-500">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
