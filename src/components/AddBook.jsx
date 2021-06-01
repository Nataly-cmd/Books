import { useState } from "react";

export default function AddBook({ onAddBook } = {}) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const onAdd = () => {
    if (author && title) {
      onAddBook({
        author,
        title
      });
      setAuthor("");
      setTitle("");
    }
  };

  return (
    <form className="row g-3 mt-3">
      <div className="col-md-6">
        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className="form-control"
          placeholder="Автор"
          aria-label="Автор"
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="form-control"
          placeholder="Название"
          aria-label="Название"
        />
      </div>
      <div className="col-12 text-center">
        <button type="button" className="btn btn-primary mt-3" onClick={onAdd}>
          Добавить книгу
        </button>
      </div>
    </form>
  );
}
