import { useState, useRef } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
const specifications = [
  {
    id: "01",
    question: "Flooring",
    answer:
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //   "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    id: "02",
    question: "kitchen",
    answer:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    id: "03",
    question: "Entrance Lobby",
    answer:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    id: "04",
    question: "windows",
    answer:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    id: "05",
    question: "doors",
    answer:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    id: "06",
    question: "safety",
    answer:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    id: "07",
    question: "Plumbing, Bathroom and Toilets",
    answer:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
];

const Specifications = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const contentRefs = useRef([]);
  const containerRef = useRef(null);

  const toggle = (index) => {
    const isExpanding = expandedIndex !== index;
    setExpandedIndex(isExpanding ? index : null);

    if (isExpanding && contentRefs.current[index] && containerRef.current) {
      setTimeout(() => {
        const contentElement = contentRefs.current[index];
        const container = containerRef.current;
        // Calculate the offset of the content relative to the container
        const offsetTop = contentElement.offsetTop - container.offsetTop;
        // Scroll the container to the calculated position
        container.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, 200);
    }
  };

  return (
    <section className="bg-[#f3f3ef] relative  !py-[60px]">
      <h2
        style={{
          color: "rgba(0, 0, 0, 0.5)",
        }}
        className={`z-[2] xl:text-[35px] text-[18px]  font-[500] block custom-sub-heading-color xl:origin-top-left xl:translate-y-[-50%]  xl:absolute xl:left-[55px] xl:top-[80%] text-center poppins-regular   leading-[41px] tracking-[5px] uppercase xl:rotate-[-90deg]`}
      >
        SPECIFICATIONS
      </h2>
      <h3 className="custom-green uppercase xl:px-0 px-[10px] text-[13px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px]  xl:mt-[0px] mt-[30px]  playfair-display-400 tracking-[1px] text-center">
        Specifications That Set New Standards in Luxury and Craftsmanship
      </h3>
      <div className="flex  mt-[60px] flex-wrap justify-center items-center">
        <img
          className="basis-[30%] mb-[1.7rem] xl:mb-[0rem] xl:mr-[1.5rem] object-cover h-[400px]"
          src={`${
            import.meta.env.VITE_BASE_URL
          }/assets/home/specifications/specifications.png`}
          alt="about_us"
        />
        <div className="bg-[white] p-[18px] xl:basis-[35%] h-[400px]">
          <div
            className="bg-[white] xl:pr-[30px] poppins-regular xl:pl-[30px] relative flex flex-col justify-center overflow-y-scroll 
        [&::-webkit-scrollbar]:w-[2.5px] [&::-webkit-scrollbar-track]:bg-[#fff] [&::-webkit-scrollbar-thumb]:bg-[#104735]"
          >
            <div className="w-full max-w-2xl h-[350px] mx-auto px-4 md:px-6 py-[20px]">
              <div
                ref={containerRef}
                className="divide-y divide-slate-200 overflow-y-auto max-h-[500px]"
              >
                {specifications.map((item, index) => (
                  <div key={item.id} className="pb-2 pt-[19px]">
                    <button
                      type="button"
                      className="flex items-center justify-between cursor-pointer w-full text-left font-semibold"
                      aria-expanded={expandedIndex === index}
                      onClick={() => toggle(index)}
                    >
                      <span className="text-[12px] tracking-[1.2px] cursor-pointer !uppercase !font-[400] poppins-regular">
                        {item.question}
                      </span>
                      {expandedIndex === index ? (
                        <HiMinus className="text-black-500 cursor-pointer text-lg ml-8 shrink-0 transition-transform duration-200 ease-out" />
                      ) : (
                        <HiPlus className="text-black-500 cursor-pointer text-lg ml-8 shrink-0 transition-transform duration-200 ease-out" />
                      )}
                    </button>

                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className={`grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedIndex === index
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-3 text-[12px] text-justify mt-[20px] !font-[400] poppins-regular">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
