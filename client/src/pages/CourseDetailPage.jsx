import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { API_URL } from "../config/api";

export default function CourseDetailPage() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      // Redirect to login if not authenticated
      navigate("/login");
      return;
    }
    fetchCourse();
  }, [slug, navigate]);

  const fetchCourse = async () => {
    try {
      const response = await fetch(`${API_URL}/courses/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setCourse(data);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = () => {
    navigate("/payment", { state: { course } });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading course...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course not found</h2>
          <button
            onClick={() => navigate("/academy")}
            className="text-customdarkblue hover:underline"
          >
            Back to courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={course.thumbnail || require('../assets/web/project_2.png')}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-customdarkblue bg-blue-50 px-4 py-2 rounded-full">
              {course.level}
            </span>
            {course.duration && (
              <span className="text-sm text-gray-600">⏱ {course.duration}</span>
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>

          <p className="text-lg text-gray-700 mb-8">{course.description}</p>

          <div className="border-t border-gray-200 pt-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <p className="text-3xl font-bold text-customdarkblue">
                  {course.price === 0 ? "Free" : `KES ${course.price}`}
                </p>
              </div>
              <button
                onClick={handleEnroll}
                className="bg-customdarkblue hover:bg-customlightblue text-white px-8 py-3 rounded-lg font-semibold transition text-lg"
              >
                {course.price === 0 ? "Enroll Now" : "Purchase Course"}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What you'll learn
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Hands-on projects and exercises</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Industry best practices and techniques</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Certificate of completion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
