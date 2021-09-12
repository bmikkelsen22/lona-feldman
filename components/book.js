import React from "react";

export default () => (
  <div className="container">
    <div className="image-container">
      <img src="/static/byb-cover.jpg" />
    </div>
    <div className="description">
      <h2>Believe you Belong</h2>
      <i>by Lona Feldman</i>
      <p>
        S.W. is a small saltwater fish looking for a place to belong. In his
        travels, he sees many new places and fish along the way. He finds his
        home in Mexico, and best of all, friends that love him: a little family
        consisting of Mr. Dove, Red Cardinal, a stone "Lucky Duck"... along with
        a human being.
      </p>
      <p className="price centered">Price: $17.99</p>
      <p className="centered">
        Contact{" "}
        <a href="mailto:lonafayefeldman@gmail.com">lonafayefeldman@gmail.com</a>{" "}
        for more information.
      </p>
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

      a,
      a:visited,
      a:active {
        color: #8c0000;
      }

      .centered {
        text-align: center;
      }

      .price {
        font-size: 1.2em;
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
