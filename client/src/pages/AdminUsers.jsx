import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { API_URL } from "../config/api";

export default function AdminUsers() {
  const [showUserModal, setShowUserModal] = useState(false);
  const [userForm, setUserForm] = useState({ name: "", email: "", phone: "" });
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // TODO: Replace with real API endpoint
      const res = await fetch(`${API_URL}/users`);
      if (res.ok) setUsers(await res.json());
    } catch (err) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Users</h2>
        <button
          className="bg-customdarkblue text-white px-4 py-2 rounded hover:bg-opacity-90"
          onClick={() => setShowUserModal(true)}
        >
          Add User
        </button>
      </div>
            {/* Modal for creating a new user */}
            {showUserModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                    onClick={() => setShowUserModal(false)}
                  >
                    &times;
                  </button>
                  <h3 className="text-xl font-bold mb-4">Create User</h3>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      setShowUserModal(false);
                      setUserForm({ name: "", email: "", phone: "" });
                      toast.success("User created (demo only)");
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full mb-3 px-3 py-2 border rounded"
                      value={userForm.name}
                      onChange={e => setUserForm({ ...userForm, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full mb-3 px-3 py-2 border rounded"
                      value={userForm.email}
                      onChange={e => setUserForm({ ...userForm, email: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full mb-3 px-3 py-2 border rounded"
                      value={userForm.phone}
                      onChange={e => setUserForm({ ...userForm, phone: e.target.value })}
                      required
                    />
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
        placeholder="Search users"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="px-3 py-2 border rounded mb-4"
        style={{ minWidth: 200 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users
            .filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))
            .map((user) => (
              <div key={user._id} className="bg-white p-6 rounded-lg shadow border flex flex-col justify-between hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">{user.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{user.email}</p>
                <p className="text-sm text-gray-600 mb-3">{user.phone}</p>
                {/* CRUD Buttons */}
                <div className="flex space-x-2 mt-auto">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">Edit</button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this user?")) {
                        toast.success("User deleted (demo only)");
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
        ) : (
          <p className="text-gray-600">No users yet.</p>
        )}
      </div>
    </div>
  );
}
