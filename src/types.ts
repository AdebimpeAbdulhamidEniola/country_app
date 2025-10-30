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

export interface SingleCountry {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
  cca3: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  region: string;
  subregion?: string;
  capital?: string[];
  population: number;
  area: number;
  independent?: boolean;
  unMember?: boolean;
  currencies?: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [code: string]: string;
  };
  borders?: string[];
  timezones?: string[]
}


export type SortParameter = 'population' | 'name' | 'area'
export type BorderType = SingleCountry['borders']


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