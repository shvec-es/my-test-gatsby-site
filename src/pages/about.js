import * as React from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  // const TOKEN = "5494380827:AAEulxKlPigRCbJkIixI2HmtsnEOSaXoTyg";
  // const CHAT_ID = "-616555921";
  // const TG_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const { register, handleSubmit } = useForm();
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const onSubmit = (data) => {
    // let message = `<b>Вы получили новую заявку с сайта!</b>\n`;
    // message += `<b>Отправитель:</b>${data.name}\n`;
    // message += `<b>Номер телефона:</b>${data.phone}`;

    // fetch(TG_URL, {
    //   method: "POST",
    //   chat_id: CHAT_ID,
    //   text: "???",
    //   parse_mode: "html",
    // })
    //   .then((response) => response.json())
    //   .then((ans) => console.log(ans))
    //   .catch((error) => alert(error));

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };

  return (
    <Layout pageTitle="About Me">
      <p>Enter your name and phone number and we'll call you in 10 minutes!</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          name="name"
          {...register("name", { required: true, maxLength: 20 })}
          className="w-full mb-1 border "
        />
        <input
          name="phone"
          type="tel"
          {...register("phone", { required: true })}
          className="w-full mb-1 border "
        />
        <input
          type="submit"
          className="button bg-indigo-500 rounded-md block mx-auto py-2 ps-14 w-32"
        />
      </form>
    </Layout>
  );
};

export default AboutPage;
