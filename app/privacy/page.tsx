export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How we protect and handle your personal information
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              At Narga Engineering Private Limited, we are committed to protecting your privacy. 
              We collect information that you provide directly to us, including:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Contact information (name, email address, phone number)</li>
              <li>Company information and job title</li>
              <li>Communication preferences</li>
              <li>Technical specifications and project requirements</li>
              <li>Website usage data through cookies and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Provide and maintain our automotive R&D and eMobility solutions</li>
              <li>Process your inquiries and provide customer support</li>
              <li>Send technical updates and service announcements</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations and industry standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your 
              personal data, including ISO 27001 certified security protocols.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">ISO 27001 Certified</p>
              <p className="text-blue-700 text-sm">
                Our information security management system is certified to ISO 27001 standards, 
                ensuring robust protection of your data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              data with trusted partners only when necessary to provide our services, and only under 
              strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 font-medium">Data Protection Officer</p>
              <p className="text-gray-600">Narga Engineering Private Limited</p>
              <p className="text-gray-600">#409, Nandanavanam Apartment, Silicon Ridge</p>
              <p className="text-gray-600">Hyderabad, Telangana, India - 500030</p>
              <p className="text-[#523831] font-medium">privacy@narga.co.in</p>
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