import React from "react";

export default ({ src }) => (
  <React.Fragment>
    <img src={src} />
    <style jsx>{`
      img {
        width: 100%;
        border-radius: 15px;
        box-shadow: 0 0 50px #ccc;
        margin: 10px 0;
      }
    `}</style>
  </React.Fragment>
);
