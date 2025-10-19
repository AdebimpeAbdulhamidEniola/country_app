const Search = () => {
  return (
    <div>
      <div className="mt-3">found {} countries</div>

      <div 
        className="mt-6 text-[#D2D5DA] rounded-2xl flex gap-6 pl-6 py-3 pr-2 transition-all duration-200 w-full bg-[#1b1d1f]"
      >
        <img alt="search-icon" src="/resources/Search.svg" />
        <input
          type="text"
          aria-label="search"
          placeholder="Search by Name, Region.."
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Search;
