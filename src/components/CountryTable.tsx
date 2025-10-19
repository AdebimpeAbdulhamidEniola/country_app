import LoadingSpinner from "./LoadingSpinner";

const CountryTable = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className="section mt-8">
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead className="text-gray-300 text-sm">
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area</th>
            <th>Region</th>
          </tr>
        </thead>

        <tbody>
          <tr> {isLoading && <LoadingSpinner />} </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
