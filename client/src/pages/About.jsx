import { React, useEffect, useState } from "react";

const About = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.pexels.com/v1/',
          {
            headers: {
              Authorization: 'Client-ID YOUR_UNSPLASH_ACCESS_KEY', // Replace with your Unsplash access key
            },
          }
        );
        const data = await response.json();
        setImages(data.results); // Storing the fetched images in the state
        console.log(data);
      } catch (err) {
        console.log("Fetching API ERROR: ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col space-y-20 p-10">
      {/* Section 1: Image and Text */}
      <section className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={images.length ? images[0].urls.small : "https://via.placeholder.com/500"}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a dedicated team focused on delivering innovative and creative solutions to our customers. Our team is passionate about technology and strives to exceed expectations with every project.
          </p>
        </div>
      </section>

      {/* Section 2: Text and Animation */}
      <section className="flex flex-col md:flex-row-reverse items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Animated Image or Lottie */}
        <div className="md:w-1/2">
          <img
            src={images.length > 1 ? images[1].urls.small : "https://via.placeholder.com/500"}
            alt="Animation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to provide excellent service and unparalleled value. We constantly seek to improve and innovate, ensuring that our solutions meet the highest standards of quality and performance.
          </p>
        </div>
      </section>

      {/* Section 3: Animation with Text */}
      <section className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
          <p className="mt-4 text-lg text-gray-600">
            From web development to app creation, we cover a wide range of services. Our team specializes in building scalable, reliable solutions for our clients.
          </p>
        </div>
        {/* Animation (Replace with Lottie or Animation) */}
        <div className="md:w-1/2">
          <img
            src={images.length > 2 ? images[2].urls.small : "https://via.placeholder.com/500"}
            alt="What We Do Animation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
