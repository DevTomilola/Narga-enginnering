import Image from 'next/image';

export default function CompanyProfile() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Company Profile</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Official Business Profile - Narga Engineering Private Limited
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Company Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Overview */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Industry</h3>
                    <p className="text-gray-700">Automotive R&D Manufacturer</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Company Type</h3>
                    <p className="text-gray-700">Private Limited</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Year of Registration</h3>
                    <p className="text-gray-700">2024</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">D-U-N-S® Number</h3>
                    <p className="text-gray-700 font-mono">64-508-1265</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Global business identification and validation
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Legal Status</h3>
                    <p className="text-gray-700">Active and Operational</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-800 text-lg mb-3">Automotive & eMobility Solutions</h3>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Electric vehicle components and systems
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Battery management systems
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Power electronics and control units
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Charging infrastructure solutions
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-green-800 text-lg mb-3">Embedded Software Development</h3>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Automotive ECUs and controllers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Real-time operating systems
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Device drivers and firmware
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Automotive cybersecurity solutions
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* DUNS Information */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Global Business Verification</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-yellow-800 text-lg mb-2">D-U-N-S® Number: 64-508-1265</h3>
                <p className="text-yellow-700 text-sm">
                  The D-U-N-S® Number is a unique nine-digit identifier used globally to validate 
                  businesses and track credit history. It is essential for financial transparency, 
                  global credibility, and vendor registration.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits of D-U-N-S® Number:</h4>
                  <ul className="space-y-1">
                    <li>• Global business identification</li>
                    <li>• Enhanced credit credibility</li>
                    <li>• International vendor registration</li>
                    <li>• Supply chain integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Verification:</h4>
                  <ul className="space-y-1">
                    <li>• Verified by Dun & Bradstreet</li>
                    <li>• Global business database</li>
                    <li>• Credit and financial transparency</li>
                    <li>• International recognition</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Contact & Certifications */}
          <div className="space-y-8">
            {/* Contact Information */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">Registered Address</h3>
                  <p className="text-gray-700 text-sm">
                    #409, Nandanavanam Apartment<br />
                    Silicon Ridge<br />
                    Hyderabad, Telangana<br />
                    India - 500030
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">Phone Numbers</h3>
                  <p className="text-gray-700 text-sm">+91 4031806193</p>
                  <p className="text-gray-700 text-sm">+91 7075572180</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">Email Address</h3>
                  <p className="text-[#523831] font-medium text-sm">info@narga.co.in</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">Business Hours</h3>
                  <p className="text-gray-700 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-800">ISO 9001:2015</p>
                    <p className="text-xs text-gray-600">Quality Management System</p>
                    <p className="text-xs text-gray-500">International quality standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-800">ISO 27001</p>
                    <p className="text-xs text-gray-600">Information Security Management</p>
                    <p className="text-xs text-gray-500">Data protection and security</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Founded</span>
                  <span className="font-medium text-gray-800">2024</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Company Type</span>
                  <span className="font-medium text-gray-800">Private Limited</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Industry</span>
                  <span className="font-medium text-gray-800">Automotive R&D</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Location</span>
                  <span className="font-medium text-gray-800">Hyderabad, India</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section className="bg-[#523831] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/90 leading-relaxed">
              To revolutionize the automotive and aerospace industries through precision engineering 
              and semiconductor excellence. We are committed to delivering innovative, sustainable 
              solutions that drive the future of mobility while maintaining the highest standards 
              of quality and reliability.
            </p>
          </section>
          <section className="bg-gray-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-white/90 leading-relaxed">
              To become the global benchmark in automotive R&D and eMobility solutions, recognized 
              for our technological innovation, engineering excellence, and commitment to 
              sustainable development in the transportation sector.
            </p>
          </section>
        </div>

        {/* Global Recognition */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Global Business Recognition</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">D&B</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Dun & Bradstreet</h3>
              <p className="text-sm text-gray-600">Verified global business profile with D-U-N-S® Number</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">ISO</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">International Standards</h3>
              <p className="text-sm text-gray-600">ISO certified for quality and information security</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">IN</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">India Operations</h3>
              <p className="text-sm text-gray-600">Registered Private Limited Company in India</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}