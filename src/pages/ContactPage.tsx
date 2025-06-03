import React, { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Order NutriBun</h1>
            <p className="text-lg text-green-100">
              Thank you for supporting healthy nutrition. Here's how to place your order and make a payment.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-stone-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-800 mb-6">💰 NutriBun Pricing</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>1 pcs = 13K</li>
              <li>2 pcs = 25K</li>
              <li>3 pcs = 38K (25K + 13K)</li>
              <li><strong>Multiples apply:</strong> Every 2 pcs = 25K, remaining pcs = 13K each</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-800 mb-4">📍 Order Form</h2>
            <p className="text-gray-700 mb-6">
              Please fill out the Pre-Order form at:
              <br />
              <a
                href="https://bit.ly/PREORDERNUTRIBUN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline"
              >
                https://bit.ly/PREORDERNUTRIBUN
              </a>
            </p>

            <h2 className="text-2xl font-bold text-green-800 mb-4">💳 Payment Information</h2>
            <div className="space-y-4 text-gray-700 mb-6">
              <div>
                <strong>Bank Mandiri</strong><br />
                Name: Ahmad Zayn Usman<br />
                Acc: 1670004746904
              </div>
              <div>
                <strong>Gopay / Dana / ShopeePay / OVO</strong><br />
                No: 0812-8760-5216<br />
                a.n Ahmad Zayn Usman
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-800 mb-4">📞 Questions?</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-600 mr-3" />
                <span>WhatsApp: Wisnu (0878-7912-2035)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-600 mr-3" />
                <span>Instagram: <a href="https://instagram.com/nutribun_id" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">@nutribun_id</a></span>
              </div>
            </div>

            <p className="mt-8 text-green-800 font-semibold">
              Thank you for your support!<br />
              Stay healthy, <br />
              <span className="text-green-700">NutriBun Team 💚</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
