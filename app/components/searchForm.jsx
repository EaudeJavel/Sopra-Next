import { useState } from "react";

const SearchForm = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleSearchResult = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <form className="form-control">
      <input
        className="input input-bordered max-w-md"
        type="text"
        placeholder="Rechercher"
        value={search}
        onChange={handleSearchResult}
      />
    </form>
  );
};

export default SearchForm;
