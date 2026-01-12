import type { ResultAPI } from "../types/ResultAPI";

interface checkInfo {
  data: ResultAPI;
}

function WeatherStats({ data }: checkInfo) {
  return (
    <div>
      <div
        className="
                grid grid-cols-2
              "
      >
        <div
          className="
                  flex
                  items-center justify-center gap-4
                "
        >
          <i
            className="
                    text-2xl
                    opacity-80
                    fa-solid fa-water
                  "
          ></i>
          <div>
            <p
              className="
                      text-2xl
                    "
            >
              {data.main.humidity} %
            </p>
            <p
              className="
                      text-lg
                    "
            >
              Humidity
            </p>
          </div>
        </div>

        <div
          className="
                  flex
                  items-center gap-3
                "
        >
          <i
            className="
                    text-2xl
                    opacity-80
                    fa-solid fa-wind
                  "
          ></i>
          <div>
            <p
              className="
                      text-2xl
                    "
            >
              {data.wind.speed} Km/h
            </p>
            <p
              className="
                      text-lg
                    "
            >
              Wind Speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherStats;
