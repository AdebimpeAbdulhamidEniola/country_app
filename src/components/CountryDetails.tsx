import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import type { BorderType, SingleCountry } from "../types";
import LoadingSpinner from "./LoadingSpinner";

const CountryDetails = () => {
  const [country, setCountry] = useState<SingleCountry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [Neighbours, setNeighbours] = useState<SingleCountry[]>(null);

  const { id } = useParams();

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

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen mt-20 bg-[#1B1D1F] flex flex-col items-center px-8">
      <div className="w-[120px] overflow-clip h-[90px] ">
        <img
          src={country?.flags.png}
          alt="flag"
          className="rounded-lg  w-full h-[100%]"
        />
      </div>
      <p className="text-2xl xl:text-4xl text-gray-200 font-bold mt-4">
        {country?.name.official}
      </p>
      <p className="text-[18px] text-[#6c727f] mt-2 ">
        {country?.region}.{country?.subregion}
      </p>

      {/* Details Card*/}
      <div className="w-full h-[250px] p-5 pb-1 rounded-2xl text-[#2b2b30] bg-[#2b2b30] m-4">
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

      <div className="w-full h-[250px] p-5 pb-1 rounded-2xl text-[#2b2b30] bg-[#2b2b30] m-4">
        <p className="text-white text-xl mb-4">Geography and Politics </p>
        <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
          <span className="text-[#6c727f]">Region</span>
          <span className="ml-auto text-[#d2d5da]">{country?.region} </span>
        </div>

        <div className="flex text-white gap-x-2 border-b-1 border-b-[#3a3d42] pb-2 ">
          <span className="text-[#6c727f]">Subregion</span>
          <span className="ml-auto text-[#d2d5da]">{country?.subregion} </span>
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

      <div className="w-full h-[250px] p-5 pb-1 rounded-2xl text-[#2b2b30] bg-[#2b2b30] m-4">
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

      <div className="text-2xl text-white mr-auto">
        Neighbouring Countries ({Neighbours?.length})
      </div>

      <div className="flex gap-8 flex-wrap mr-auto ">
        {Neighbours?.map((Neighbour) => {
          return (
            <div key={Neighbour.cca2} className="h-[130px] bg-[#282b30] p-4 ">
              <img
                src={Neighbour.flags.png}
                alt="Neighbouring country flag"
                className="rounded-md w-[200px] h-[65%]"
              />
            </div>
          ); 
        })}
      </div>
    </div>
  );
};

export default CountryDetails;
