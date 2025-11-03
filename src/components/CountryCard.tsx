import { useNavigate } from "react-router-dom";
import type { Country } from "../types";

const CountryCard = ({ country }: { country: Country }) => {
  const navigate = useNavigate();

  return (
    <tr
      key={country.cca3}
      onClick={() => navigate(`/countries/${country.cca3}`)}
      className="cursor-pointer hover:bg-[#4c9aff] transition-all"
    >
      <td className="px-2 py-2 lg:py-3">
        <img
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-8 h-5 lg:w-10 lg:h-6 object-cover"
        />
      </td>
      <td className="px-2 py-2 lg:py-3 min-w-[120px]">{country.name.common}</td>
      <td className="px-2 py-2 lg:py-3 min-w-[100px]">{country.population.toLocaleString()}</td>
      <td className="px-2 py-2 lg:py-3 min-w-[80px]">{country.area.toLocaleString()}</td>
      <td className="px-2 py-2 lg:py-3 min-w-[80px]">{country.region}</td>
    </tr>
  );
};

export default CountryCard;