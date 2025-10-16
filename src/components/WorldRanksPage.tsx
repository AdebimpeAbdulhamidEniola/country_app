import ControlsPanel from "./ControlsPanel";
import Search from "./Search";

const WorldRanksPage = () => {
  return (
    <div className="rounded-md  text-white bg-[#282B30] w-full h-screen mt-5 mx-auto px-4 py-5">
      <Search />
      <ControlsPanel />
    </div>
  );
};

export default WorldRanksPage;
