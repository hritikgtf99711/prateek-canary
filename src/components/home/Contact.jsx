const Contact = () => {
  return (
    <section
      style={{
        background: "#FBFAF9",
      }}
      className="px-[30px] xl:h-[80vh] h-[74vh] pb-[40px] relative"
    >
      <h2
        style={{
          color: "rgba(0, 0, 0, 0.5)",
        }}
        className="z-[2] text-[13px] custom-sub-heading-color xl:origin-top-left xl:translate-y-[-50%]  xl:absolute xl:left-[55px] xl:top-[75%] text-center poppins-regular font-[400]   leading-[41px] tracking-[5px] uppercase xl:pt-0 pt-[30px] xl:rotate-[-90deg]"
      >
        CONTACT US
      </h2>
      <h3 className="custom-green text-[13px] leading-[23px] px-[10px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px]  xl:py-[50px] xl:pt-[30px] pt-[20px] uppercase tracking-[1.5px] text-center  playfair-display-400">
        Submit Your Request – We’re Just a Message Away!
      </h3>
      <div className="w-full flex justify-center">
        <form
          action="#"
          className="flex flex-wrap xl:w-[70%] w-full mx-0 my-auto"
        >
          <div className="flex flex-wrap basis-[100%] justify-between items-center">
            <input
              type="text"
              className="bg-[white] basis-[100%] inline-block xl:my-0 my-[24px] rounded-[4px] xl:basis-[31%] px-[10px] py-[8px] placeholder:text-[13px]"
              name="name"
              placeholder="ENTER NAME"
            />
            <input
              type="email"
              className="bg-[white] rounded-[4px] basis-[100%] inline-block xl:mb-0 mb-[24px] xl:basis-[31%] px-[10px] py-[8px] placeholder:text-[13px]"
              name="email"
              placeholder="ENTER EMAIL"
            />
            <input
              type="tel"
              className="bg-[white] rounded-[4px] xl:basis-[31%] basis-[100%] px-[10px] py-[8px] placeholder:text-[13px]"
              name="phonenumber"
              placeholder="ENTER NUMBER"
            />
          </div>
          <textarea
            className="basis-[100%] mt-[24px] placeholder:text-[13px] bg-[white] px-[10px] py-[10px] rounded-[4px]"
            name="message"
            cols={54}
            placeholder="ENTER MESSAGE"
            id="msg"
          ></textarea>
          <div className="flex basis-[100%] mt-[35px] justify-center">
            {" "}
            <button className="text-[white] xl:w-[20%] w-[23%] text-center border-none text-[11px] tracking-[1px] outline-none custom-bg-green px-[20px] py-[10px]">
              Submit
            </button>
          </div>
          <p className="mt-[30px] text-center w-full">
            <span className="poppins-medium text-center text-[10px]">
              <span className="block">
                <input
                  type="checkbox"
                  checked
                  className="h-[10px] w-[10px]  bg-[#104735] checked:custom-bg-green "
                  name="authorize"
                  id="authorize"
                />{" "}
                I authorize company representatives to Call , SMS,
              </span>{" "}
              Email or WhatsApp me about its products and offers. This consent
              overrides any registration for DNC/NDNC.
            </span>
          </p>{" "}
        </form>
      </div>
    </section>
  );
};

export default Contact;
