"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import toast from "react-hot-toast";
// import emailjs from "@emailjs/browser";
type Props = {
  className: string;
};

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: any }) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    console.log("Thank you");

    // emailjs
    //   .send(
    //     "service_guesfej",
    //     "template_upnftkc",
    //     {
    //       from_name: form.name,
    //       to_name: "Aman Jain",
    //       from_email: form.email,
    //       to_email: "godhaaman26@gmail.com",
    //       message: form.message,
    //     },
    //     "mIaJ1bDyRvkBzVqW0"
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert(
    //         `Thank you ${form.name}. I will get back to you as soon as possible.`
    //       );

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f227d375-df02-405a-8881-7b1fe4b4f44e",
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully");
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div
      className={`flex-[0.75] bg-black-100 px-4 rounded-2xl z-0 ${props.className}`}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className=" flex flex-col gap-6"
      >
        <label className="flex flex-col">
          <span className="text-[#8C8C8C] font-medium mb-2">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="bg-tertiary py-2 px-6 placeholder:text-[#8C8C8C] border text-[#8C8C8C] rounded-lg font-medium bg-[#272727] border-[#6F6F6FB2]"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-[#8C8C8C] font-medium mb-2">E-mail</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className="bg-tertiary py-2 px-6 placeholder:text-[#8C8C8C] border text-[#8C8C8C] rounded-lg  font-medium bg-[#272727] border-[#6F6F6FB2]"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-[#8C8C8C] font-medium mb-2">Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="bg-tertiary py-2 px-6 placeholder:text-[#8C8C8C] border text-[#8C8C8C] rounded-lg  font-medium bg-[#272727] border-[#6F6F6FB2]"
          />
        </label>
        <button
          type="submit"
          className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-300 hover:text-white  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-md"
        >
          <span className="text-xl">{loading ? "Sending..." : "Send"}</span>
          <span className="absolute left-0 top-0 h-[2px] w-0  bg-white transition-all duration-100 group-hover:w-full" />

          {/* RIGHT */}
          <span className="absolute right-0 top-0 h-0 w-[2px] bg-white transition-all delay-100 duration-100 group-hover:h-full rounded-lg" />

          {/* BOTTOM */}
          <span className="absolute bottom-0 right-0 h-[2px] w-0  bg-white transition-all delay-200 duration-100 group-hover:w-full" />

          {/* LEFT */}
          <span className="absolute bottom-0 left-0 h-0 w-[2px]  bg-white transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
      </form>
    </div>
    // </div>
  );
};

export default Contact;
