import React from "react";
import GenericPage from "../components/generic-page";
import ImageCaption from "../components/image-caption";
import Image from "../components/image";
import InstaFeed from "instafeed.js";
import getConfig from "next/config";
import ErrorBoundary from "../components/error-boundary";

const { publicRuntimeConfig } = getConfig();

export default class ImageFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = { status: "loading" };
  }

  componentDidMount() {
    const feed = new InstaFeed({
      get: "user",
      userId: publicRuntimeConfig.instagramId,
      accessToken: publicRuntimeConfig.instagramToken,
      resoultion: "standard_resolution",
      mock: true,
      success: res => this.setState({ status: "success", data: res.data }),
      error: error => {
        this.setState({ status: "error" });
        console.log(error);
      }
    });
    feed.run();
  }

  renderImages() {
    const { status, data } = this.state;
    if (status === "loading") {
      return <p>Loading...</p>;
    }
    if (status === "error") {
      return <p>Error displaying images.</p>;
    }

    const imagesJsx = data.map((img, idx) => (
      <ErrorBoundary message="Error displaying image">
        <ImageCaption key={idx} data={img} />
      </ErrorBoundary>
    ));
    const [imagesLeftJsx, imagesRightJsx] = split(imagesJsx);

    return (
      <div className="parent">
        <div className="container left">{imagesLeftJsx}</div>
        <div className="container">{imagesRightJsx}</div>
        <style jsx>{`
          .parent {
            display: flex;
            flex-wrap: wrap;
          }

          .container {
            box-sizing: border-box;
            width: calc(50% - 10px);
            display: flex;
            flex-direction: column;
          }

          .left {
            margin-right: 20px;
          }

          @media (max-width: 800px) {
            .container {
              width: 100%;
            }

            .left {
              margin-right: 0;
            }
          }
        `}</style>
      </div>
    );
  }

  render() {
    return (
      <GenericPage activePage="Artwork">
        <h2>Artwork</h2>
        {this.renderImages()}
      </GenericPage>
    );
  }
}

// export default () => {
//   const imagesLeftJsx = [1, 2, 3, 4, 5, 6].map((n, i) => (
//     <Image key={i} src={`/static/art/${n}.jpg`} />
//   ));
//   const imagesRightJsx = [7, 8, 9, 10, 11, 12].map((n, i) => (
//     <Image key={i} src={`/static/art/${n}.jpg`} />
//   ));
//   return (
//     <GenericPage activePage="Artwork">
//     <h2>Artwork</h2>
//       <div className="container">
//         <div className="left">{imagesLeftJsx}</div>
//         <div>{imagesRightJsx}</div>
//       </div>

//       <style jsx>{`
//         .container {
//           display: flex;
//         }

//         .left {
//           margin-right: 20px;
//         }

//         @media (max-width: 800px) {
//           .container {
//             display: block;
//           }

//           .left {
//             margin-right: 0;
//           }
//         }
//       `}</style>
//     </GenericPage>
//   );
// };

function split(arr) {
  const larr = [];
  const rarr = [];
  arr.forEach((e, i) => {
    if (i % 2 === 0) {
      larr.push(e);
    } else {
      rarr.push(e);
    }
  });

  return [larr, rarr];
}
