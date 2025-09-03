import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Form = () => {
    return (
        <>
            <Navbar />
            <section id="home" className="bg-gradient-to-r from-blue-900 via-black to-blue-900 min-h-screen flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-16">

                    {/* Hero Content */}
                    <div className="text-white space-y-6 max-w-xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Your Money,<br />
                            <span className="text-blue-500">Secured Until</span><br />
                            <span className="text-blue-500">Delivery.</span>
                        </h1>
                        <p className="text-gray-300 text-lg">
                            Buy with confidence. Pay us, we hold the money, and release it only when your product is safely delivered. Complete fraud protection for online shopping.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-400 hover:shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6,0_0_30px_#3b82f6] rounded-xl font-semibold shadow-lg transition">
                                Start Secure Purchase
                            </button>
                            <button className="px-6 py-3 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-[0_0_20px_#3b82f6] rounded-xl font-semibold shadow-lg transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Floating Card */}
                    <div className="mt-12 md:mt-0 relative animate-float">
                        <div className="bg-gradient-to-br from-card-blue-start to-card-blue-end rounded-2xl shadow-2xl p-6 w-72 h-44 relative">
                            {/* Top Section */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-8 h-6 bg-yellow-400 rounded-sm"></div>
                                <div className="text-xs text-blue-200">SECURED</div>
                            </div>
                            {/* Bars */}

                            <div className="space-y-2">
                                <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                                <div className="h-2 bg-blue-400 rounded w-1/2"></div>
                            </div>

                            {/* Lock Icon */}
                            <div className="absolute -bottom-4 -right-4 bg-blue-600 p-3 rounded-full shadow-lg">
                                <svg
                                    width="32"
                                    height="32"
                                    fill="white"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-blue-900 via-black to-blue-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-400 mb-4">
                            Start Your Secure Purchase
                        </h2>
                        <p className="text-xl text-gray-300">
                            Fill out the form below to begin your protected transaction
                        </p>
                    </div>
                    {/* Form Container */}
                    <div className="bg-slate-800 rounded-2xl p-8 shadow-lg shadow-blue-500/20">
                        <form
                            className="space-y-6"
                            action="/orders/create"
                            method="post"
                        >
                            {/* Product Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Product Details
                                </label>
                                <input
                                    type="text"
                                    name="product"
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter product name or details"
                                    required
                                />
                            </div>

                            {/* Amount */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Amount (if needed to mention)
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="₹0.00"
                                    required
                                />
                            </div>

                            {/* Sender Info */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Sender Name
                                    </label>
                                    <input
                                        type="text"
                                        name="SenderClientName"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Sender full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Sender Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="SenderClientPhone"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Receiver Info */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Receiver Name
                                    </label>
                                    <input
                                        type="text"
                                        name="RecieverClientName"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Receiver full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Receiver Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="RecieverClientPhone"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold shadow-lg shadow-blue-500/50 hover:shadow-[0_0_20px_#3b82f6] transition-all duration-300"
                            >
                                Schedule My Meeting
                            </button>
                        </form>
                    </div>

                </div>
            </section>


            <Footer />

        </>
    )
}

export default Form