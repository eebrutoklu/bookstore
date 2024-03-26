import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-1" style={{ width: "240px" }}>
      <img
        style={{ width: "230px", height: "330px", borderRadius: "5px" }}
        src={book.image}
        alt={book.title}
      />
      <div>
        <h6 className="fw-bold text-center">
          {book.title.length > 20
            ? `${book.title.slice(0, 20)}...`
            : book.title}
        </h6>
        <p className="text-center">{book.author}</p>
      </div>
      <Link to={`/product/${book.id}`} className="btn btn-warning">
        See Detail &rarr;
      </Link>
    </div>
  );
};

export default Card;
