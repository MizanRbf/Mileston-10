import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="bg-[url(/images/more/13.jpg)] px-20 py-10 flex items-center gap-10 border-2 border-t-secondary border-x-0 border-b-0">
        {/* Content */}
        <div className="w-1/2">
          <img
            className="h-[60px] w-[45px]"
            src="/images/more/logo1.png"
            alt=""
          />
          <h1 className="text-secondary text-3xl font-bold my-4">
            Espresso Emporium
          </h1>
          <p>
            Always ready to be your friend. Come & Contact with us to share your{" "}
            <br />
            memorable moments, to share with your best companion.
          </p>
          {/* Social Icons */}
          <div className="flex gap-2 text-2xl text-secondary mb-4 mt-6">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          {/* Get In Touch */}
          <div className="*:mb-2">
            <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
            <div className="flex   items-center gap-1 text-secondary font-semibold text-xs">
              <BsFillTelephoneFill />
              +880 1377888990
            </div>
            <div className="flex   items-center gap-1 text-secondary font-semibold text-xs">
              <IoMdMail />
              info@gmail.com
            </div>
            <div className="flex   items-center gap-1 text-secondary font-semibold text-xs">
              <FaLocationDot />
              30, Mirpur-12, Dhaka-1216
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-6">Contact with Us</h1>
          <input
            className="border rounded-sm mb-2 w-full px-2 py-1 max-w-[500px]"
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            className="border rounded-sm mb-2 w-full px-2 py-1 max-w-[500px]"
            type="text"
            placeholder="Email"
          />
          <br />
          <textarea
            className="border rounded-sm mb-2 w-full px-2 py-1 max-w-[500px]"
            type="text"
            placeholder="Message"
          />
          <br />
          <button className="border rounded-2xl px-4 py-1 text-secondary font-bold font">
            Send Message
          </button>
        </div>
      </div>
      <div className="bg-[url(/images/more/24.jpg)]">
        <h1 className="text-white font text-center py-2">
          Copyright Espresso Emporium ! All Rights Reserved
        </h1>
      </div>
    </>
  );
};

export default Footer;
