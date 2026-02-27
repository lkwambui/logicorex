import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, BookOpen } from "lucide-react";

import { API_URL } from "../config/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      navigate("/login");
      return;
    }

    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    fetchEnrollments(userToken);
  }, [navigate]);

  const fetchEnrollments = async (token) => {
    try {
      const response = await fetch(`${API_URL}/enrollments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setEnrollments(data);
      }
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-customdarkblue mb-6">
            My Profile
          </h1>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-customdarkblue" />
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-semibold">{user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-customdarkblue" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
            </div>

            {user.phone && (
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-customdarkblue" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold">{user.phone}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-customdarkblue" />
            <h2 className="text-2xl font-bold text-customdarkblue">
              My Enrollments
            </h2>
          </div>

          {enrollments.length > 0 ? (
            <div className="grid gap-4">
              {enrollments.map((enrollment) => (
                <div
                  key={enrollment._id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-1">
                    {enrollment.course?.title || "Course"}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Enrolled: {new Date(enrollment.createdAt).toLocaleDateString()}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      enrollment.paymentStatus === "completed"
                        ? "bg-green-100 text-green-700"
                        : enrollment.paymentStatus === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Payment: {enrollment.paymentStatus}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-600">
              <p className="mb-4">You haven't enrolled in any courses yet.</p>
              <button
                onClick={() => navigate("/academy")}
                className="bg-customdarkblue text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
              >
                Browse Courses
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
