import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Layout from "../components/layout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;

const schema = yup
  .object({
    name: yup.string(),
    email: yup
      .string()
      .email()
      .matches(
        /^[a-zA-Z0-9+_.]+[a-zA-Z0-9+_.-]+@[a-zA-Z0-9_.-]+$/,
        "Please enter valid email"
      )
      .required("Email is required"),
    phone: yup
      .string()
      .matches(phoneRegEx, "Enter valid number")
      .required("Phone is required"),
  })
  .required();

const AboutPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(
    {
      defaultValues: {
        checkbox: false,
      },
    },
    {
      resolver: yupResolver(schema),
    },
    { mode: "onBlur" }
  );

  const onSubmit = (data) => {
    // let message = `
    // *Request information:*
    // Name: ${data.name}
    // Email: ${data.email}
    // Phone: ${data.phone}
    // Checkbox: ${data.checkbox}

    // *Additional information:*
    // _TransactionID: 11111111_
    // _BlockID: 22222222_
    // _Form name: contact_
    // [https://be-better.today]
    // ------
    // `;

    let message = `
    <b>Request information:</b>
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Checkbox: ${data.checkbox}

    <b>Additional information:</b>
    <i>TransactionID: 11111111</i>
    <i>BlockID: 22222222</i>
    <i>Form name: contact</i>
    <a href="https://be-better.today">https://be-better.today</a>
    ------
    `;

    const TOKEN = "5494380827:AAEulxKlPigRCbJkIixI2HmtsnEOSaXoTyg";
    const CHAT_ID = "-616555921";

    const TG_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    axios
      .post(TG_URL, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      })
      .then(() => alert("Заявка отправлена!"))
      .catch((error) => alert(error));
  };

  return (
    <Layout pageTitle="About Me">
      <p>Enter your name and phone number and we'll call you in 10 minutes!</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          name="name"
          {...register("name")}
          placeholder="Enter your name"
          className="w-full mb-1 border "
        />
        <p>{errors.name?.message}</p>
        <input
          name="email"
          {...register("email")}
          placeholder="Enter your email"
          className="w-full mb-1 border "
        />
        <p>{errors.email?.message}</p>
        <input
          name="phone"
          type="tel"
          {...register("phone")}
          placeholder="Enter your number"
          className="w-full mb-1 border "
        />
        <p>{errors.phone?.message}</p>
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input type="checkbox" {...field} />
              <span>Accept</span>
            </>
          )}
        />
        <input
          type="submit"
          className="button bg-indigo-500 rounded-md block mx-auto py-2 ps-14 w-32"
          disabled={isSubmitting}
        />
        <p>{errors.checkbox?.message}</p>
      </form>
    </Layout>
  );
};

export default AboutPage;
