import { useState, useEffect } from "react";

import Book from "./Book";
import AddBook from "./AddBook";

let id = new Date().getTime();
function ensureBookID(book) {
  if (null == book.id) {
    book.id = id++;
  }
  return book;
}

export default function Library() {
  const [library, setLibrary] = useState(null);

  useEffect(() => {
    if (window.localStorage) {
      if (null == library) {
        setLibrary(JSON.parse(localStorage.getItem("booksLibrary") || "[]"));
      } else {
        localStorage.setItem("booksLibrary", JSON.stringify(library));
      }
    }
  }, [library]);

  const removeBook = (index) => {
    if (library[index]) {
      setLibrary([...library.slice(0, index), ...library.slice(index + 1)]);
    }
  };

  const addBook = (book) => {
    setLibrary([...library, ensureBookID(book)]);
  };

  const updateBook = (index, book) => {
    if (library[index]) {
      library[index] = ensureBookID(book);
      setLibrary([...library]);
    }
  };

  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" className="col-md-1">
              №
            </th>
            <th scope="col" className="col-md-3">
              Автор
            </th>
            <th scope="col" className="col-md-6">
              Название
            </th>
            <th scope="col" className="col-md-2">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {library ? (
            library.map((book, index) => (
              <Book
                book={book}
                index={index}
                removeBook={removeBook}
                updateBook={updateBook}
                key={book.id}
              />
            ))
          ) : (
            <tr>
              <th scope="col" className="col-md-12" colSpan="4">
                загружаем список книг...
              </th>
            </tr>
          )}
        </tbody>
      </table>
      {library && <AddBook onAddBook={addBook} />}
    </div>
  );
}
