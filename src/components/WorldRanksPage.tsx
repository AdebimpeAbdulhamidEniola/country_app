import ControlsPanel from "./ControlsPanel";
import CountryTable from "./CountryTable";
import Search from "./Search";

const WorldRanksPage = ({isLoading}: {isLoading:boolean}) => {
  return (
    <div className="rounded-md  text-white bg-[#282B30] w-full h-screen mt-5 mx-auto px-4 py-5">
      <Search />
      <ControlsPanel />
      <CountryTable isLoading = {isLoading} />
    </div>
  );
};

export default WorldRanksPage;
