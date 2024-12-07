import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';

interface RegistrationFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    college: ''
  });
  const [showPayment, setShowPayment] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showPayment) {
      setShowPayment(true);
    } else {
      onSubmit(formData);
      setPaymentComplete(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (paymentComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-8"
      >
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
          <p>Thank you for registering. We'll send you the event details via email.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {!showPayment ? (
          <>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="college" className="block text-sm font-medium text-gray-700">
                College Name
              </label>
              <input
                type="text"
                id="college"
                name="college"
                required
                value={formData.college}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <QrCode className="w-48 h-48 mx-auto mb-4" />
              <p className="text-gray-600">Scan QR code to pay</p>
            </div>
            <div className="mb-6">
              <p className="text-lg font-semibold">- OR -</p>
            </div>
            <button
              type="button"
              onClick={() => window.open('upi://pay')}
              className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors mb-4"
            >
              Pay Now with UPI
            </button>
            <div className="mt-4">
              <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Payment Screenshot
              </label>
              <input
                type="file"
                id="screenshot"
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          {showPayment ? 'Complete Registration' : 'Proceed to Payment'}
        </button>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;