const ControlsPanel = () => {
  return (
    <div className="mt-10">

      <div className="flex flex-col gap-2">
        <label htmlFor="sort"> Sort by</label>
        <select id="sort" className="appearance-none outline-0 bg-[#282B30] cursor-pointer border-1 border-[#6c727f] py-1 rounded-lg bg-[url('/resources/Expand_down.svg')] bg-no-repeat bg-right">
          <option value="population">Population</option>
          <option value="name">Name</option>
          <option value="area">Area</option>
        </select>
      </div>


    </div>
  );
};

export default ControlsPanel;
