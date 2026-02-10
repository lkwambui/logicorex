import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function PaymentPage() {
  const [method, setMethod] = useState("mpesa");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reference, setReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(null);
  const [bankInfo, setBankInfo] = useState(null);
  const navigate = useNavigate();

  const fetchPaymentMethods = async () => {
    const res = await fetch(`${API_URL}/payments/methods`);
    const info = await res.json();
    setBankInfo(info.bank);
  };

  useEffect(() => {
    // Check if user is logged in
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      // Redirect to login if not authenticated
      navigate("/login");
      return;
    }
    fetchPaymentMethods();
  }, [navigate]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (method === "mpesa") {
        const res = await fetch(`${API_URL}/payments/mpesa/stk-push`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            phone,
            reference,
            customerEmail: email,
          }),
        });
        const result = await res.json();
        setData(result);
      } else {
        await fetchPaymentMethods();
        const res = await fetch(`${API_URL}/payments/bank-transfer`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            reference,
            customerEmail: email,
          }),
        });
        const result = await res.json();
        setData(result);
      }
      setSuccess(true);
    } catch (err) {
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-customdarkblue mb-6">
          Payment Options
        </h1>

        {!success ? (
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <div className="flex gap-4">
                {["mpesa", "bank-transfer"].map((m) => (
                  <label key={m} className="flex items-center">
                    <input
                      type="radio"
                      name="method"
                      value={m}
                      checked={method === m}
                      onChange={(e) => setMethod(e.target.value)}
                      className="mr-2"
                    />
                    <span className="capitalize">
                      {m === "mpesa" ? "M-Pesa" : "Bank Transfer"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount (KES)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            {method === "mpesa" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="254XXXXXXXXX"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reference (optional)
              </label>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-customdarkblue hover:bg-customlightblue text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h2 className="font-semibold text-green-800 mb-2">
                {method === "mpesa"
                  ? "M-Pesa Request Sent!"
                  : "Bank Transfer Details"}
              </h2>
              {method === "mpesa" ? (
                <p className="text-green-700">
                  Complete the payment on your phone. You'll receive a prompt to
                  enter your M-Pesa PIN.
                </p>
              ) : data?.instructions ? (
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <strong>Bank:</strong> {data.instructions.bankName}
                  </p>
                  <p>
                    <strong>Account Name:</strong>{" "}
                    {data.instructions.accountName}
                  </p>
                  <p>
                    <strong>Account Number:</strong>{" "}
                    {data.instructions.accountNumber}
                  </p>
                  {data.instructions.swiftCode && (
                    <p>
                      <strong>Swift Code:</strong> {data.instructions.swiftCode}
                    </p>
                  )}
                  <p>
                    <strong>Reference:</strong> {data.instructions.reference}
                  </p>
                </div>
              ) : null}
            </div>

            <button
              onClick={() => {
                setSuccess(false);
                setData(null);
              }}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-medium"
            >
              Make Another Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
