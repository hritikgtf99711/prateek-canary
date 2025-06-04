import CommonHeading from "../common/CommonHeading";
import EnquiryForm from "../common/enquiryForm";
import { useEnquiryForm } from "../../hooks/useEnquiryForm";
const units = [
  {
    type: "3 BHK Elite",
    area: "1700 Sq. Ft.",
    price: "₹ 2.92 Cr* Onwards",
  },
  {
    type: "3 BHK Deluxe",
    area: "2040 Sq. Ft.",
    price: "On Request",
  },
  {
    type: "3 BHK Luxury",
    area: "2555 Sq. Ft.",
    price: "On Request",
  },
  {
    type: "4 BHK Luxury",
    area: "3355 Sq. Ft.",
    price: "On Request",
  },
  {
    type: "Duplex Penthouse",
    area: "6100 Sq. Ft.",
    price: "On Request",
  },
];
const PriceList = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  return (
    <section id="pricelist">
      <div className="bg-[rgb(243,243,239)]  relative pt-[60px] xl:px-[0px] px-[25px]">
        <CommonHeading
          text={"Price List"}
          top={"top-[75%]"}
          textColor={"rgba(0, 0, 0, 0.5)"}
        />
        <h2
          className={`custom-sub-heading-color  xl:hidden  text-center poppins-regular  xl:text-[25px] text-[18px] pb-[20px]  leading-[41px] tracking-[5px] uppercase`}
        >
          PRICE LIST
        </h2>
        <h2 className="custom-green xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] text-[19px]  uppercase tracking-[1.5px] text-center !font-[300] playfair-display-400 leading-[30px]">
          <span className="xl:block hidden">
            Exceptional Quality That Fits Your Budget, Offering Unmatched
          </span>
          <span className="hidden">
            {" "}
            Value Without Compromising on Performance or Durability.
          </span>
          <span className="xl:hidden block text-[13px] leading-[23px] px-[10px]">
            {" "}
            Exceptional Quality That Fits Your Budget, Offering Unmatched Value
            Without Compromising on Performance or Durability.
          </span>
        </h2>
        <div className="flex flex-col items-center justify-center py-[60px]">
          <ul className="xl:w-[70%] w-[100%] mx-0  my-auto popping-regular-400">
            {units.map((unit, index) => (
              <li
                key={index}
                className="bg-[#fff] flex justify-between flex-wrap xl:flex-row flex-col xl:items-center items-center px-[26px] py-[15px] mb-[20px]"
              >
                <p className="xl:text-[14px] basis-[23%] text-[17px] xl:my-0 my-[22px] tracking-[2px] font-[300]">
                  {unit.type}
                </p>
                <p className="xl:text-[14px] basis-[23%] text-[17px] xl:mb-0 mb-[22px] tracking-[2px] font-[300]">
                  {unit.area}
                </p>
                <p className="xl:text-[14px] basis-[23%] text-[17px] xl:mb-0 mb-[22px] font-[450]">
                  {unit.price}
                </p>
                <button
                  onClick={openForm}
                  className="text-[white] cursor-pointer basis-[20%] text-center border-none xl:mb-0 mb-[22px] text-[11px] tracking-[1px] outline-none custom-bg-green px-[20px] py-[10px]"
                >
                  INTERESTED
                </button>
              </li>
            ))}
          </ul>
        </div>{" "}
      </div>

      <div className="bg-white flex justify-center  xl:py-0 py-[30px] flex-wrap">
        <div className="flex xl:basis-[75%] bg-white xl:py-[65px]  flex-wrap justify-between  items-center ">
          <p className="xl:basis-[17%] basis-[100%] lg:justify-end justify-center  custom-green  flex lg:flex-col xl:items-start items-center playfair-display-600">
            <span> WHY INVEST </span>
            <span>IN NOIDA?</span>
          </p>
          <div className="flex justify-between xl:basis-[80%] xl:mt-0 mt-[20px] basis-[100%] items-center xl:flex-nowrap flex-wrap">
            <p className="flex justify-center basis-[50%] xl:mb-0 mb-[30px] flex-col">
              <img  loading="lazy" 
  decoding="async"
                src={
                  import.meta.env.VITE_BASE_URL +
                  "/assets/home/priceList/skyline.png"
                }
                className="block h-[50px] object-contain"
                alt="skyline"
              />
              <span className="text-center mt-[8px] text-[13px]">
                {" "}
                Booming
                <br /> commercial hub
              </span>
            </p>
            <p className="flex justify-center basis-[50%] xl:mb-0 mb-[30px] flex-col">
              <img  loading="lazy" 
  decoding="async"
                src={
                  import.meta.env.VITE_BASE_URL +
                  "/assets/home/priceList/businessman.png"
                }
                className="block h-[50px] object-contain"
                alt="businessman"
              />
              <span className="text-center mt-[8px] text-[13px]">
                {" "}
                Employment hubs <br /> of noida
              </span>
            </p>
            <p className="flex justify-center basis-[50%] flex-col">
              <img  loading="lazy" 
  decoding="async"
                src={
                  import.meta.env.VITE_BASE_URL +
                  "/assets/home/priceList/stock-market.png"
                }
                className="block h-[50px] object-contain"
                alt="stock-market"
              />
              <span className="text-center mt-[8px] text-[13px]">
                Pricing <br /> growth
              </span>
            </p>
            <p className="flex justify-center basis-[50%] flex-col">
              <img  loading="lazy" 
  decoding="async"
                src={
                  import.meta.env.VITE_BASE_URL +
                  "/assets/home/priceList/smart-city.png"
                }
                className="block h-[50px] object-contain"
                alt="smart-city"
              />
              <span className="text-center mt-[8px] text-[13px]">
                {" "}
                Smart city <br /> features
              </span>
            </p>
          </div>
        </div>
      </div>
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </section>
  );
};
export default PriceList;
