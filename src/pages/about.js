import * as React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";

const AboutPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout pageTitle="About Me">
      <p>Enter your name and phone number and we'll call you in 10 minutes!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          className="w-full mb-1 border "
        />
        <input
          type="tel"
          {...register("phone", { required: true })}
          className="w-full mb-1 border "
        />
        <input
          type="submit"
          className="bg-indigo-500 rounded-md block mx-auto py-2 ps-14 w-32"
        />
      </form>
    </Layout>
  );
};

export default AboutPage;
