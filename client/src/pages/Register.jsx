import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
    try{
      const response = await fetch('http://localhost:1000/api/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      console.log("Response:", response);
      if(response.ok){
        console.log("User registered successfully");
        setFormData({
          username: "",
          email: "",
          password: "",
          phone: ""
        
        })
        navigate("/login");
      }
      else{
        console.log("Error in registering user");
      }
    }
    catch(err)
    {
      console.log("Error in submitting registration form:", err);
    }
    
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section: Animated Image */}
      <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <img
          src="/images/registration-page.webp"
          alt="Animation"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Section: Form Fields */}
      <div className="md:w-1/2 flex items-center justify-center bg-white p-10">
        <form className="w-full max-w-md space-y-4" onSubmit={submitHandler}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Register</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              name="username"
              value={formData.username} // Corrected
              onChange={handleChange}    // Added onChange handler
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              name="email"
              value={formData.email}     // Corrected
              onChange={handleChange}    // Added onChange handler
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              name="password"
              value={formData.password}  // Corrected
              onChange={handleChange}    // Added onChange handler
              required
            />
            <input
              type="number"
              placeholder="phone"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              name="phone"
              value={formData.phone}  // Corrected
              onChange={handleChange}    // Added onChange handler
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
