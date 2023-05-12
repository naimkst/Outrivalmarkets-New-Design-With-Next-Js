import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const ContactForm = ({ data }: any) => {
  const [loading, setLoading] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState(false);
  const [submitErrMsg, setSubmitErrMsg] = React.useState(false);
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e: any) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e: any) => {
    console.log(e, "form data ===");
    setLoading(true);
    e.preventDefault();
    const formData: any = {};
    Array.from(e.target.elements).forEach((field: any) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    const sendMail = fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success === true) {
          setSubmitMessage(true);
        } else {
          setSubmitErrMsg(true);
        }
        console.log(data);
      });
  };

  const contactData = data?.data?.attributes;
  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="contact-validation-active"
    >
      <div className="row">
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.name}
              type="text"
              name="name"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Name"
            />
            {validator.message("name", forms.name, "required|alpha_space")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.phone}
              type="phone"
              name="phone"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Phone No."
            />
            {validator.message("phone", forms.phone, "required|phone")}
          </div>
        </div>

        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.email}
              type="email"
              name="email"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Email"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>

        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <select
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.subject}
              // type="text"
              name="subject"
            >
              <option>Select Subject</option>
              {contactData?.ServiceDropdown?.map((item: any) => (
                <option key={`optionSubject${item}`} value={item?.Title}>
                  {item?.Title}
                </option>
              ))}
            </select>
            {validator.message("subject", forms.subject, "required")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <textarea
            onBlur={(e) => changeHandler(e)}
            onChange={(e) => changeHandler(e)}
            value={forms.message}
            // type="text"
            name="message"
            placeholder="Message"
          ></textarea>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>
      <div className="submit-area">
        <button
          type="submit"
          className="contactUsButton text-[20px] font-bold text-white h-[60px] px-[20px]"
        >
          {contactData?.SendButtonText}
        </button>
      </div>

      {submitErrMsg && (
        <p className="text-center text-red-500">
          Thanks for contacting us! We will get back to you soon.
        </p>
      )}

      {submitMessage && (
        <p className="text-center text-black">
          Thanks for contacting us! We will get back to you soon.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
