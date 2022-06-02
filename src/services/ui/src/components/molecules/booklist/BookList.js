import React, { useState, useEffect } from "react";
import Services from "../../../services";

const BookList = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Services.BookService.getAll().then((res) => {
      // res.data.forEach((book) => {
      //     setBooks((books) => [
      //         ...books,
      //         {reference: book.reference, aut}
      //     ])
      // })
      console.log(res);
    });
  }, []);

  return <div></div>;
};

export default BookList;
