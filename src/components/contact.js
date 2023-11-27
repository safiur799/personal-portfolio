import React from "react";
import TextWithLine from "./common/textWithLine";
import SvgIconWithText from "./common/svgIconWithText";
// import phoneIcon from "./assets/phone-alt.svg";
import ContactForm from "./contactForm";

function Contact() {
  const contactData = [
    {
      icon: "/phone-alt.svg",
      text: "9732517400",
    },
    {
      icon: "/envelope.svg",
      text: "safiurrahaman799@gmail.com",
    },
  ];
  return (
    <div className="bg-[#31065A] pt-8 " id="contact">
      <TextWithLine text="Contact" />
      <div className="flex flex-col md:flex-row pt-8 pb-32 items-center justify-center bg-[#31065A]">
        <div className="md:w-1/2 md:pl-64  text-white space-y-4">
          <div className="container mx-auto p-4 space-y-4 ">
            {contactData.map((el, index) => {
              return (
                <div key={index} className="flex items-center  justify-start">
                  <SvgIconWithText icon={el.icon} number={el.text} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-1/2 md:pr-24">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
