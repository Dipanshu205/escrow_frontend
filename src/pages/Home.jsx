import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-slate-900 text-white overflow-x-hidden font-inter">
      <Navbar />

      <section className="gradient-bg min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Money,{" "}
                <span className="text-shadow-neon text-blue-400">Secured</span>{" "}
                Until Delivery
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Revolutionary escrow service that protects your payments until
                you receive your products. Shop with confidence, pay with
                security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-neon-blue transition-all duration-300 hover:shadow-neon-blue-lg animate-pulse-glow">
                  Start Secure Shopping
                </button>
                <button className="border border-slate-600 hover:border-blue-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-neon-blue">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Icon */}
            <div className="flex justify-center">
              {/* <div className="relative animate-float">
                <div className="w-80 h-80 bg-slate-800 rounded-3xl shadow-neon-blue flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                  </svg>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full shadow-neon-blue flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10A2,2 0 0,1 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                    </svg>
                  </div>
                </div>
              </div> */}
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
            
          </div>
        </div>
      </section>
        {/* How It Works Section */}
    <section id="how-it-works" class="py-20 bg-slate-800">
  <div class="max-w-7xl mx-auto px-6">

    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4 text-blue-400">How It Works</h2>
      <p class="text-xl text-slate-300">Simple, secure, and transparent process</p>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-7 gap-8 items-center">

      <div class="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover md:col-span-1">
        <div class="w-20 h-20 bg-blue-500 rounded-full shadow-neon-blue mx-auto mb-6 flex items-center justify-center">
          <span class="text-2xl font-bold">1</span>
        </div>
        <h3 class="text-xl font-semibold mb-4">Fill the Form</h3>
        <p class="text-slate-300">Provide product details and seller information for your purchase</p>
      </div>


      <div class="hidden md:flex md:col-span-1 items-center justify-center">
        <div class="w-full h-1 step-line rounded-full"></div>
      </div>


      <div class="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover md:col-span-1">
        <div class="w-20 h-20 bg-blue-500 rounded-full shadow-neon-blue mx-auto mb-6 flex items-center justify-center">
          <span class="text-2xl font-bold">2</span>
        </div>
        <h3 class="text-xl font-semibold mb-4">We Purchase for You</h3>
        <p class="text-slate-300">We securely hold your payment and make the purchase on your behalf</p>
      </div>


      <div class="hidden md:flex md:col-span-1 items-center justify-center">
        <div class="w-full h-1 step-line rounded-full"></div>
      </div>


      <div class="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover md:col-span-1">
        <div class="w-20 h-20 bg-blue-500 rounded-full shadow-neon-blue mx-auto mb-6 flex items-center justify-center">
          <span class="text-2xl font-bold">3</span>
        </div>
        <h3 class="text-xl font-semibold mb-4">Product Delivered</h3>
        <p class="text-slate-300">Receive and verify your product before payment is released</p>
      </div>


      <div class="hidden md:flex md:col-span-1 items-center justify-center">
        <div class="w-full h-1 step-line rounded-full"></div>
      </div>


      <div class="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover md:col-span-1">
        <div class="w-20 h-20 bg-green-500 rounded-full shadow-neon-blue mx-auto mb-6 flex items-center justify-center">
          <span class="text-2xl font-bold">4</span>
        </div>
        <h3 class="text-xl font-semibold mb-4">Seller Gets Paid</h3>
        <p class="text-slate-300">Payment is released to seller only after successful delivery</p>
      </div>
    </div>
  </div>
</section>


    {/* <!-- Checkout Mockup Section --> */}
    <section class="py-20 gradient-bg">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-shadow-neon text-blue-400">Seamless Integration</h2>
                <p class="text-xl text-slate-300">Easy checkout experience for your customers</p>
            </div>
            
            <div class="max-w-md mx-auto">
                <div class="bg-slate-800 rounded-2xl p-8 shadow-neon-blue transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
                    <div class="text-center mb-6">
                        <h3 class="text-2xl font-bold mb-2">Checkout Example</h3>
                        <p class="text-slate-300">Complete your secure purchase</p>
                    </div>
                    
                    <div class="space-y-4 mb-6">
                        <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-semibold">iPhone 15 Pro</span>
                                <span class="text-blue-400 font-bold">$999.00</span>
                            </div>
                            <p class="text-sm text-slate-400">Seller: TechStore Inc.</p>
                        </div>
                        
                        <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                            <div class="flex justify-between items-center">
                                <span>Org. Fee</span>
                                <span class="text-green-400 font-semibold">$1.99</span>
                            </div>
                        </div>
                        
                        <div class="border-t border-slate-600 pt-4">
                            <div class="flex justify-between items-center font-bold text-lg">
                                <span>Total</span>
                                <span class="text-blue-400">$1,000.99</span>
                            </div>
                        </div>
                    </div>
                    
                    <button class="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-lg font-semibold text-lg shadow-neon-blue transition-all duration-300 hover:shadow-neon-blue-lg">
                        Pay via SecureMoney
                    </button>
                    
                    <div class="flex items-center justify-center mt-4 text-sm text-slate-400">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10A2,2 0 0,1 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                        </svg>
                        Secured by 256-bit encryption
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Features Section --> */}
    <section id="features" class="py-20 bg-slate-800">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-shadow-neon text-blue-400">Why Choose SecureMoney</h2>
                <p class="text-xl text-slate-300">Built for security, designed for trust</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div class="bg-slate-700 rounded-2xl p-8 border border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:border-blue-500">
                    <div class="w-16 h-16 bg-blue-500 rounded-xl shadow-neon-blue mb-6 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Trust & Safety</h3>
                    <p class="text-slate-300">Bank-level security with multi-layer fraud detection and buyer protection</p>
                </div>
                

                <div class="bg-slate-700 rounded-2xl p-8 border border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:border-green-500">
                    <div class="w-16 h-16 bg-green-500 rounded-xl shadow-neon-blue mb-6 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,6C10.76,6 9.76,7 9.76,8.24V9.76C9.1,9.76 8.5,10.36 8.5,11.76V15.76C8.5,17.16 9.1,17.76 9.76,17.76H14.24C14.9,17.76 15.5,17.16 15.5,15.76V11.76C15.5,10.36 14.9,9.76 14.24,9.76V8.24C14.24,7 13.24,6 12,6M12,7.2C12.66,7.2 13.04,7.58 13.04,8.24V9.76H10.96V8.24C10.96,7.58 11.34,7.2 12,7.2Z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Fraud Protection</h3>
                    <p class="text-slate-300">Advanced AI-powered fraud detection protects every transaction</p>
                </div>
                
                {/* <!-- Easy Integration --> */}
                <div class="bg-slate-700 rounded-2xl p-8 border border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:border-purple-500">
                    <div class="w-16 h-16 bg-purple-500 rounded-xl shadow-neon-blue mb-6 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Easy Integration</h3>
                    <p class="text-slate-300">Simple API integration with comprehensive documentation and support</p>
                </div>
                
                {/* <!-- Nationwide Coverage --> */}
                <div class="bg-slate-700 rounded-2xl p-8 border border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:border-orange-500">
                    <div class="w-16 h-16 bg-orange-500 rounded-xl shadow-neon-blue mb-6 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H9V3H15V9H21M7,3V9C7,10.1 7.9,11 9,11H15C16.1,11 17,10.1 17,9V7H19V9C19,11.2 17.2,13 15,13H9C6.8,13 5,11.2 5,9V3H7M12,13.5A2.5,2.5 0 0,1 14.5,16A2.5,2.5 0 0,1 12,18.5A2.5,2.5 0 0,1 9.5,16A2.5,2.5 0 0,1 12,13.5M12,20L16,22V21L12,19L8,21V22L12,20Z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Nationwide Coverage</h3>
                    <p class="text-slate-300">Available across all 50 states with local support and compliance</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- CTA Section --> */}
    <section class="py-20 gradient-bg">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-6 text-shadow-neon text-blue-400">Ready to Secure Your Transactions?</h2>
            <p class="text-xl text-slate-300 mb-8">Join thousands of businesses already using SecureMoney to protect their customers</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-neon-blue transition-all duration-300 hover:shadow-neon-blue-lg animate-pulse-glow">
                    Get Started Today
                </button>
                <button class="border border-slate-600 hover:border-blue-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-neon-blue">
                    Schedule Demo
                </button>
            </div>
        </div>
    </section>
    <Footer />

    </div>
  )
}

export default Home
