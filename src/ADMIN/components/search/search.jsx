import "./search.scss";

const Search = ({ placeholder }) => {
  return (
    <label className="search-block">
      <i className="icon icon-search"></i>
      <input name="search" type="text" autoComplete="off" placeholder={placeholder} />
    </label>
  );
};

export default Search;
