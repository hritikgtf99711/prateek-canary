import { Link } from "react-router-dom"; // Changed Navigate to Link
import Footer from "../components/home/Footer";
import { Helmet } from "react-helmet";

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <script>
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1290311484487839');
          fbq('track', 'PageView');
        `}
        </script>

        <noscript>
          {`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1290311484487839&ev=PageView&noscript=1" />
        `}
        </noscript>

        {/* <!-- Event snippet for Submit Lead Form 17/6 conversion page --> */}
        <script>
          {`gtag("event", "conversion", {
            send_to: "AW-17149672868/SbVJCM2H4dwaEKT7zPE_",
          })`}
        </script>
      </Helmet>
      <div className="bg-[#f9fbf4] flex items-center justify-center py-[80px]">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto mb-6 flex items-center justify-center text-2xl">
            <img
              loading="lazy"
              decoding="async"
              src="/assets/home/logo-canary-new.png"
              className="w-[200px]"
              alt="canary logo"
            />
          </div>
          <h1 className="text-3xl font-playfair mb-4">Thank you!</h1>
          <p className="text-lg leading-relaxed mb-6 font-playfair px-[30px]">
            Thank you for submitting your details.
            <br />
            Our professional shall get in touch with you within two working
            hours. Stay with us.
          </p>
          <Link
            to={import.meta.env.VITE_BASE_URL} // Changed href to to
            className="inline-block bg-[#35543ded] text-[#fff] relative py-[8px] px-[20px]"
          >
            Back to home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYouPage;
