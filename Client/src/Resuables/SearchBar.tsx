import "../assets/css/common.scss";
const SearchBar = ({ search, setSearch }: any) => {
  return (
    <div className="mt-2">
      <input
        className="search-bar"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
