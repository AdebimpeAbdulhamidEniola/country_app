import type { CountryResponse } from "../types";
import LoadingSpinner from "./LoadingSpinner";

const CountryTable = ({
  isLoading,
  countries,
  error
}: {
  isLoading: boolean;
  countries: CountryResponse;
  error: string | null
}) => {
  if (error) {
    return <p>{error}</p>
  }
  
  return (
    <div className="section mt-8 relative">
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
          {countries.map((country) => (
            <tr key={country.name.common}>
              <td>
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className="w-10 h-6 object-cover"
                />
              </td>
              <td>{country.name.common}</td>
              <td>{country.population}</td>
              <td>{country.area}</td>
              <td>{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isLoading && (
        <div className="absolute inset-25 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default CountryTable;
