import { useState } from "react";

const SearchName = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = props.bugs.filter((result) =>
      result.name["name-USen"].includes(searchInput)
    );
    props.setSearchResult(data);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
      <input type="submit" />
    </form>
  );
};

export default SearchName;
