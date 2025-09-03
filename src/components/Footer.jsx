// import React from 'react'

// const Footer = () => {
//   return (
//     <footer id="contact" class="bg-slate-900 py-12 border-t border-slate-800">
//         <div class="max-w-7xl mx-auto px-6">
//             <div class="grid md:grid-cols-4 gap-8">
//                 <div>
//                     <div class="flex items-center space-x-2 mb-4">
//                         <div class="w-8 h-8 bg-blue-500 rounded-lg shadow-neon-blue flex items-center justify-center">
//                             <span class="text-white font-bold text-sm">S</span>
//                         </div>
//                         <span class="text-xl font-bold text-shadow-neon text-white">SecureMoney</span>
//                     </div>
//                     <p class="text-slate-400">Securing transactions, building trust.</p>
//                 </div>
                
//                 <div>
//                     <h4 class="font-semibold mb-4 text-blue-400">Product</h4>
//                     <ul class="space-y-2 text-slate-400">
//                         <li><a href="#" class="hover:text-blue-400 transition-colors duration-300">How It Works</a></li>
//                         <li><a href="#" class="hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
//                         <li><a href="#" class="hover:text-blue-400 transition-colors duration-300">API Docs</a></li>
//                     </ul>
//                 </div>
                
//                 <div>
//                     <h4 class="font-semibold mb-4 text-blue-400">Company</h4>
//                     <ul class="space-y-2 text-slate-400">
//                         <li><a href="#" class="hover:text-blue-400 transition-colors duration-300">About</a></li>
//                         <li><a href="#" class="hover:text-blue-400 transition-colors duration-300">Careers</a></li>
//                         <li><a href="#" class="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
//                     </ul>
//                 </div>
                
//                 <div>
//                     <h4 class="font-semibold mb-4 text-blue-400">Legal</h4>
//                     <ul class="space-y-2 text-slate-400">
//                         <li><a href="#" class="hover:text-blue-400 transition-colors duration-300">Privacy</a></li>
//                         <li><a href="/policies" class="hover:text-blue-400 transition-colors duration-300">Terms</a></li>
//                         <li><a href="#" class="hover:text-blue-400 transition-colors duration-300">Security</a></li>
//                     </ul>
//                 </div>
//             </div>
            
//             <div class="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
//                 <p>&copy; 2024 SecureMoney. All rights reserved.</p>
//             </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer

import React, { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [modal, setModal] = useState(null);

  const closeModal = () => setModal(null);

  return (
    <>
      <footer id="contact" className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Branding */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg shadow-neon-blue flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-shadow-neon text-white">SecureMoney</span>
              </div>
              <p className="text-slate-400">Securing transactions, building trust.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => setModal("How It Works")} className="hover:text-blue-400 transition-colors">How It Works</button></li>
                <li><button onClick={() => setModal("Pricing")} className="hover:text-blue-400 transition-colors">Pricing</button></li>
                <li><button onClick={() => setModal("API Docs")} className="hover:text-blue-400 transition-colors">API Docs</button></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => setModal("About")} className="hover:text-blue-400 transition-colors">About</button></li>
                <li><button onClick={() => setModal("Careers")} className="hover:text-blue-400 transition-colors">Careers</button></li>
                <li><button onClick={() => setModal("Contact")} className="hover:text-blue-400 transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => setModal("Privacy")} className="hover:text-blue-400 transition-colors">Privacy</button></li>
                <li><button onClick={() => setModal("Terms")} className="hover:text-blue-400 transition-colors">Terms</button></li>
                <li><button onClick={() => setModal("Security")} className="hover:text-blue-400 transition-colors">Security</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 SecureMoney. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal Rendering */}
      <Modal isOpen={!!modal} onClose={closeModal} title={modal}>
        <p>
          {modal === "How It Works" && "Here’s how SecureMoney works to protect your payments..."}
          {modal === "Pricing" && "Our pricing is flexible depending on your usage..."}
          {modal === "API Docs" && "Explore our developer-friendly API documentation..."}
          {modal === "About" && "We are building the future of secure transactions..."}
          {modal === "Careers" && "Join our team and help secure digital payments globally..."}
          {modal === "Contact" && "Reach us at contact@securemoney.com..."}
          {modal === "Privacy" && "Our privacy policy ensures your data stays safe..."}
          {modal === "Terms" && "Read our terms and conditions carefully..."}
          {modal === "Security" && "Learn how we keep your transactions secure..."}
        </p>
      </Modal>
    </>
  );
};

export default Footer;
