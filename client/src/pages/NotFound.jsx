import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-customdarkblue">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="bg-customdarkblue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 font-medium"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="border border-customdarkblue text-customdarkblue px-6 py-3 rounded-lg hover:bg-gray-50 font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
