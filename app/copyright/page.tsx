import Image from 'next/image';

export default function CopyrightPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header with SESLAA Logo */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <Image
                src="/logo/seslaa.jpeg"
                alt="SESLAA Copyright"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SESLAA Copyright Information</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Protecting SESLAA creative works, designs, and intellectual property
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          {/* Copyright Notice */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Copyright Notice</h2>
            <p className="text-gray-700 mb-4">
              © {currentYear} Narga Engineering Private Limited. All rights reserved.
            </p>
            <p className="text-gray-700">
              The SESLAA brand, including all associated designs, technical documentation, 
              website content, and product information are protected under applicable copyright laws, 
              trademarks, and other proprietary rights.
            </p>
          </section>

          {/* SESLAA Logo Copyright */}
          <section className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-4">SESLAA Logo Copyright</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/logo/seslaa.jpeg"
                  alt="SESLAA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-blue-700 mb-3">
                  The SESLAA logo design, including all graphical elements, color schemes, 
                  and typography, is protected by copyright law. Unauthorized reproduction, 
                  distribution, or modification of the SESLAA logo is strictly prohibited.
                </p>
                <div className="text-sm text-blue-600 space-y-1">
                  <p>• Logo designed exclusively for Narga Engineering</p>
                  <p>• Protected under Indian Copyright Act, 1957</p>
                  <p>• All rights reserved worldwide</p>
                </div>
              </div>
            </div>
          </section>

          {/* SESLAA Specific Copyright */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SESLAA Copyright Protection</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Protected Materials</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#523831] rounded-full"></div>
                    SESLAA logo and brand identity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#523831] rounded-full"></div>
                    Product designs and schematics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#523831] rounded-full"></div>
                    Technical specifications and drawings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#523831] rounded-full"></div>
                    Software interfaces and code
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Documentation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#523831] rounded-full"></div>
                    User manuals and installation guides
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#523831] rounded-full"></div>
                    Technical whitepapers and research
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#523831] rounded-full"></div>
                    Marketing and promotional materials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#523831] rounded-full"></div>
                    Website content and design
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SESLAA Product Coverage */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SESLAA Product Coverage</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h3 className="font-bold text-blue-800 mb-2">Class 7 Products</h3>
                <p className="text-blue-700 text-sm">
                  Machine tools, Mechanical control apparatus, Control mechanisms
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h3 className="font-bold text-green-800 mb-2">Class 9 Products</h3>
                <p className="text-green-700 text-sm">
                  EV charging equipment, Battery systems, Electronic controls
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <h3 className="font-bold text-purple-800 mb-2">Class 12 Products</h3>
                <p className="text-purple-700 text-sm">
                  Vehicle components, Automotive systems, Transportation equipment
                </p>
              </div>
            </div>
          </section>

          {/* Permissions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Permissions & Usage</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Allowed Usage</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>Viewing and browsing SESLAA content for personal use</li>
                  <li>Sharing links to our SESLAA product pages</li>
                  <li>Quoting small excerpts with proper SESLAA attribution</li>
                  <li>Educational and research purposes with citation</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Prohibited Usage</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>Commercial reproduction of SESLAA designs or documentation</li>
                  <li>Modification or creation of derivative works based on SESLAA IP</li>
                  <li>Removal of SESLAA copyright or trademark notices</li>
                  <li>Unauthorized use in competing products or services</li>
                  <li>Reverse engineering of SESLAA products or systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Licensing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SESLAA Licensing Information</h2>
            <p className="text-gray-700 mb-4">
              For licensing inquiries, partnership opportunities, or permission to use 
              SESLAA copyrighted materials, designs, or technical documentation, please 
              contact our licensing department.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">SESLAA Licensing Inquiries:</p>
              <p className="text-blue-700">licensing@narga.co.in</p>
              <p className="text-blue-600 text-sm mt-1">Please include "SESLAA License" in subject line</p>
            </div>
          </section>

          {/* Legal Protection */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Legal Protection Notice</h3>
            <p className="text-yellow-700 text-sm">
              SESLAA products, designs, and associated intellectual property are protected by 
              multiple layers of legal protection including trademarks (Classes 7, 9, 12), 
              copyrights, and trade secrets. Any unauthorized use, reproduction, or distribution 
              will be met with legal action to the fullest extent of the law.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center border-t pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Copyright Agent</h3>
            <p className="text-gray-700">Narga Engineering Private Limited</p>
            <p className="text-gray-600">Hyderabad, India - 500030</p>
            <p className="text-[#523831] font-medium">copyright@narga.co.in</p>
            <p className="text-sm text-gray-500 mt-2">Registered Office</p>
          </section>
        </div>
      </div>
    </div>
  );
}