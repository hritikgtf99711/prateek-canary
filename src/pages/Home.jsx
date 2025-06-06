import { lazy, Suspense, memo, useEffect } from "react";
import Header from "../components/common/Header";
import HeroSection from "../components/home/HeroSection";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import EnquiryForm from "../components/common/enquiryForm";
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
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  useEffect(() => {
    setTimeout(() => {
      openForm();
    }, 5000);
  }, []);

  return (
    <>
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
