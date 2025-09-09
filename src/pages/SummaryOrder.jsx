import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const SummaryOrder = () => {
    const [formData, setFormData] = useState({
        //     customername: "",
        //     amount: "",
        //     customerPhone: "",
        //     customerEmail: "",
        //     method: "",
        //     status: "",
        // });
        customername: "",
        amount: "",
        customerPhone: "",
        customerEmail: "",
        method: "securepay",
        currency: "INR",
        status: "PENDING",
    });

    const handleRazorpayPayment = async (orderData) => {
        try {

            if (!window.Razorpay) {
                toast.error("Razorpay SDK failed to load. Please refresh and try again.");
                return;
            }

            const { data } = await axios.post(`${backendUrl}/api/order/create-api-order`, orderData);

            if (data.success) {
                const options = {
                    key: data.key_id,
                    amount: data.amount,
                    currency: "inr",
                    name: "SecurePay",
                    description: "Your trusted payment partner",
                    image: "/logo.png",
                    order_id: data.order_id,
                    handler: async function (response) {
                        try {
                            // **Verify Payment with Backend**
                            const verifyRes = await axios.post(
                                `${backendUrl}/api/order/verify`,
                                { order_id: data.order_id, payment_id: response.razorpay_payment_id, signature: response.razorpay_signature }
                            );

                            if (verifyRes.data.success) {
                                toast.success("Payment successful! Redirecting...");

                                // navigate("/orders");
                            } else {
                                toast.error("Payment verification failed. Please try again.");
                            }
                        } catch (error) {
                            toast.error("Error verifying payment. Please contact support.");
                        }
                    },
                    prefill: {
                        name: formData.firstName + " " + formData.lastName,
                        email: formData.email,
                        contact: formData.phone,
                    },
                    theme: {
                        color: "#000", // Piaro's branding color
                    },
                };

                const razor = new window.Razorpay(options);
                razor.open();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Payment initialization failed. Please try again.");
        }
    };


    useEffect(() => {
        // Fetch merchant data
        const fetchData = async () => {
            try {
                const res = await axios.get(`${backendUrl}/api/order/summary`);
                if (res.data.success) {
                    setFormData(res.data);
                }
            } catch (err) {
                toast.error("Failed to load merchant data");
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950 px-4 py-6">
            <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Create Payment
                </h2>

                <form onSubmit={handleRazorpayPayment} className="space-y-5">
                    {/* Amount */}
                    <div>
                        <label className="block text-slate-300 mb-1 text-sm">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            //   onChange={handleChange}
                            disabled
                            //   placeholder="Enter amount"
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-slate-300 mb-1 text-sm">
                            Customer Phone
                        </label>
                        <input
                            type="text"
                            name="customerPhone"
                            value={formData.customerPhone}
                            //   onChange={handleChange}
                            disabled
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-slate-300 mb-1 text-sm">
                            Customer Email
                        </label>
                        <input
                            type="email"
                            name="customerEmail"
                            value={formData.customerEmail}
                            //   onChange={handleChange}
                            disabled
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Readonly Fields */}
                    <div className="grid grid-cols-2 gap-4 text-slate-400 text-sm">
                        <div>
                            <label className="block mb-1">Currency</label>
                            <input
                                type="text"
                                value={formData.currency}
                                disabled
                                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Method</label>
                            <input
                                type="text"
                                value={formData.method}
                                disabled
                                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 text-slate-300">Status</label>
                        <input
                            type="text"
                            value={formData.status}
                            disabled
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white shadow-neon-blue transition-all duration-300 hover:shadow-neon-blue-lg"
                    >
                        Create Payment
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SummaryOrder