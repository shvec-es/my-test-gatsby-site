import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { withTrans } from "../i18n/withTrans";
import {
  container,
  heading,
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import LanguageMenu from "./languageMenu";

const Layout = ({ pageTitle, t, i18n, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <LanguageMenu />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default withTrans(Layout);
