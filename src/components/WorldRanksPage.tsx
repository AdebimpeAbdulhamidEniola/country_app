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
  filterCountry
}: {
  isLoading: boolean;
  countries: CountryResponse | null;
  error: string | null;
  sortFunc: (sortParameter: SortParameter) => void;
  filterCountry: (filterParam: Region) => void
}) => {
  return (
    <div className="rounded-md  text-white bg-[#282B30] w-full min-h-screen mt-5 mx-auto px-4 py-5 xl:mt-60">
      <Search />

      <div className="xl:grid xl:grid-cols-[400px_1fr] xl:gap-x-4">
        <ControlsPanel sortFunc ={sortFunc}  filterCountry = {filterCountry} />
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
