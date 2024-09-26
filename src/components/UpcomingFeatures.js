import React from 'react';

const UpcomingFeatures = () => {
  return (
    <div className="py-20 bg-primary text-textPrimary px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">Upcoming Features</h2>
        <p className="mt-4">Our passion is helping you discover your potential with solutions that lead to a better tomorrow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-8 bg-primary rounded-lg shadow-lg text-center hover:bg-accentGreen hover:text-white transition-all duration-300">
          <div className="mb-4">
            <img src="/images/f1.png" alt="Auto-Pilot Mode" className="mx-auto h-16 w-16 object-cover" />
          </div>
          <h3 className="text-xl font-bold">AI-Assisted X-ray Analysis</h3>
          <p className="mt-2">Our AI system scans and flags potential abnormalities within seconds, allowing radiologists to focus on high-value interpretation rather than manual assessments.</p>
        </div>

        {/* Feature 2 */}
        <div className="p-8 bg-primary rounded-lg shadow-lg text-center hover:bg-accentGreen hover:text-white transition-all duration-300">
          <div className="mb-4">
            <img src="/images/f2.png" alt="Supercharge Productivity" className="mx-auto h-16 w-16 object-cover" />
          </div>
          <h3 className="text-xl font-bold">Secure Data Handling</h3>
          <p className="mt-2">Every piece of data processed through our platform is encrypted and HIPAA-compliant, ensuring the utmost security and privacy for patients and healthcare providers.</p>
        </div>

        {/* Feature 3 */}
        <div className="p-8 bg-primary rounded-lg shadow-lg text-center hover:bg-accentGreen hover:text-white transition-all duration-300">
          <div className="mb-4">
            <img src="/images/f3.png" alt="Earn Rewards" className="mx-auto h-16 w-16 object-cover" />
          </div>
          <h3 className="text-xl font-bold">Easy Integration</h3>
          <p className="mt-2">InsightX is designed to fit seamlessly into your existing workflow, whether it's PACS, RIS, or another radiology management system. No extensive training or costly transitions are required.          .</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Feature 4 */}
        <div className="p-8 bg-primary rounded-lg shadow-lg text-center hover:bg-accentGreen hover:text-white transition-all duration-300">
          <div className="mb-4">
            <img src="/images/f5.png" alt="Mobile App Access" className="mx-auto h-16 w-16 object-cover" />
          </div>
          <h3 className="text-xl font-bold">Scalability</h3>
          <p className="mt-2">Whether you’re handling 100 or 10,000 scans a day, our platform scales to meet your diagnostic demands, ensuring uninterrupted performance as your practice grows.</p>
        </div>

        {/* Feature 5 */}
        <div className="p-8 bg-primary rounded-lg shadow-lg text-center hover:bg-accentGreen hover:text-white transition-all duration-300">
          <div className="mb-4">
            <img src="/images/f5.png" alt="Voice Recognition" className="mx-auto h-16 w-16 object-cover" />
          </div>
          <h3 className="text-xl font-bold">Real-Time Collaboration</h3>
          <p className="mt-2">Radiologists can collaborate in real time across locations, allowing for instant second opinions and faster, more informed decision-making.</p>
        </div>

        {/* Feature 6 */}
        <div className="p-8 bg-primary rounded-lg shadow-lg text-center hover:bg-accentGreen hover:text-white transition-all duration-300">
          <div className="mb-4">
            <img src="/images/f6.png" alt="Collaborative Workspace" className="mx-auto h-16 w-16 object-cover" />
          </div>
          <h3 className="text-xl font-bold">Customizable Reporting Templates</h3>
          <p className="mt-2">Tailor the system’s reporting templates to your needs, ensuring that your radiologists can generate consistent, comprehensive reports quickly and easily.</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;
