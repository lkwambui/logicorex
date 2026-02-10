import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const CATEGORY_NAMES = {
  "web-design": "Web Design & Development",
  "uiux": "UI/UX Design",
  "frontend": "Frontend Web Development",
  "react": "React for Beginners",
  "graphics": "Graphics Design",
  "full-stack": "Full Stack Web Development",
};

export default function AcademyPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category");
  const coursesPerPage = 9;

  useEffect(() => {
    // Check if user is logged in
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      // Redirect to login if not authenticated
      navigate("/login");
      return;
    }
    fetchCourses();
  }, [navigate, category]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const fetchCourses = async () => {
    try {
      let url = `${API_URL}/courses?published=true`;
      if (category) {
        url += `&category=${category}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading courses...</div>
      </div>
    );
  }

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirst, indexOfLast);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-customdarkblue mb-4">
            {category ? CATEGORY_NAMES[category] : "LogicoreX Academy"}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master design, development, and technology with hands-on courses taught by industry experts.
          </p>
          {category && (
            <button
              onClick={() => navigate("/academy")}
              className="mt-4 text-customdarkblue hover:underline font-medium"
            >
              ← View All Courses
            </button>
          )}
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No courses available yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCourses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {course.thumbnail && (
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-customdarkblue bg-blue-50 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    {course.duration && (
                      <span className="text-xs text-gray-600">
                        {course.duration}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-customdarkblue">
                      {course.price === 0 ? "Free" : `KES ${course.price}`}
                    </span>
                    <Link
                      to={`/academy/courses/${course.slug}`}
                      className="bg-customdarkblue hover:bg-customlightblue text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 rounded border bg-white text-gray-800 hover:bg-gray-100 transition"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded border transition ${
                  currentPage === i + 1
                    ? "bg-customdarkblue text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="px-4 py-2 rounded border bg-white text-gray-800 hover:bg-gray-100 transition"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
