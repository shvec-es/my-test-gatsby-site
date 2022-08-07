import * as React from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  const { register, handleSubmit } = useForm();
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const onSubmit = (data) => {
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
