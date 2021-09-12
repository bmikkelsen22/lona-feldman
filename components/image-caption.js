import React from "react";

export default ({ data }) => {
  const src = data.images.standard_resolution.url;
  const desc = data.caption ? data.caption.text : undefined;

  let descJsx;
  if (desc) {
    descJsx = desc.split("\n").map((s, i) => <p key={i}>{s}</p>);
  }

  return (
    <div className="container">
      <img src={src} />
      <div className="text">{descJsx}</div>
      <style jsx>{`
        .container {
          border-radius: 15px;
          box-shadow: 0 0 50px #ccc;
          margin: 10px 0;
          overflow: hidden;
        }

        .text {
          margin: 0 20px;
        }

        img {
          width: 100%;
          display: block;
        }
      `}</style>
    </div>
  );
};
