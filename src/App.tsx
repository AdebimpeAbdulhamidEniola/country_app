import { useEffect, useState } from "react";
import WorldRanksPage from "./components/WorldRanksPage";
import type { CountryResponse, Region, SortParameter } from "./types";
import {Routes, Route} from 'react-router-dom'

const App = () => {
  const [allCountries, setAllCountries] = useState<CountryResponse | null>(null); // original full data
  const [countries, setCountries] = useState<CountryResponse | null>(null); // current (filtered/sorted)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all countries
  const fetchCountry = async () => {
    console.log("start fetching");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,cca3"
      );
      const data = await response.json();
      console.log(data);

      setAllCountries(data as CountryResponse); // store full list
      setCountries(data as CountryResponse); // store visible list
    } catch (error) {
      console.log(error);
      if (error instanceof Error) setError(error.message);
      else setError("An unexpected error occurred");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  // Sort handler
  const handleSort = (sortParameter: SortParameter): void => {
    if (!countries) return;

    const sortedCountries = [...countries].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      if (sortParameter === "name") {
        aValue = a.name.common;
        bValue = b.name.common;
      } else {
        aValue = a[sortParameter];
        bValue = b[sortParameter];
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return aValue - bValue;
      }

      return 0;
    });

    setCountries(sortedCountries);
  };

  // Filter handler (now uses allCountries)
  const handleFilter = (filterParam: Region): void => {
    if (!allCountries) return;

    console.log(filterParam);


    const filteredCountry = allCountries.filter(
      (country) => country.region === filterParam
    );

    setCountries(filteredCountry);
  };

  return (
    <div className="bg-[length:100%_auto] bg-[#1B1D1F] font-[Be_Vietnam_Pro,sans-serif] px-2 bg-[url('/resources/hero-image-sm.jpg')] xl:bg-[url('/resources/hero-image.jpg')] xl:bg-fixed w-full bg-no-repeat overflow-x-hidden">
      <img
        alt=""
        src="/resources/Logo.svg"
        className="w-auto h-auto mx-auto pt-10"
      />
      <WorldRanksPage
        isLoading={isLoading}
        countries={countries}
        error={error}
        sortFunc={handleSort}
        filterCountry={handleFilter}
      />

      
    </div>
  );
};

export default App;
