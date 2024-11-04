const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section: Image and Video */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="space-y-4 text-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Sample Image"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <video
            aria-controls="video"
            className="w-full h-64 rounded-lg shadow-lg  "
          >
            <source src="sample-video.mp4" type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="md:w-1/2 flex items-center justify-center bg-white p-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
          <p className="text-lg text-gray-600">
            This section contains some informational text about the platform or site. You can add details here to introduce visitors to your content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
