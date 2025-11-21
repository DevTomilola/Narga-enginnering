import Image from 'next/image';

export default function TrademarkPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header with SESLAA Logo */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <Image
                src="/logo/seslaa.jpeg"
                alt="SESLAA Trademark"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SESLAA Trademark Information</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Protecting our SESLAA brand identity and intellectual property across multiple classes
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          {/* Trademark Notice */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trademark Notice</h2>
            <p className="text-gray-700 mb-4">
              The SESLAA name, logo, and all related product and service names, 
              design marks, and slogans are the trademarks or registered trademarks of 
              Narga Engineering Private Limited.
            </p>
            <p className="text-gray-700">
              All other trademarks, service marks, and logos used on this website are 
              the trademarks, service marks, or logos of their respective owners.
            </p>
          </section>

          {/* Registered Trademarks - SESLAA Specific */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registered Trademarks - SESLAA</h2>
            <div className="space-y-4">
              {/* Class 7 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-[#523831] rounded-full"></div>
                  <span className="font-bold text-lg">SESLAA - Class 7</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full ml-auto">Registered</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-700">Application Number:</p>
                    <p className="text-gray-600">6576433</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Application Date:</p>
                    <p className="text-gray-600">14/08/2024</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-medium text-gray-700">Goods & Services:</p>
                    <p className="text-gray-600">
                      Mechanical control apparatus for machine tools, Machines and machine tools, 
                      Control mechanisms for machines, engines or motors
                    </p>
                  </div>
                </div>
              </div>

              {/* Class 9 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-[#523831] rounded-full"></div>
                  <span className="font-bold text-lg">SESLAA - Class 9</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full ml-auto">Registered</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-700">Application Number:</p>
                    <p className="text-gray-600">6576210</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Application Date:</p>
                    <p className="text-gray-600">14/08/2024</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-medium text-gray-700">Goods & Services:</p>
                    <p className="text-gray-600">
                      Electric vehicle charging piles, Charging stations for electric vehicles, 
                      Battery preheaters for electric vehicles, Battery charging devices for motor vehicles, 
                      Batteries for electric vehicles
                    </p>
                  </div>
                </div>
              </div>

              {/* Class 12 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-[#523831] rounded-full"></div>
                  <span className="font-bold text-lg">SESLAA - Class 12</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full ml-auto">Registered</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-700">Application Number:</p>
                    <p className="text-gray-600">6576211</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Application Date:</p>
                    <p className="text-gray-600">14/08/2024</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-medium text-gray-700">Goods & Services:</p>
                    <p className="text-gray-600">
                      Vehicles and parts for vehicles, Automotive components, 
                      Transportation equipment in class 12
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trademark Classes Explanation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trademark Classes Explained</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Class 7</h3>
                <p className="text-blue-700 text-sm">
                  Machines and machine tools; motors and engines (except for land vehicles); 
                  mechanical control apparatus for machines.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">Class 9</h3>
                <p className="text-green-700 text-sm">
                  Scientific, electrical, and electronic apparatus; electric vehicle charging equipment; 
                  batteries and charging devices.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-2">Class 12</h3>
                <p className="text-purple-700 text-sm">
                  Vehicles; apparatus for locomotion by land, air, or water; 
                  automotive parts and components.
                </p>
              </div>
            </div>
          </section>

          {/* SESLAA Logo Usage */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">SESLAA Logo Usage Guidelines</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24">
                <Image
                  src="/logo/seslaa.jpeg"
                  alt="SESLAA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 mb-3">
                  The SESLAA logo is a registered trademark and must be used in accordance with 
                  our brand guidelines. Unauthorized modification, distortion, or misuse of the 
                  logo is strictly prohibited.
                </p>
                <p className="text-sm text-gray-600">
                  For brand guidelines and logo usage permissions, contact brand@narga.co.in
                </p>
              </div>
            </div>
          </section>

          {/* Proper Use */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Proper Use of SESLAA Trademarks</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#523831] rounded-full mt-2"></div>
                <span>The SESLAA trademark may not be used in connection with any product or service that is not manufactured or authorized by Narga Engineering</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#523831] rounded-full mt-2"></div>
                <span>Trademarks may not be used in any manner that is likely to cause confusion among consumers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#523831] rounded-full mt-2"></div>
                <span>All uses of SESLAA trademarks must include proper trademark symbols (™) and attribution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#523831] rounded-full mt-2"></div>
                <span>Any use of our trademarks requires prior written authorization</span>
              </li>
            </ul>
          </section>

          {/* Registration Authority */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Registration Authority</h3>
            <p className="text-gray-700 mb-2">
              All SESLAA trademarks are registered with the Government of India, 
              Ministry of Commerce & Industry, Department for Promotion of Industry and Internal Trade, 
              Controller General of Patents Design & Trade Marks.
            </p>
            <p className="text-sm text-gray-600">
              Registration Numbers: 6576433 (Class 7), 6576210 (Class 9), 6576211 (Class 12)
            </p>
          </section>

          {/* Reporting Infringement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting Infringement</h2>
            <p className="text-gray-700 mb-4">
              If you believe your intellectual property rights have been violated, 
              or if you've found potential trademark infringement of SESLAA trademarks, 
              please contact us immediately.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">Contact for Trademark Issues:</p>
              <p className="text-blue-700">legal@narga.co.in</p>
              <p className="text-blue-600 text-sm mt-1">Include "SESLAA Trademark" in subject line</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}