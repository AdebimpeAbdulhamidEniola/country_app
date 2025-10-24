const Search = () => {
  return (
    <div className="xl:flex ">
      <div className="my-4 ">found {} countries</div>

      <div 
        className="xl:ml-auto  xl:w-[40%]   text-[#D2D5DA] rounded-2xl flex gap-6 pl-6 py-3 pr-2 transition-all duration-200 w-full bg-[#1b1d1f]"
      >
        <img alt="search-icon" src="/resources/Search.svg" />
        <input
          type="text"
          aria-label="search"
          placeholder="Search by Name, Region.."
          className="w-full "
        />
      </div>
    </div>
  );
};

export default Search;
