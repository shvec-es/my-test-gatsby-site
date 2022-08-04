import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Cute little cat" src="../images/cat1.jpeg" />
    </Layout>
  );
};

export default IndexPage;

// export const Head = () => (
//   <link href="/dist/output.css" rel="stylesheet"></link>
// );
