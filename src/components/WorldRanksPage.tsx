import type { CountryResponse } from "../types";
import ControlsPanel from "./ControlsPanel";
import CountryTable from "./CountryTable";
import Search from "./Search";
import type { SortParameter, Region } from "../types";

const WorldRanksPage = ({
  isLoading,
  countries,
  error,
  sortFunc,
  filterCountry,
  search,
  debouncedSearch,
  selectedRegion,
  
}: {
  isLoading: boolean;
  countries: CountryResponse | null;
  error: string | null;
  sortFunc: (sortParameter: SortParameter) => void;
  filterCountry: (filterParam: Region) => void,
  search: string;
  debouncedSearch: (searchString: string) => void,
  selectedRegion: Region | "";
}) => {
  return (
    <div className="rounded-md  text-white bg-[#282B30] w-full min-h-screen mt-5 mx-auto px-4 py-5 lg:mt-60 overflow-scroll">
      <Search countries = {countries} search = {search}  debouncedSearch = {debouncedSearch}/>

      <div className="lg:grid lg:grid-cols-[400px_1fr] lg:gap-x-4">
        <ControlsPanel sortFunc ={sortFunc}  filterCountry = {filterCountry} selectedRegion={selectedRegion} />
        <CountryTable
          isLoading={isLoading}
          countries={countries}
          error={error}
         
        />
      </div>
    </div>
  );
};

export default WorldRanksPage;
