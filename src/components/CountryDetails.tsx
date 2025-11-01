import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import type { SingleCountry } from "../types";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const [country, setCountry] = useState<SingleCountry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [Neighbours, setNeighbours] = useState<SingleCountry[] | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  //Language fetching
  const languages = country?.languages
    ? Object.values(country.languages).join(", ")
    : "";

  const currencies = country?.currencies
    ? Object.values(country.currencies)
        .map((currency) => `${currency.name} (${currency.symbol})`)
        .join(", ")
    : "";

  const fetchSingleCountry = useCallback(async () => {
    console.log("start fetching");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${id}`
      );

      console.log(`https://restcountries.com/v3.1/alpha/${id}`);

      const data: SingleCountry[] = await response.json();

      setCountry(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) setError(error.message);
      else setError("An unexpected error occurred");
    }

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    const fetchNeighbours = async () => {
      if (!country?.borders) return;

      const countryNeighbours: SingleCountry[] = [];

      for (let i = 0; i < country.borders.length; i++) {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${country.borders[i]}`
          );

          const data: SingleCountry[] = await response.json();
          countryNeighbours.push(data[0]);
        } catch (error) {
          console.error("Error fetching neighbour:", error);
        }
      }

      console.log(countryNeighbours);
      setNeighbours(countryNeighbours);
    };

    fetchNeighbours();
  }, [country]);

  useEffect(() => {
    fetchSingleCountry();
  }, [fetchSingleCountry]);

  if (error) return <p>{error}</p>;

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="min-h-screen mt-20 bg-[#1B1D1F] flex flex-col items-center px-4 py-6 w-full">
      <div className="mx-auto mt-14 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 text-center lg:text-left">
          {/* Flag */}
          <div className="w-[140px] h-[100px] rounded-lg overflow-hidden shadow-md">
            <img
              src={country?.flags.png}
              alt={`${country?.name?.common} flag`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Country info */}
          <div>
            <p className="text-3xl lg:text-5xl font-bold text-white">
              {country?.name?.common}
            </p>
            <p className="text-[#9ca3af] text-lg mt-2">
              {country?.region} • {country?.subregion}
            </p>
          </div>
        </div>
      </div>

  <div className="lg:flex lg:gap-2.5">
        {/* Details Card*/}
        <div className="w-full min-h-[300px] p-5 pb-1 rounded-2xl text-[#2b2b30] bg-[#2b2b30] m-4 ">
          <p className="text-white text-xl mb-4">Basic Information </p>
          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Official Name</span>
            <span className="ml-auto text-[#d2d5da]">
              {country?.name.official}{" "}
            </span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Capital</span>
            <span className="ml-auto text-[#d2d5da]">{country?.capital} </span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Population</span>
            <span className="ml-auto text-[#d2d5da]">
              {country?.population.toLocaleString()}{" "}
            </span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Area</span>
            <span className="ml-auto text-[#d2d5da]">
              {country?.area.toLocaleString()}{" "}
            </span>
          </div>
        </div>

        {/* Geography and Politics Card */}

        <div className="w-full min-h-[300px] p-5 pb-1 rounded-2xl text-[#2b2b30] bg-[#2b2b30] m-4">
          <p className="text-white text-xl mb-4">Geography and Politics </p>
          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Region</span>
            <span className="ml-auto text-[#d2d5da]">{country?.region} </span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Subregion</span>
            <span className="ml-auto text-[#d2d5da]">
              {country?.subregion}{" "}
            </span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">UN Member</span>
            <span className="ml-auto text-[#d2d5da]">{`${country?.unMember}`}</span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Independent</span>
            <span className="ml-auto text-[#d2d5da]">
              {`${country?.independent}`}{" "}
            </span>
          </div>
        </div>

        {/* Culture and Economy */}

        <div className="w-full min-h-[300px] p-5 pb-1 rounded-2xl text-[#2b2b30] bg-[#2b2b30] m-4">
          <p className="text-white text-xl mb-4">Culture and Economy </p>
          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Languages</span>
            <span className="ml-auto text-[#d2d5da]">{languages} </span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Currencies</span>
            <span className="ml-auto text-[#d2d5da]">{currencies} </span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Timezone</span>
            <span className="ml-auto text-[#d2d5da]">{`${country?.timezones}`}</span>
          </div>

          <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
            <span className="text-[#6c727f]">Continent</span>
            <span className="ml-auto text-[#d2d5da]">
              {`${country?.region}`}{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="text-2xl text-white mr-auto">
        Neighbouring Countries ({Neighbours?.length})
      </div>

      <div className="flex gap-8 flex-wrap mr-auto ">
        {Neighbours?.map((Neighbour) => {
          return (
            <div
              key={Neighbour.cca2}
              className="h-[130px] bg-[#282b30] p-2 cursor-pointer hover:bg-[#4c9aff] transition"
              onClick={() => navigate(`/countries/${Neighbour?.cca3}`)}
            >
              <img
                src={Neighbour.flags.png}
                alt="Neighbouring country flag"
                className="rounded-md w-[200px] h-[65%]"
              />
              <div className="text-center text-white">
                {Neighbour?.name?.common}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryDetails;
