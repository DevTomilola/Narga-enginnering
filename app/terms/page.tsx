export default function TermsConditions() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Legal terms governing your use of our services and website
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using the services of Narga Engineering Private Limited ("Company"), 
              you agree to be bound by these Terms & Conditions. If you disagree with any part, 
              you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              Narga Engineering provides automotive R&D manufacturing services, including:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Automotive & eMobility Solutions</li>
              <li>Embedded Software Development Services</li>
              <li>Precision engineering and manufacturing</li>
              <li>Semiconductor and electronics solutions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All intellectual property rights in our products, services, and website content are 
              owned by Narga Engineering Private Limited. This includes but is not limited to:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Patents, trademarks, and registered designs</li>
              <li>Technical documentation and specifications</li>
              <li>Software code and algorithms</li>
              <li>Business processes and methodologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Quality Assurance</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 font-medium">ISO 9001:2015 Certified</p>
              <p className="text-green-700 text-sm">
                Our quality management system is certified to ISO 9001:2015 standards, 
                ensuring consistent delivery of high-quality products and services.
              </p>
            </div>
            <p className="text-gray-700">
              All our services are delivered in accordance with our quality management system 
              and industry best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700">
              Narga Engineering shall not be liable for any indirect, incidental, special, 
              consequential or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed and construed in accordance with the laws of India, 
              without regard to its conflict of law provisions. Any disputes shall be subject to 
              the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Company Information</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 font-medium">Narga Engineering Private Limited</p>
              <p className="text-gray-600">Private Limited Company</p>
              <p className="text-gray-600">Registered: 2024</p>
              <p className="text-gray-600">D-U-N-S® Number: 64-508-1265</p>
              <p className="text-gray-600">#409, Nandanavanam Apartment, Silicon Ridge</p>
              <p className="text-gray-600">Hyderabad, Telangana, India - 500030</p>
            </div>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().getFullYear()} | Narga Engineering Private Limited
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}