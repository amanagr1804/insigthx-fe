import React from 'react';

const Contact = () => {
  return (
    <div className="py-20 px-8 bg-primary text-textPrimary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">Let's Work Together</h2>
        <p className="mt-4">Reach out to us and discover how we can help transform your radiology practice.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-primary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300 text-center">
          <h3 className="text-xl font-bold">Email Address</h3>
          <p className="mt-2">contact@InsigthX.com</p>
        </div>

        <div className="p-8 bg-primary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300 text-center">
          <h3 className="text-xl font-bold">Phone Number</h3>
          <p className="mt-2">+91-6262-8181-77</p>
        </div>

        <div className="p-8 bg-primary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300 text-center">
          <h3 className="text-xl font-bold">Office Location</h3>
          <p className="mt-2">816-17 NRC Business Park, Indore, MP</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
