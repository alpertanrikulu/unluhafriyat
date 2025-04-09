"use client";

import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { CheckCircle, XCircle } from "lucide-react";

const SendMail = () => {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_qzuuvhr", "template_sei09gh", form.current, {
        publicKey: "Si7VtRg39qqvDHEpE",
      })
      .then(
        () => {
          setEmail("");
          setMessage("");
          setName("");
          toast("Mesajınız Başarılı Şekilde Gönderildi", {
            description: "En kısa sürede sizinle iletişime geçeceğiz.",
            duration: 10000,
            icon: <CheckCircle className="text-green-500" />,
            richColors: true,
            position: "top-right",
            className: "border border-green-500 shadow-lg shadow-green-500/10",
          });
        },
        (error) => {
          console.log("BİR HATA OLUŞTU", error.text);
          toast("Mesaj gönderilirken bir hata oluştu!", {
            description: "Lütfen daha sonra tekrar deneyin.",
            duration: 10000,
            icon: <XCircle className="text-red-500" />,
            richColors: true,
            position: "top-right",
            className: "border border-red-500 shadow-lg shadow-red-500/10",
          });
        }
      );
  };

  return (
    <form
      className="md:p-10 flex flex-col justify-center items-center gap-3 md:gap-5 w-full"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="px-5 py-2 bg-white rounded-2xl w-full">
        <input
          type="text"
          className="focus:outline-none text-2xl w-full"
          id="username"
          name="username"
          aria-describedby="nameHelp"
          placeholder="İsim Soyisim*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="px-5 py-2 bg-white rounded-2xl w-full">
        <input
          type="email"
          className="focus:outline-none text-2xl w-full"
          id="useremail"
          name="useremail"
          aria-describedby="emailHelp"
          placeholder="E-posta Adresi*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <textarea
        className="px-5 py-2 bg-white rounded-2xl w-full text-xl"
        id="usermessage"
        name="usermessage"
        rows={8}
        placeholder="Mesajınızı Yazın...*"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-amber-300 py-3 px-8 hover:bg-amber-400 hover:shadow-2xl rounded-2xl text-2xl font-semibold transition-all duration-300 cursor-pointer"
      >
        Gönder
      </button>
    </form>
  );
};

export default SendMail;
