import { useNavigate } from "react-router-dom";
import type { Country } from "../types";

const CountryCard = ({ country }: { country: Country }) => {
  const navigate = useNavigate();

  return (
    <tr
      key={country.cca3}
      onClick={() => navigate(`/countries/${country.cca3}`)}
      className="cursor-pointer hover:bg-gray-800 transition"
    >
      <td className="px-2 py-2">
        <img
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-10 h-6 object-cover"
        />
      </td>
      <td className="pr-2 py-2">{country.name.common}</td>
      <td className="pr-2 py-2">{country.population.toLocaleString()}</td>
      <td className="pr-2 py-2">{country.area.toLocaleString()}</td>
      <td className="pr-2 py-2">{country.region}</td>
    </tr>
  );
};

export default CountryCard;
