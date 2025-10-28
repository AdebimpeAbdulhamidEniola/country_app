export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string,
  region: string;
  area: number;
  population: number;
}

export type SortParameter = 'population' | 'name' | 'area'


export type Region =
  | "Africa"
  | "Americas"
  | "Antarctic"
  | "Asia"
  | "Europe"
  | "Oceania";

export type PaginationProps = {
  totalCountries: number;
  dataPerPage: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}

export type CountryResponse = Country[]