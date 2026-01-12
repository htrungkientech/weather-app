//Import
import axios from "axios";
import { urlAPI, myKey } from "../config/ConfigAPI";
import { useEffect, useState } from "react";
import SearchWeather from "../components/SearchWeather";
import WeatherInfo from "../components/WeatherInfo";
import WeatherStats from "../components/WeatherStats";

//Type
import type { ResultAPI } from "../types/ResultAPI";

function Weather() {
  const [searchWeather, setSearchWeather] = useState("");
  const [result, setResult] = useState<ResultAPI | null>(null);
  const [error, setError] = useState("");
  const callAPI = async () => {
    try {
      setError("");

      const res = await axios.get<ResultAPI>(
        `${urlAPI}?q=${searchWeather.trim()}&appid=${myKey}&units=metric`,
      );
      setResult(res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message);
      } else {
        console.log("Lỗi ko xác định!");
      }
    }
  };

  useEffect(() => {
    if (!searchWeather.trim()) {
      setResult(null);
      setError("");
      return;
    }

    const id = setTimeout(() => {
      callAPI();
    }, 500);

    return () => clearTimeout(id);
  }, [searchWeather]);

  return (
    <div
      className="
        flex
        h-screen
        px-4
        bg-gray-100
        items-center justify-center
      "
    >
      <div
        className="
          max-w-lg w-full
          px-8 py-10
          text-[#FFFFFF]
          bg-linear-to-t from-[#003D8E] to-[#00B6DB]
          rounded-lg
          shadow-lg
        "
      >
        <SearchWeather
          search={searchWeather}
          onSearch={setSearchWeather}
        ></SearchWeather>

        {!result && (
          <p
            className="
              mt-5
              text-center font-semibold text-[#FFFFFF]
            "
          >
            Enter your city, in order to see the weather 🌤️
          </p>
        )}
        {error && (
          <p
            className="
              text-center font-medium text-amber-200
              uppercase py-1
            "
          >
            {error}!
          </p>
        )}
        {result && (
          <div>
            <WeatherInfo data={result}></WeatherInfo>
            <WeatherStats data={result}></WeatherStats>
          </div>
        )}
      <footer className="text-center font-semibold text-[16px] border-sky-300 border-2 rounded-2xl mt-3.5 py-1">
        &copy; {new Date().getFullYear()} Hoàng Trung Kiên. All Rights Reserved.
      </footer>

      </div>
    </div>
  );
}

export default Weather;
