import { lazy, Suspense, memo, useEffect } from "react";
import Header from "../components/common/Header";
import HeroSection from "../components/home/HeroSection";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import EnquiryForm from "../components/common/enquiryForm";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
// Lazy load non-critical components
const AboutUs = lazy(() => import("../components/home/Aboutus"));
const Amenties = lazy(() => import("../components/home/Amenties"));
const PriceList = lazy(() => import("../components/home/PriceList"));
const Gallery = lazy(() => import("../components/home/Gallery"));
const Contact = lazy(() => import("../components/home/Contact"));
const LocationMap = lazy(() => import("../components/home/LocationMap"));
const Specifications = lazy(() => import("../components/home/Specifications"));
const MasterAndFloorPlans = lazy(() =>
  import("../components/home/MasterAndFloorPlans")
);
const Footer = lazy(() => import("../components/home/Footer"));

// Skeleton loader that maintains approximate height
const SectionSkeleton = ({ height = "400px" }) => (
  <div
    className="animate-pulse bg-gray-200 rounded-lg mx-4 my-8"
    style={{ height, minHeight: height }}
  >
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  </div>
);

// Different skeleton heights for different sections
const LoadingComponents = {
  AboutUs: () => <SectionSkeleton height="500px" />,
  Amenties: () => <SectionSkeleton height="600px" />,
  PriceList: () => <SectionSkeleton height="400px" />,
  Specifications: () => <SectionSkeleton height="500px" />,
  LocationMap: () => <SectionSkeleton height="450px" />,
  MasterAndFloorPlans: () => <SectionSkeleton height="550px" />,
  Gallery: () => <SectionSkeleton height="700px" />,
  Contact: () => <SectionSkeleton height="600px" />,
  Footer: () => <SectionSkeleton height="300px" />,
};

const Home = memo(() => {
  const location = useLocation();

  const { isOpen, openForm, closeForm } = useEnquiryForm();

  useEffect(() => {
    setTimeout(() => {
      openForm();
    }, 5000);
  }, []);

  return (
    <>
      <Helmet>
        {/* meta pixel */}
        {location.pathname == "/" ? (
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
        ) : (
          ""
        )}

        {location.pathname == "/" ? (
          <noscript>
            {`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1290311484487839&ev=PageView&noscript=1" />
        `}
          </noscript>
        ) : (
          ""
        )}
      </Helmet>
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />

      {/* Load critical above-the-fold content immediately */}
      <Header />
      <HeroSection />

      {/* Lazy load with proper skeleton fallbacks */}
      <Suspense fallback={<LoadingComponents.AboutUs />}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<LoadingComponents.Amenties />}>
        <Amenties />
      </Suspense>

      <Suspense fallback={<LoadingComponents.PriceList />}>
        <PriceList />
      </Suspense>

      <Suspense fallback={<LoadingComponents.Specifications />}>
        <Specifications />
      </Suspense>

      <Suspense fallback={<LoadingComponents.LocationMap />}>
        <LocationMap />
      </Suspense>

      <Suspense fallback={<LoadingComponents.MasterAndFloorPlans />}>
        <MasterAndFloorPlans />
      </Suspense>

      <Suspense fallback={<LoadingComponents.Gallery />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<LoadingComponents.Contact />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingComponents.Footer />}>
        <Footer />
      </Suspense>
    </>
  );
});

Home.displayName = "Home";

// export default Home;

export default Home;
