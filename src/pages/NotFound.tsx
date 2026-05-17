import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Check if user came from within the app
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <Helmet>
        <title>Page Not Found — Skawsh</title>
        <meta name="description" content="The page you're looking for doesn't exist on Skawsh." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center max-w-md mx-auto">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-lg md:text-xl text-gray-600">Oops! Page not found</p>
        <button 
          onClick={handleBackClick}
          className="inline-block bg-skawsh-blue text-white px-6 py-3 rounded-lg hover:bg-skawsh-blue/90 transition-colors font-medium"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
