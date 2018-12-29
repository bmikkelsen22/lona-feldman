import React from "react";

export default ({ title, imageUrl, description, amazonLink }) => (
  <div className="container">
    <div className="image-container">
      <img src={imageUrl} />
    </div>
    <div className="description">
      <h2>{title}</h2>
      <i>by Lona Feldman</i>
      <p>{description}</p>
    </div>
    <style jsx>{`
      .container {
        display: flex;

        //box-sizing: border-box;
        //padding: 20px;
        border-radius: 15px;
        box-shadow: 0 0 50px #ccc;
        overflow: hidden;
      }

      .description {
        flex-basis: 300px;
        min-width: 300px;
        margin: 0 20px 20px 20px;
      }

      .image-container {
        flex-grow: 1;
      }

      //mobile
      @media (max-width: 600px) {
        .container {
          display: block;
        }
        
        .description {
          min-width: auto;
        }
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    `}</style>
  </div>
);
