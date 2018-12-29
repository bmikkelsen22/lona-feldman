import React from "react";
import NavLink from "./nav-link";
import Head from "next/head";

export default ({ children, activePage }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <header>
      <h1>Lona Faye Feldman</h1>
      <nav>
        <NavLink href="/" selected={activePage}>
          Home
        </NavLink>
        <NavLink href="./artwork" selected={activePage}>
          Artwork
        </NavLink>
        <NavLink href="./about" selected={activePage}>
          About
        </NavLink>
      </nav>
    </header>
    <main>{children}</main>
    <style jsx>{`
      header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 20px;
        z-index: -1000;
        background-image: url("/static/background.jpg");
        background-repeat: repeat;
        background-size: auto 100%;
      }

      h1 {
        color: #8c0000;
      }

      nav {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      main {
        margin: 20px auto;
        max-width: 1024px;
      }

      @media (max-width: 1024px) {
        main {
          margin: 20px;
        }
      }

      :global(html, body) {
        margin: 0;
        border: 0;
        font-family: Georgia;
        font-size: 1em;
      }
    `}</style>
  </div>
);
