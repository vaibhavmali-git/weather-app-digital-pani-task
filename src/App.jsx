import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard } from "./Components";

function App() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  console.log(weather);

  // Function to submit city name for weather search
  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h3 className="font-bold tracking-wide text-2xl">Weather.</h3>
        <div className="bg-white w-[11rem] overflow-hidden shadow-1xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submitCity();
              }
            }}
            type="text"
            placeholder="Search city"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center h-[85vh]">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.windSpeed}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
      </main>
    </div>
  );
}

export default App;
