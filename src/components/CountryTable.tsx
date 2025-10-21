import type { CountryResponse } from "../types";
import LoadingSpinner from "./LoadingSpinner";

const CountryTable = ({
  isLoading,
  countries,
  error
}: {
  isLoading: boolean;
  countries: CountryResponse | null ;
  error: string | null
}) => {
  if (error) {
    return <p>{error}</p>
  }




  return (
    <div className="section mt-8 relative">
      <table className="w-full text-left border-separate border-spacing-y-2 table-fixed">
        <thead className="text-gray-300 text-sm">
          <tr>
            <th className="w-[10%] ">Flag</th>
            <th className="w-[30%] ">Name</th>
            <th className="w-[20%]">Population</th>
            <th className="w-[20%]">Area</th>
            <th className="w-[20%]">Region</th>
          </tr>
        </thead>

        <tbody>
          {countries && countries.length > 0 ? (
            countries.map((country) => (
              <tr key={country.name.common}>
                <td className="px-2 py-2">
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    className="w-10 h-6 object-cover"
                  />
                </td>
                <td className="px-2 py-2 ">{country.name.common}</td>
                <td className="px-2 py-2">{country.population}</td>
                <td className="px-2 py-2">{country.area}</td>
                <td className="px-2 py-2 ">{country.region}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-6 text-center text-gray-500">
                {isLoading ? <LoadingSpinner /> : 'No data available'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
{/* 
      {isLoading && (
        <div className="absolute inset-25 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )} */}
    </div>
  );
};

export default CountryTable;
