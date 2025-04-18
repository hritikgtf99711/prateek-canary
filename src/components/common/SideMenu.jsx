import { IoIosCloseCircleOutline } from "react-icons/io";

const SideMenu = ({ setShowMenu, showMenu }) => {
  return (
    <aside
      style={{
        backgroundColor: "rgba(53, 84, 61, 0.93)",
      }}
      className={`h-screen z-[9999]
          justify-evenly
    items-center
    flex-col
     flex
poppins-regular !font-[200] tracking-[1.2px]
      right-0 fixed uppercase xl:p-[30px] px-[10px] w-[300px] text-white transform transition-transform duration-700 ease-in-out ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex self-end justify-end">
        <IoIosCloseCircleOutline
          className="text-white text-[30px] cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
      </div>

      <p>Home</p>
      <p>About Us</p>
      <p>Amenities</p>
      <p>price list</p>
      <p>Specifications</p>
      <p>Master & Floor Plans</p>
      <p>Gallery</p>
      <p>contact us</p>
    </aside>
  );
};

export default SideMenu;
