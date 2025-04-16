const CommonHeading = ({ text, textColor, top }) => {
  return (
    <h2
      style={{
        color: textColor ? textColor : "rgba(0, 0, 0, 0.5)",
      }}
      className={`z-[2] hidden xl:block custom-sub-heading-color origin-top-left translate-y-[-50%]  ${
        top ? top : "top-[70%]"
      } absolute left-[55px]  text-center poppins-regular !font-[400] text-[35px]  leading-[41px] tracking-[5px] uppercase rotate-[-90deg]`}
    >
      {text}
    </h2>
  );
};

export default CommonHeading;
