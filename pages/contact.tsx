import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const url = form.action;
    const formData = new FormData(form);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        console.log("Form submitted successfully!");
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full ">
        <h2 className="py-4">
          {t("translate:contact-title-1")}
          <span className="text-green">{t("translate:contact-title-2")}</span>!
        </h2>
        <div className="col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4">
          <div className="p-4">
            <form
              onSubmit={handleSubmit}
              action="https://getform.io/f/3e3edca7-a7d2-427b-8e95-7750e5996259"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    {t("translate:contact-name")}
                  </label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-text2"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">EMAIL</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-text2"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">
                  {t("translate:contact-subject")}
                </label>
                <input
                  className="border-2 rounded-lg p-2 flex border-text2"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">
                  {t("translate:contact-message")}
                </label>
                <textarea
                  className="border-2 rounded-lg p-2 border-text2"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="flex justify-center pt-4">
                <button type="submit" className="w-full p-4 mt-4 text-white bg-green hover:bg-greenDark shadow-xl uppercase rounded-xl" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16z"></path>
                      </svg>
                    </div>
                  ) : (
                    <>
                      {t("translate:contact-button")}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
