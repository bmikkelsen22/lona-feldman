import React from "react";
import Link from "next/link";

export default ({ href, selected, children }) => (
  <React.Fragment>
    <Link href={href}>
      <a className={selected === children ? "selected" : undefined}>
        {children}
      </a>
    </Link>
    <style jsx>{`
      a,
      a:visited,
      a:active {
        text-decoration: none;
        color: #8c0000;
        padding: 10px 0;
        margin-left: 20px;
        opacity: .7;
        font-weight: bold;
      }

      a:hover {
        opacity: 1;
        //text-shadow: 0 0 10px #eee;
      }

      .selected,
      .selected:visited,
      .selected:active {
        opacity: 1;
      }
    `}</style>
  </React.Fragment>
);
