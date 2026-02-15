import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function AdminCourses() {
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [courseForm, setCourseForm] = useState({
    title: "",
    slug: "",
    description: "",
    category: "web-design",
    price: "",
    duration: "",
    level: "",
    thumbnail: "",
    published: false,
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/courses`);
      if (res.ok) setCourses(await res.json());
    } catch (err) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses</h2>
        <button
          className="bg-customdarkblue text-white px-4 py-2 rounded hover:bg-opacity-90"
          onClick={() => setShowCourseModal(true)}
        >
          Add Course
        </button>
      </div>
      {/* Modal for creating a new course */}
      {showCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setShowCourseModal(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Create Course</h3>
            <form
              onSubmit={async e => {
                e.preventDefault();
                try {
                  const adminToken = localStorage.getItem("adminToken");
                  const res = await fetch(`${API_URL}/courses`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${adminToken}`,
                    },
                    body: JSON.stringify(courseForm),
                  });
                  if (!res.ok) throw new Error((await res.json()).message || "Failed to create course");
                  toast.success("Course created successfully");
                  setShowCourseModal(false);
                  setCourseForm({
                    title: "",
                    slug: "",
                    description: "",
                    category: "web-design",
                    price: "",
                    duration: "",
                    level: "",
                    thumbnail: "",
                    published: false,
                  });
                  fetchCourses();
                } catch (err) {
                  toast.error(err.message);
                }
              }}
            >
              <input
                type="text"
                placeholder="Title"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={courseForm.title}
                onChange={e => setCourseForm({ ...courseForm, title: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Slug (optional)"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={courseForm.slug}
                onChange={e => setCourseForm({ ...courseForm, slug: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={courseForm.description}
                onChange={e => setCourseForm({ ...courseForm, description: e.target.value })}
                required
              />
              <select
                className="w-full mb-3 px-3 py-2 border rounded"
                value={courseForm.category}
                onChange={e => setCourseForm({ ...courseForm, category: e.target.value })}
                required
              >
                <option value="web-design">Web Design</option>
                <option value="uiux">UI/UX</option>
                <option value="frontend">Frontend</option>
                <option value="react">React</option>
                <option value="graphics">Graphics</option>
                <option value="full-stack">Full Stack</option>
              </select>
              <input
                type="number"
                placeholder="Price"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={courseForm.price}
                onChange={e => setCourseForm({ ...courseForm, price: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Duration"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={courseForm.duration}
                onChange={e => setCourseForm({ ...courseForm, duration: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Level"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={courseForm.level}
                onChange={e => setCourseForm({ ...courseForm, level: e.target.value })}
              />
              <input
                type="text"
                placeholder="Thumbnail URL"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={courseForm.thumbnail}
                onChange={e => setCourseForm({ ...courseForm, thumbnail: e.target.value })}
              />
              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={courseForm.published}
                  onChange={e => setCourseForm({ ...courseForm, published: e.target.checked })}
                  className="mr-2"
                />
                Published
              </label>
              <button
                type="submit"
                className="w-full bg-customdarkblue text-white py-2 rounded hover:bg-customlightblue transition"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
      <input
        type="text"
        placeholder="Search courses"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="px-3 py-2 border rounded mb-4"
        style={{ minWidth: 200 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses
            .filter(course => course.title.toLowerCase().includes(search.toLowerCase()))
            .map((course) => (
              <div key={course._id} className="bg-white p-6 rounded-lg shadow border flex flex-col justify-between hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{course.category}</p>
                <p className="text-sm text-gray-600 mb-1">KES {course.price}</p>
                <p className="text-sm text-gray-600 mb-1">{course.duration}</p>
                <p className="text-sm text-gray-600 mb-1">{course.level}</p>
                <p className="text-sm text-gray-600 mb-1">{course.published ? "Published" : "Unpublished"}</p>
                {/* CRUD Buttons */}
                <div className="flex space-x-2 mt-auto">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    onClick={() => {
                      setEditCourse(course);
                      setShowEditModal(true);
                    }}
                  >
                    Edit
                  </button>
                  {/* Modal for editing a course */}
                  {showEditModal && editCourse && editCourse._id === course._id && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                        <button
                          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                          onClick={() => setShowEditModal(false)}
                        >
                          &times;
                        </button>
                        <h3 className="text-xl font-bold mb-4">Edit Course</h3>
                        <form
                          onSubmit={async e => {
                            e.preventDefault();
                            try {
                              const adminToken = localStorage.getItem("adminToken");
                              const res = await fetch(`${API_URL}/courses/${editCourse.slug}`, {
                                method: "PUT",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `Bearer ${adminToken}`,
                                },
                                body: JSON.stringify(editCourse),
                              });
                              if (!res.ok) throw new Error((await res.json()).message || "Failed to update course");
                              toast.success("Course updated successfully");
                              setShowEditModal(false);
                              setEditCourse(null);
                              fetchCourses();
                            } catch (err) {
                              toast.error(err.message);
                            }
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Title"
                            className="w-full mb-3 px-3 py-2 border rounded"
                            value={editCourse.title}
                            onChange={e => setEditCourse({ ...editCourse, title: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Slug (optional)"
                            className="w-full mb-3 px-3 py-2 border rounded"
                            value={editCourse.slug}
                            onChange={e => setEditCourse({ ...editCourse, slug: e.target.value })}
                          />
                          <textarea
                            placeholder="Description"
                            className="w-full mb-3 px-3 py-2 border rounded"
                            value={editCourse.description}
                            onChange={e => setEditCourse({ ...editCourse, description: e.target.value })}
                            required
                          />
                          <select
                            className="w-full mb-3 px-3 py-2 border rounded"
                            value={editCourse.category}
                            onChange={e => setEditCourse({ ...editCourse, category: e.target.value })}
                            required
                          >
                            <option value="web-design">Web Design</option>
                            <option value="uiux">UI/UX</option>
                            <option value="frontend">Frontend</option>
                            <option value="react">React</option>
                            <option value="graphics">Graphics</option>
                            <option value="full-stack">Full Stack</option>
                          </select>
                          <input
                            type="number"
                            placeholder="Price"
                            className="w-full mb-3 px-3 py-2 border rounded"
                            value={editCourse.price}
                            onChange={e => setEditCourse({ ...editCourse, price: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Duration"
                            className="w-full mb-3 px-3 py-2 border rounded"
                            value={editCourse.duration}
                            onChange={e => setEditCourse({ ...editCourse, duration: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Level"
                            className="w-full mb-3 px-3 py-2 border rounded"
                            value={editCourse.level}
                            onChange={e => setEditCourse({ ...editCourse, level: e.target.value })}
                          />
                          <input
                            type="text"
                            placeholder="Thumbnail URL"
                            className="w-full mb-3 px-3 py-2 border rounded"
                            value={editCourse.thumbnail}
                            onChange={e => setEditCourse({ ...editCourse, thumbnail: e.target.value })}
                          />
                          <label className="flex items-center mb-4">
                            <input
                              type="checkbox"
                              checked={editCourse.published}
                              onChange={e => setEditCourse({ ...editCourse, published: e.target.checked })}
                              className="mr-2"
                            />
                            Published
                          </label>
                          <button
                            type="submit"
                            className="w-full bg-customdarkblue text-white py-2 rounded hover:bg-customlightblue transition"
                          >
                            Update
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={async () => {
                      if (window.confirm("Are you sure you want to delete this course?")) {
                        try {
                          const adminToken = localStorage.getItem("adminToken");
                          const res = await fetch(`${API_URL}/courses/${course.slug}`, {
                            method: "DELETE",
                            headers: { Authorization: `Bearer ${adminToken}` },
                          });
                          if (!res.ok) throw new Error((await res.json()).message || "Failed to delete course");
                          toast.success("Course deleted successfully");
                          fetchCourses();
                        } catch (err) {
                          toast.error(err.message);
                        }
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
        ) : (
          <p className="text-gray-600">No courses yet.</p>
        )}
      </div>
    </div>
  );
}
