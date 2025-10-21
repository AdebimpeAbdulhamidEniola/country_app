import { useEffect, useState } from "react"
import WorldRanksPage from "./components/WorldRanksPage"
import type { CountryResponse } from "./types"


const App = () => {
  //We fetch the data that we need in this component

  const [countries, setCountries] = useState<CountryResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string| null>(null)

  
  //Function to fetch the data
  const fetchCountry = async () => {
    setIsLoading(true)  //Starts loading
    setError(null)      //This removes old errors

    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,area,region')
      const data = await response.json()
      console.log(data)

      setCountries(data as CountryResponse)
    } catch (error) {
      if (error instanceof Error)
        setError(error.message)
      else
        setError("An unexpected error occurred")
    }

    setIsLoading(false)



  }

  useEffect( () => {
    fetchCountry()
  }, [])




  return (
    <div className="bg-[length:100%_auto] bg-[#1B1D1F] font-[Be_Vietnam_Pro,sans-serif] px-2 bg-[url('/resources/hero-image-sm.jpg')]  xl:bg-[url('/resources/hero-image.jpg')]      w-full   bg-no-repeat overflow-x-hidden">
      <img alt="" src="/resources/Logo.svg"   className="w-auto h-auto mx-auto pt-10"/>
      <WorldRanksPage isLoading = {isLoading}  countries = {countries as CountryResponse} error = {error}/>
    </div>
  )
}

export default App
