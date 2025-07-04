import { RxHamburgerMenu } from "react-icons/rx";
import SideMenu from "./SideMenu";
import { useState, useEffect, useRef } from "react";
import { useEnquiryForm } from "../../hooks/useEnquiryForm";
import { NavLink } from "react-router-dom";
import EnquiryForm from "./enquiryForm";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const homeElement =
      document.querySelector("#content_banner") || triggerRef.current;
    if (homeElement) {
      observer.observe(homeElement);
    }

    return () => {
      if (homeElement) {
        observer.unobserve(homeElement);
      }
    };
  }, []);

  const getRedirectUrl = () => {
    const currentPath = location.pathname;

    // Check which section we're in
    if (currentPath.includes("/branding")) {
      return "/branding/";
    } else if (currentPath.includes("/remarketing")) {
      return "/remarketing/";
    } else if (currentPath.includes("/demand-gen")) {
      return "/demand-gen/";
    } else {
      // Default to base URL if no section is detected
      return import.meta.env.VITE_BASE_URL;
    }
  };

  return (
    <>
      <SideMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      <header
        id="header"
        className="xl:flex-wrap flex fixed w-full top-[0] left-[0] z-[99999] bg-white justify-between items-center px-[15px] xl:px-[40px] pt-[10px] pb-[14px]"
      >
        <div className="xl:basis-[25%] flex items-center">
          <NavLink to={getRedirectUrl()}>
            <img
              src={`${import.meta.env.VITE_BASE_URL}assets/home/${
                isScrolled ? "logo-canary-new.png" : "logo-1.png"
              }`}
              className="h-[40px]"
              alt="logo"
            />
          </NavLink>
        </div>
        <ul className="2xl:basis-[24%] xl:basis-[26%] flex justify-between items-center poppins-medium uppercase text-[14px]">
          <li className="tracking-[1px] hidden xl:inline-block xl:text-[12px]">
            <NavLink
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              find us
            </NavLink>
          </li>
          <li
            onClick={openForm}
            className="tracking-[1px] cursor-pointer hidden xl:inline-block lg:block xl:text-[12px]"
          >
            schedule site visit
          </li>
          <li
            className="flex items-center cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <RxHamburgerMenu />
            <span className="tracking-[1px] ml-[10px] xl:text-[12px]">
              Menu
            </span>
          </li>
        </ul>
        <EnquiryForm isOpen={isOpen} onClose={closeForm} />
      </header>
      {/* Optional: Add a ref element if #home is not in this component */}
      <div ref={triggerRef} style={{ height: "1px" }} />
    </>
  );
};

export default Header;
