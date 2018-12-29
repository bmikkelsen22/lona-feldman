import React from "react";
import GenericPage from "../components/generic-page";
import Image from "../components/image";

export default () => {
  const imagesLeftJsx = [1, 2, 3, 4, 5, 6].map((n, i) => (
    <Image key={i} src={`/static/art/${n}.jpg`} />
  ));
  const imagesRightJsx = [7, 8, 9, 10, 11, 12].map((n, i) => (
    <Image key={i} src={`/static/art/${n}.jpg`} />
  ));
  return (
    <GenericPage activePage="Artwork">
    <h2>Artwork</h2>
      <div className="container">
        <div className="left">{imagesLeftJsx}</div>
        <div>{imagesRightJsx}</div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
        }

        .left {
          margin-right: 20px;
        }

        @media (max-width: 800px) {
          .container {
            display: block;
          }

          .left {
            margin-right: 0;
          }
        }
      `}</style>
    </GenericPage>
  );
};
