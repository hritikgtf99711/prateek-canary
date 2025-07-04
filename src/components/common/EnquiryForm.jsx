import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useFormSubmit } from "../../hooks/useFormSubmit";
const EnquiryForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    authorize: true,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const { handleSubmit, loading, error, response } = useFormSubmit();

  // Validation rules
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

      case "contact":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,15}$/;
        if (!phoneRegex.test(value.trim()))
          return "Please enter a valid phone number (10-15 digits)";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 1)
          return "Message must be at least 1 characters";
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
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
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

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await handleSubmit(formData);
      // Reset form on successful submission
      if (response?.success) {
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
        setErrors({});
        setTouched({});
      }
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  // Reset form when modal closes
  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    onClose();
  };

  return (
    isOpen && (
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.83)" }}
        className="fixed inset-0 z-[999999999] bg-opacity-80 flex items-center justify-center p-4"
      >
        <div
          style={{ backgroundColor: "rgba(53, 84, 61, 0.93)" }}
          className="xl:!max-w-[40%] p-[30px] text-white relative text-center tracking-[1.5px] uppercase"
        >
          <div className="text-center font-playfair">
            <img
              loading="lazy"
              decoding="async"
              src="/assets/home/logo-canary-white.png"
              className="w-[150px] m-[auto] mb-[30px]"
              alt="canary"
            />
            <h2>Have Questions ? Ask Away!</h2>
          </div>

          {/* Display API response messages */}
          {response && (
            <div
              className={`mb-4 p-3 rounded ${
                response.success
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {response.message}
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 rounded bg-red-600 text-white">
              {error}
            </div>
          )}

          <form
            onSubmit={onSubmit}
            className="w-full text-start mx-0 mt-[25px]"
          >
            {/* Name Field */}
            <div className="mb-[16px]">
              <input
                type="text"
                className={`border-[1px] border-solid placeholder:!text-[#000] placeholder:text-left w-full px-[10px] py-[8px] placeholder:text-[13px] text-[#000] ${
                  errors.name ? "border-red-500" : "border-[white]"
                }`}
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                disabled={loading}
              />
              {errors.name && (
                <p className="text-red-300 text-xs mt-1 normal-case">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-[16px]">
              <input
                type="email"
                className={`border-[1px] border-solid placeholder:!text-[#000] placeholder:text-left w-full inline-block px-[10px] py-[8px] placeholder:text-[13px] text-[#000] ${
                  errors.email ? "border-red-500" : "border-[white]"
                }`}
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                disabled={loading}
              />
              {errors.email && (
                <p className="text-red-300 text-xs mt-1 normal-case">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-[16px]">
              <input
                type="tel"
                className={`border-[1px] border-solid placeholder:!text-[#000] placeholder:text-left w-full px-[10px] py-[8px] placeholder:text-[13px] text-[#000] ${
                  errors.contact ? "border-red-500" : "border-[white]"
                }`}
                name="contact"
                placeholder="NUMBER"
                value={formData.contact}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                disabled={loading}
              />
              {errors.contact && (
                <p className="text-red-300 text-xs mt-1 normal-case">
                  {errors.contact}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-[16px]">
              <textarea
                className={`basis-[100%] placeholder:text-[13px] placeholder:!text-[#000] placeholder:text-left font-poppins text-[#000] border-[1px] border-solid px-[10px] py-[10px] w-full ${
                  errors.message ? "border-red-500" : "border-[white]"
                }`}
                name="message"
                cols={35}
                rows={1}
                placeholder="MESSAGE"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                disabled={loading}
              />
              {errors.message && (
                <p className="text-red-300 text-xs mt-1 normal-case">
                  {errors.message}
                </p>
              )}
            </div>
            {/* checbox */}
            <div className="mt-[30px] text-center w-full flex justify-center">
              <input
                type="checkbox"
                checked={formData.authorize}
                className={`h-[15px]  w-[15px] accent-[#104735] ${
                  errors.authorize ? "ring-2 ring-red-500" : ""
                }`}
                name="authorize"
                id="authorize"
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                disabled={loading}
              />
              <label
                htmlFor="authorize"
                className="text-[9px] ml-[10px] xl:ml-[17px] leading-[14px] inline-block text-left cursor-pointer"
              >
                I authorize company representatives to Call, SMS, Email or
                WhatsApp me about its products and offers. This consent
                overrides any registration for DNC/NDNC.
              </label>

              <span className="leading-[15px] text-[7px] xl:text-[9px]"></span>
              {errors.authorize && (
                <p className="text-red-600 text-xs mt-1">{errors.authorize}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="w-full text-center">
              <button
                type="submit"
                disabled={loading}
                className={`mt-[25px] text-[14px] tracking-[1px] font-poppins text-center border-none outline-none px-[20px] py-[10px] ${
                  loading
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-[white] custom-green cursor-pointer hover:bg-gray-100"
                } !font-[500]`}
              >
                {loading ? "Submitting..." : "Submit now"}
              </button>
            </div>
          </form>

          {/* Close Button */}
          <button
            onClick={handleClose}
            disabled={loading}
            className="absolute top-4 right-4 cursor-pointer !text-white text-xl hover:text-gray-300 disabled:cursor-not-allowed"
          >
            <RxCross1 />
          </button>
        </div>
      </div>
    )
  );
};

export default EnquiryForm;
