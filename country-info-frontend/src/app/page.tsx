import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
        Welcome to Country Info App
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 max-w-2xl">
        Find detailed information about countries, including neighboring
        countries, population, and much more
      </p>
      <Link
        href="/countries"
        className="px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-4 bg-blue-500 text-white text-sm sm:text-base md:text-lg lg:text-xl rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Go to the list of countries
      </Link>
    </div>
  );
};

export default HomePage;
