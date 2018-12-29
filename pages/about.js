import React from "react";
import GenericPage from "../components/generic-page";
import Image from '../components/image'

export default () => (
  <GenericPage activePage="About">
    <h2>About</h2>
    <Image src="/static/lona.jpg" />
    <p>
      Lona Faye Feldman is a watercolorist who lives in Eugene, Oregon with Ken,
      her husband of fifty-five years. Children, koi fish, and a small town in
      Baja California are three of her many loves. Lona enjoys collecting
      antique dolls, playing her grandfather's violin, and showing her dad's
      1935 Plymouth at car shows.
    </p>
    <style jsx>{`
    img {
      width: 100%;
      max-width: 600px;
      display: block;
      margin: 0 auto;
    }
    `}</style>
  </GenericPage>
);
