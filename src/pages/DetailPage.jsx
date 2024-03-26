import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        console.log(err);
        navigate("/undefined"), { state: err.message };
      });
  }, []);

  return (
    <div>
      {!book && (
        <p className="d-flex justify-content-center align-items-center">
          Yükleniyor.
        </p>
      )}

      {book && (
        <div className="row mx-5 p-2">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={book.image}
              style={{ width: "300px", height: "400px", borderRadius: "5px" }}
              className="img-fluid shadow"
              alt={book.title}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-2">
            <div>
              <h4 className="my-3 shadow p-2"> {book.title} </h4>
            </div>
            <BookInfo value={book.author} label={"Author:"} />
            <BookInfo value={book.genre} label={"Genre:"} />
            <BookInfo value={book.long_description} label={"Description:"} />
            <BookInfo value={book.page_count} label={"Page Count:"} />
            <BookInfo
              value={book.publication_year}
              label={" publication_year:"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

//2.component

const BookInfo = ({ label, value }) => {
  return (
    <>
      <div className="container" style={{ maxWidth: 500 }}>
        <p className="">
          <span className=" bg-dark-subtle p-1 rounded fw-bold">{label} </span>
          <span className="px-2 "> {value} </span>
        </p>
      </div>
    </>
  );
};
