import "./Search.css";

const Search = () => {
  return (
    <form action="" className="search-form">
      <input
        type="search"
        placeholder="Search Here..."
        className="search-input"
      />
      <i className="fa fa-search"></i>
    </form>
  );
};

export default Search;
