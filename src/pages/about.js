import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Layout from "../components/layout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js/max";

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
  const [userLocation, setUserLocation] = React.useState("");

  const onSubmit = (data) => {
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

  axios("https://api.db-ip.com/v2/free/self")
    .then((data) => {
      console.log(data);
      const location = data.data.countryCode;
      console.log(location);
      setUserLocation(location.toLowerCase());
    })
    .catch((err) => console.log(err));

  console.log(userLocation);
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
        {/* <PhoneInputWithCountry
          international
          countryCallingCodeEditable={false}
          name="phone"
          placeholder="Enter phone number"
          control={control}
          rules={{
            required: true,
            validate: (value) => isValidPhoneNumber(value),
          }}
          className="w-full mb-1 border "
          metadata={metadata}
          defaultCountry="US"
          id="phone"
        />
        {errors["phone"] && <p className="error-message">Invalid Phone</p>} */}

        {/* <input
          name="phone"
          ref={phoneInput}
          type="tel"
          {...register("phone")}
          placeholder="Enter your number"
          className="w-full mb-1 border "
        /> */}
        {/* <p>{errors.phone?.message}</p> */}

        <PhoneInput
          name="phone"
          country={userLocation || "ua"}
          control={control}
          placeholder="Enter phone number"
          preferredCountries={["ua", "us"]}
          isValid={(value, country) => {
            if (isValidPhoneNumber(value, country.iso2.toUpperCase())) {
              return true;
            } else if (
              validatePhoneNumberLength(value, country.iso2.toUpperCase())
            ) {
              return validatePhoneNumberLength(
                value,
                country.iso2.toUpperCase()
              );
            } else {
              return "Invalid value";
            }
          }}
        />

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
