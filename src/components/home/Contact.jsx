import { useState } from "react";
import { useFormSubmit } from "../../hooks/useFormSubmit";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
    authorize: true,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const { handleSubmit, loading, error, response } = useFormSubmit();

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return "Name can only contain letters and spaces";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim()))
          return "Please enter a valid email address";
        return "";

      case "phonenumber":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,15}$/;
        if (!phoneRegex.test(value.trim()))
          return "Please enter a valid phone number (10-15 digits)";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        if (value.trim().length > 500)
          return "Message must not exceed 500 characters";
        return "";

      case "authorize":
        if (!value) return "You must authorize us to contact you";
        return "";

      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    if (touched[name]) {
      const error = validateField(name, fieldValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  // Handle input blur
  const handleInputBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, fieldValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phonenumber: true,
      message: true,
      authorize: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const submitData = {
        name: formData.name,
        email: formData.email,
        contact: formData.phonenumber,
        message: formData.message,
      };

      await handleSubmit(submitData);

      if (response?.success) {
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          message: "",
          authorize: true,
        });
        setErrors({});
        setTouched({});
      }
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "#FBFAF9",
      }}
      className="px-[30px] lg:py-[120px] py-[40px] relative"
    >
      <h2
        style={{
          color: "rgba(0, 0, 0, 0.5)",
        }}
        className="z-[2] xl:text-[35px] text-[13px] custom-sub-heading-color xl:origin-top-left xl:translate-y-[-50%] xl:absolute xl:left-[55px] xl:top-[80%] text-center poppins-regular font-[400] leading-[41px] tracking-[5px] uppercase xl:pt-0 xl:rotate-[-90deg]"
      >
        CONTACT US
      </h2>
      <h3 className="custom-green text-[13px] lg:mb-[50px] leading-[23px] px-[10px] xl:text-[15px] xl:tracking-[2px] xl:leading-[28px] uppercase tracking-[1.5px] text-center playfair-display-400">
        Submit Your Request – We're Just a Message Away!
      </h3>

      {/* Display API response messages */}
      {response && (
        <div
          className={`mb-6 p-4 rounded text-center ${
            response.success
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {response.message}
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded bg-red-100 text-red-800 border border-red-300 text-center">
          {error}
        </div>
      )}

      <div className="w-full flex justify-center">
        <form
          onSubmit={onSubmit}
          className="flex flex-wrap xl:w-[70%] w-full mx-0 my-auto"
        >
          <div className="flex flex-wrap basis-[100%] justify-between items-start">
            {/* Name Field */}
            <div className="basis-[100%] xl:basis-[31%] xl:my-0 my-[12px]">
              <input
                type="text"
                className={`bg-[white] border-solid border-[1px] rounded-[4px] basis-[100%] inline-block w-full px-[10px] py-[8px] placeholder:text-[13px] ${
                  errors.name ? "border-red-500" : "border-[#104735]"
                }`}
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                disabled={loading}
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="basis-[100%] xl:basis-[31%] xl:mb-0 mb-[12px]">
              <input
                type="email"
                className={`bg-[white] border-solid border-[1px] rounded-[4px] basis-[100%] inline-block w-full px-[10px] py-[8px] placeholder:text-[13px] ${
                  errors.email ? "border-red-500" : "border-[#104735]"
                }`}
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                disabled={loading}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="basis-[100%] xl:basis-[31%]">
              <input
                type="tel"
                className={`bg-[white] border-solid border-[1px] rounded-[4px] basis-[100%] w-full px-[10px] py-[8px] placeholder:text-[13px] ${
                  errors.phonenumber ? "border-red-500" : "border-[#104735]"
                }`}
                name="phonenumber"
                placeholder="NUMBER"
                value={formData.phonenumber}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                disabled={loading}
              />
              {errors.phonenumber && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.phonenumber}
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div className="basis-[100%] mt-[24px]">
            <textarea
              className={`basis-[100%] w-full border-[1px] border-solid placeholder:text-[13px] bg-[white] px-[10px] py-[10px] rounded-[4px] ${
                errors.message ? "border-red-500" : "border-[#104735]"
              }`}
              name="message"
              cols={54}
              rows={4}
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              disabled={loading}
            />
            {errors.message && (
              <p className="text-red-600 text-xs mt-1">{errors.message}</p>
            )}
            {/* <p className="text-xs text-gray-500 mt-1">
              {formData.message.length}/500 characters
            </p> */}
          </div>

          {/* Authorization Checkbox */}
          <div className="mt-[30px] text-center w-full">
            <span className="poppins-medium text-center text-[10px]">
              <span className="block flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.authorize}
                  className={`h-[15px] w-[15px] accent-[#104735] ${
                    errors.authorize ? "ring-2 ring-red-500" : ""
                  }`}
                  name="authorize"
                  id="authorize"
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  disabled={loading}
                />
                <label htmlFor="authorize" className="cursor-pointer">
                  I authorize company representatives to Call, SMS,
                </label>
              </span>
              Email or WhatsApp me about its products and offers. This consent
              overrides any registration for DNC/NDNC.
            </span>
            {errors.authorize && (
              <p className="text-red-600 text-xs mt-1">{errors.authorize}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex basis-[100%] mt-[50px] justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`text-center border-none text-[11px] tracking-[1px] outline-none px-[80px] py-[10px] ${
                loading
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "text-[white] custom-bg-green cursor-pointer hover:opacity-90"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
