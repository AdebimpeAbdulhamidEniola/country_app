import type { CountryResponse } from "../types";

const Search = ({
  countries,
  search,
  debouncedSearch
}: {
  countries: CountryResponse | null;
  search: string;
  debouncedSearch: (searchString: string) => void

}) => {
  console.log(`Countries is ${countries?.length}`);
  return (
    <div className="lg:flex ">
      <div className="my-4 ">Found {countries?.length} countries</div>

      <div className="lg:ml-auto  lg:w-[40%]   text-[#D2D5DA] rounded-2xl flex gap-6 pl-6 py-3 pr-2 transition-all duration-200 w-full bg-[#1b1d1f]">
        <img alt="search-icon" src="/resources/Search.svg" />
        <input
          type="text"
          aria-label="search"
          placeholder="Search by Name, Region.."
          className="w-full "
          value = {search}
          onChange = {(event) => debouncedSearch(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
