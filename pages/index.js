import React from "react";
import GenericPage from "../components/generic-page";
import Book from "../components/book";
import { books } from "../js/data";

export default () => {
const booksJsx = books.map((b, i) => <Book {...b} key={i}/>);
  return (<GenericPage activePage="Home">
    {booksJsx} 
  </GenericPage>)
};
