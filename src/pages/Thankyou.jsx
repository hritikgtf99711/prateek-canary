import React from 'react';
import { Link } from 'react-router-dom'; // Changed Navigate to Link
import Footer from '../components/home/Footer';

const ThankYouPage = () => {
  return (
    <>
    <div className="bg-[#f9fbf4] flex items-center justify-center py-[80px]">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto mb-6 flex items-center justify-center text-2xl">
          <img  loading="lazy" 
  decoding="async"
            src="./assets/home/logo-canary-new.png"
            className="w-[200px]"
            alt="canary logo"
          />
        </div>
        <h1 className="text-3xl font-playfair mb-4">Thank you!</h1>
        <p className="text-lg leading-relaxed mb-6 font-playfair px-[30px]">
          Thank you for submitting your details.<br />
          Our professional shall get in touch with you within two working hours. Stay with us.
        </p>
        <Link
          to={import.meta.env.VITE_BASE_URL}// Changed href to to
          className="inline-block bg-[#35543ded] text-[#fff] relative py-[8px] px-[20px]"
        >
          Back to home
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ThankYouPage;