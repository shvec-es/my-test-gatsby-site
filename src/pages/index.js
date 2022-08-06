import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
// import { useIntl } from "gatsby-plugin-intl";

const IndexPage = () => {
  // const intl = useIntl();
  // const title = intl.formatMessage({ id: "title" });
  // const descr = intl.formatMessage({ id: "description" });

  return (
    <Layout pageTitle="Home Page">
      <h2>My test website</h2>
      <p>My website description</p>
      <StaticImage alt="Cute little cat" src="../images/cat1.jpeg" />
    </Layout>
  );
};

export default IndexPage;
