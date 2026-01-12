import type { ResultAPI } from "../types/ResultAPI";

interface checkInfo {
  data: ResultAPI;
}

function WeatherInfo({ data }: checkInfo) {
  return (
    <div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt="weather icon"
            className="
              object-cover
              w-56 h-56
              mx-auto
            "
          />

          <div
            className="
              text-center
            "
          >
            <h1
              className="
                mb-4
                text-8xl font-semibold leading-none
              "
            >
              {data.main.temp}°C
            </h1>
            <h2
              className="
                mb-7
                text-4xl
              "
            >
              {data.name}
            </h2>
          </div>
        </div>
    </div>
  );
}

export default WeatherInfo;
