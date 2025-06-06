import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideMenu = ({ setShowMenu, showMenu }) => {
  return (
    <aside
      style={{
        backgroundColor: "rgba(53, 84, 61, 0.93)",
      }}
      className={`h-screen z-[999999]
     py-[150px]
    items-center
    flex-col
     flex
poppins-regular !font-[200] tracking-[1.2px]
      right-0 fixed uppercase  px-[10px] w-[300px] text-white transform transition-transform duration-700 ease-in-out ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative">
        <IoIosCloseCircleOutline
          className="text-white text-[30px] top-[-100px] right-[0] absolute cursor-pointer"
          onClick={() => setShowMenu(false)}
        />

        <NavLink
          className={"pb-[30px] block"}
          to="#home"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShowMenu(false);
          }}
        >
          Home
        </NavLink>
        <NavLink
          className={"pb-[30px] block"}
          to="#aboutus"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            document.getElementById("aboutus")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShowMenu(false);
          }}
        >
          About Us
        </NavLink>
        <NavLink
          className={"pb-[30px] block"}
          to="#amenities"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            document.getElementById("amenities")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShowMenu(false);
          }}
        >
          Amenities
        </NavLink>
        <NavLink
          className={"pb-[30px] block"}
          to="#pricelist"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            document.getElementById("pricelist")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShowMenu(false);
          }}
        >
          price list
        </NavLink>
        <NavLink
          className={"pb-[30px] block"}
          to="#specifications"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            document.getElementById("specifications")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShowMenu(false);
          }}
        >
          Specifications
        </NavLink>
        <NavLink
          className={"pb-[30px] block"}
          to="#plans"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            document.getElementById("plans")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShowMenu(false);
          }}
        >
          Master & Floor plans
        </NavLink>
        <NavLink
          className={"pb-[30px] block"}
          to="#gallery"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            document.getElementById("gallery")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Gallery
        </NavLink>
        <NavLink
          className={"pb-[30px] block"}
          to="#contact"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShowMenu(false);
          }}
        >
          contact us
        </NavLink>
      </div>
    </aside>
  );
};

export default SideMenu;
