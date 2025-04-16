import { RxHamburgerMenu } from "react-icons/rx";
import { Element } from "react-scroll";

const Header = () => {
  return (
    <Element name="header">
      <header
        id="header"
        className=" xl:flex-wrap flex justify-between items-center px-[15px] xl:px-[40px] py-[10px]"
      >
        <div className="xl:basis-[25%] flex items-center">
          <img src="/assets/home/logo.png" className="h-[40px]" alt="logo" />
          <span className="custom-green playfair-display-600 uppercase ml-[1rem] tracking-[1.5px]">
            Haven Realty
          </span>
        </div>
        <ul className="xl:basis-[30%] flex justify-between items-center poppins-medium  uppercase text-[14px]">
          <li className="tracking-[1px] hidden xl:inline-block xl:text-[12px]">
            find us
          </li>
          <li className="tracking-[1px] hidden xl:inline-block lg:block xl:text-[12px]">
            schedule site visit
          </li>
          <li className="flex items-center">
            <RxHamburgerMenu />
            <span className="tracking-[1px] ml-[10px] xl:text-[12px]">
              Menu
            </span>
          </li>
        </ul>
      </header>
    </Element>
  );
};

export default Header;
