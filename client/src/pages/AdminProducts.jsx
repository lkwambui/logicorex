import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { API_URL } from "../config/api";

export default function AdminProducts() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [productForm, setProductForm] = useState({ title: "", category: "", description: "" });
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/products`);
      if (res.ok) {
        setProducts(await res.json());
      } else {
        const data = await res.json();
        setError(data.message || "Failed to fetch products");
      }
    } catch (err) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading products...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <button
          className="bg-customdarkblue text-white px-4 py-2 rounded hover:bg-opacity-90"
          onClick={() => setShowProductModal(true)}
        >
          Add Product
        </button>
      </div>
            {/* Modal for creating a new product */}
            {showProductModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                    onClick={() => setShowProductModal(false)}
                  >
                    &times;
                  </button>
                  <h3 className="text-xl font-bold mb-4">Create Product</h3>
                  <form
                    onSubmit={async e => {
                      e.preventDefault();
                      try {
                        const adminToken = localStorage.getItem("adminToken");
                        const res = await fetch(`${API_URL}/products`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${adminToken}`,
                          },
                          body: JSON.stringify(productForm),
                        });
                        if (!res.ok) throw new Error((await res.json()).message || "Failed to create product");
                        toast.success("Product created successfully");
                        setShowProductModal(false);
                        setProductForm({ title: "", category: "", description: "" });
                        fetchProducts();
                      } catch (err) {
                        toast.error(err.message);
                      }
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Title"
                      className="w-full mb-3 px-3 py-2 border rounded"
                      value={productForm.title}
                      onChange={e => setProductForm({ ...productForm, title: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Category"
                      className="w-full mb-3 px-3 py-2 border rounded"
                      value={productForm.category}
                      onChange={e => setProductForm({ ...productForm, category: e.target.value })}
                      required
                    />
                    <textarea
                      placeholder="Description"
                      className="w-full mb-3 px-3 py-2 border rounded"
                      value={productForm.description}
                      onChange={e => setProductForm({ ...productForm, description: e.target.value })}
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
        placeholder="Search products"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="px-3 py-2 border rounded mb-4"
        style={{ minWidth: 200 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products
            .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <div key={product._id} className="bg-white p-6 rounded-lg shadow border flex flex-col justify-between hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{product.category}</p>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                {/* CRUD Buttons */}
                <div className="flex space-x-2 mt-auto">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    onClick={() => {
                      setEditProduct(product);
                      setShowEditModal(true);
                    }}
                  >
                    Edit
                  </button>
                        {/* Modal for editing a product */}
                        {showEditModal && editProduct && (
                          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                              <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                                onClick={() => setShowEditModal(false)}
                              >
                                &times;
                              </button>
                              <h3 className="text-xl font-bold mb-4">Edit Product</h3>
                              <form
                                onSubmit={async e => {
                                  e.preventDefault();
                                  try {
                                    const adminToken = localStorage.getItem("adminToken");
                                    const res = await fetch(`${API_URL}/products/${editProduct._id}`, {
                                      method: "PUT",
                                      headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${adminToken}`,
                                      },
                                      body: JSON.stringify(editProduct),
                                    });
                                    if (!res.ok) throw new Error((await res.json()).message || "Failed to update product");
                                    toast.success("Product updated successfully");
                                    setShowEditModal(false);
                                    setEditProduct(null);
                                    fetchProducts();
                                  } catch (err) {
                                    toast.error(err.message);
                                  }
                                }}
                              >
                                <input
                                  type="text"
                                  placeholder="Title"
                                  className="w-full mb-3 px-3 py-2 border rounded"
                                  value={editProduct.title}
                                  onChange={e => setEditProduct({ ...editProduct, title: e.target.value })}
                                  required
                                />
                                <input
                                  type="text"
                                  placeholder="Category"
                                  className="w-full mb-3 px-3 py-2 border rounded"
                                  value={editProduct.category}
                                  onChange={e => setEditProduct({ ...editProduct, category: e.target.value })}
                                  required
                                />
                                <textarea
                                  placeholder="Description"
                                  className="w-full mb-3 px-3 py-2 border rounded"
                                  value={editProduct.description}
                                  onChange={e => setEditProduct({ ...editProduct, description: e.target.value })}
                                  required
                                />
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
                      if (window.confirm("Are you sure you want to delete this product?")) {
                        try {
                          const adminToken = localStorage.getItem("adminToken");
                          const res = await fetch(`${API_URL}/products/${product._id}`, {
                            method: "DELETE",
                            headers: { Authorization: `Bearer ${adminToken}` },
                          });
                          if (!res.ok) throw new Error((await res.json()).message || "Failed to delete product");
                          toast.success("Product deleted successfully");
                          fetchProducts();
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
          <p className="text-gray-600">No products yet.</p>
        )}
      </div>
    </div>
  );
}
