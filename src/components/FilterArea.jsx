import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("q") || "");

  const handleSearch = () => {
    searchParams.set("q", searchText);
    setSearchParams(searchParams);
  };

  const handleChangeSort = (e) => {
    searchParams.set("_s", e.target.value);
    setSearchParams(searchParams);
  };

  const handleChangeGenre = (e) => {
    searchParams.set("_g", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex mt-2 gap-2 justify-content-center align-items-center">
      <div className="d-flex">
        <select
          onChange={handleChangeSort}
          defaultValue={searchParams.get("_s")}
          className="form-select shadow border-2"
        >
          <option value="desc"> --- </option>
          <option value="asc">&#8593; &#8595;</option>
        </select>
        <select
          onChange={handleChangeGenre}
          defaultValue={searchParams.get("_g")}
          className="form-select shadow border-2"
        >
          <option value="">All</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Biography">Biography</option>
          <option value="Children's">Children's</option>
          <option value="Fiction">Fiction</option>
        </select>
      </div>
      <div className="d-flex gap-2">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control shadow border-2"
          type="text"
          placeholder="Ara"
        />
        <button onClick={handleSearch} className="btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterArea;
