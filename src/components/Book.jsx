import { useState, useRef, useLayoutEffect } from "react";

export default function Book({ book, index, removeBook, updateBook } = {}) {
  // EDIT AUTHOR
  const [editAuthor, setEditAuthor] = useState(false);
  const authorInputRef = useRef();

  const startEditAuthor = () => {
    setEditAuthor(true);
  };
  useLayoutEffect(() => {
    if (editAuthor && authorInputRef.current) {
      authorInputRef.current.value = book.author;
      authorInputRef.current.focus();
    }
  }, [editAuthor, book.author]);
  const saveAuthor = (event) => {
    const author = event.target.value;
    if (author) {
      setEditAuthor(false);
      if (author !== book.author) {
        updateBook(index, { ...book, author });
      }
    }
  };
  const saveAuthorOnEnter = (event) => {
    if (event.key === "Enter") {
      saveAuthor(event);
    } else if (event.key === "Escape") {
      setEditAuthor(false);
    }
  };

  // EDIT TITLE
  const [editTitle, setEditTitle] = useState(false);
  const titleInputRef = useRef();

  const startEditTitle = () => {
    setEditTitle(true);
  };
  useLayoutEffect(() => {
    if (editTitle && titleInputRef.current) {
      titleInputRef.current.value = book.title;
      titleInputRef.current.focus();
    }
  }, [editTitle, book.title]);
  const saveTitle = (event) => {
    const title = event.target.value;
    if (title) {
      setEditTitle(false);
      if (title !== book.title) {
        updateBook(index, { ...book, title });
      }
    }
  };
  const saveTitleOnEnter = (event) => {
    if (event.key === "Enter") {
      saveTitle(event);
    } else if (event.key === "Escape") {
      setEditTitle(false);
    }
  };

  return (
    <tr>
      <th scope="row" className="align-middle col-md-1">
        {index + 1}
      </th>
      <td className="align-middle col-md-3">
        {editAuthor ? (
          <input
            type="text"
            className="form-control"
            placeholder="Автор"
            ref={authorInputRef}
            onBlur={saveAuthor}
            onKeyDown={saveAuthorOnEnter}
          />
        ) : (
          <button
            className="btn btn-sm btn-link text-body text-start text-decoration-none"
            onClick={startEditAuthor}
          >
            {book.author}
          </button>
        )}
      </td>
      <td className="align-middle col-md-4">
        {editTitle ? (
          <input
            type="text"
            className="form-control"
            placeholder="Название"
            ref={titleInputRef}
            onBlur={saveTitle}
            onKeyDown={saveTitleOnEnter}
          />
        ) : (
          <button
            className="btn btn-sm btn-link text-body text-start text-decoration-none"
            onClick={startEditTitle}
          >
            {book.title}
          </button>
        )}
      </td>
      <td className="align-middle text-end col-md-2">
        <button
          className="text-danger btn btn-sm btn-link"
          onClick={() => removeBook(index)}
        >
          удалить
        </button>
      </td>
    </tr>
  );
}
