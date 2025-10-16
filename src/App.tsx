import WorldRanksPage from "./components/WorldRanksPage"
const App = () => {
  return (
    <div className="bg-[length:100%_auto] bg-[#1B1D1F] font-[Be_Vietnam_Pro,sans-serif] px-2 bg-[url('/resources/hero-image-sm.jpg')]  xl:bg-[url('/resources/hero-image.jpg')]      w-full   bg-no-repeat overflow-x-hidden">
      <img alt="" src="/resources/Logo.svg"   className="w-auto h-auto mx-auto pt-10"/>
      <WorldRanksPage  />
    </div>
  )
}

export default App
