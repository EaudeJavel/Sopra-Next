import { useState } from "react";

const SearchForm = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleSearchResult = (e) => {
    setSearch(e.target.value);
    // pass data here
    onSearchChange(e.target.value);
  };

  return (
    <form className="form-control">
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Type a location here"
        value={search}
        onChange={handleSearchResult}
      />
    </form>
  );
};

export default SearchForm;
