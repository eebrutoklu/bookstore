import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const order = searchParams.get("_s");
  const genre = searchParams.get("_g");
  const orderP = "↑↓";

  useEffect(() => {
    const params = {
      _sort: order === "asc" ? "title" : "-title",
      q: query,
    };

    if (genre) {
      params.genre = genre;
    }

    axios
      .get("http://localhost:3000/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [query, order, genre]);

  return (
    <div className="container d-flex flex-column gap-5 justify-content-center align-items-center">
      <div className="flex-grow-1 mx-5 p-3">
        <h5 className="text-center shadow">{books?.length} kitap bulundu </h5>
        <FilterArea />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-1 mt-2">
          {books?.map((book) => (
            <div className="col" key={book.id}>
              <Card book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
