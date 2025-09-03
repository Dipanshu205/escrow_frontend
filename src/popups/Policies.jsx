import React, { useState } from "react";
import Modal from "../components/Modal";

const Policies = () => {
  const [open, setOpen] = useState(true); // auto open when user lands

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Policies</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our policies page. Please read carefully before using our
          services.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>All transactions are secured and verified.</li>
          <li>Refunds will be processed within 5–7 business days.</li>
          <li>Data privacy is guaranteed under our compliance policy.</li>
          <li>Merchants must follow compliance checks before payouts.</li>
        </ul>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Policies;
