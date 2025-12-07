
"use client";

import { useEffect, useState } from "react";

const DEFAULT_CITIES = [
  "Howrah",
  "Kolkata",
  "Patna",
  "Bihar",
  "Mumbai",
  "Delhi",
  "Chennai",
];

export default function Weather() {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const ENV_CITY = process.env.NEXT_PUBLIC_DEFAULT_CITY || "Howrah";

  const [city, setCity] = useState(() => {
    if (typeof window === "undefined") return ENV_CITY;
    return localStorage.getItem("newsu_city") || ENV_CITY;
  });

  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Geo-location fetch
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCity(`${latitude},${longitude}`);
      },
      () => console.warn("Location permission denied")
    );
  }, []);

  // Fetch weather
  useEffect(() => {
    localStorage.setItem("newsu_city", city);
    async function loadWeather() {
      setLoading(true);
      setError(null);

      try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
          city
        )}?unitGroup=metric&key=${API_KEY}&contentType=json`;

        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok) setError("Unable to fetch weather");
        else setWeather(data);
      } catch {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    }

    if (API_KEY) loadWeather();
  }, [city, API_KEY]);

  if (loading)
    return (
      <div className="animate-pulse p-2 bg-red-200/40 rounded-xl text-sm">
        Loading weather...
      </div>
    );

  if (error)
    return <p className="text-red-500 text-sm">Weather unavailable: {error}</p>;

  const today = weather.days[0];
  const iconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st Set - Color/${today.icon}.svg`;

  return (
    <div
      className="
        p-4
        bg-gradient-to-r from-red-600 via-red-500 to-red-400
        dark:bg-gradient-to-r dark:from-red-950 dark:via-red-900 dark:to-red-800
        border border-yellow-400/40 dark:border-red-700/40
        rounded-2xl backdrop-blur-lg shadow-lg
        hover:shadow-xl hover:scale-[1.01]
        transition-all duration-300
      "
    >
      <div className="flex flex-col md:flex-row justify-between gap-4">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-3">

          {/* Main Weather Row */}
          <div
            className="
              p-4 flex items-center gap-4
              bg-white/20 dark:bg-white/5
              rounded-xl border border-white/30 dark:border-red-800
              shadow-md hover:shadow-lg hover:scale-[1.01]
              transition
            "
          >
            <img src={iconUrl} alt="Weather" className="w-12 h-12" />

            <div className="leading-tight">
              <p className="text-xl font-bold text-white">{weather.address}</p>
              <p className="text-sm text-yellow-200">{today.conditions}</p>
            </div>

            <p className="ml-auto text-3xl font-extrabold text-yellow-300 drop-shadow-md">
              {Math.round(today.temp)}°C
            </p>
          </div>

          {/* City Label */}
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span>📍</span> Select your city
          </div>

          {/* Dropdown */}
          <select
            className="
              w-full max-w-xs px-3 py-2 text-sm
              bg-white/20 dark:bg-black/40
              text-white
              border border-yellow-300/40 dark:border-red-700
              rounded-lg shadow-sm
              hover:shadow-md hover:bg-white/30
              transition
            "
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            {DEFAULT_CITIES.map((c) => (
              <option key={c} value={c} className="text-red-900">
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* RIGHT SIDE — Compact weather details */}
        <div className="flex flex-col md:w-1/3 gap-2">

          {/* Feels Like */}
          <div
            className="
              flex items-center gap-3 p-3
              bg-white/20 dark:bg-white/5
              rounded-xl border border-white/30 dark:border-red-700
              shadow-sm hover:shadow-md transition
            "
          >
            <img
              src='https://cdn-icons-png.flaticon.com/512/869/869869.png'
              className="w-6 h-6"
            />
            <div>
              <p className="text-[10px] font-bold text-yellow-200">Feels Like</p>
              <p className="text-lg font-bold text-white">{Math.round(today.feelslike)}°C</p>
            </div>
          </div>

          {/* Humidity */}
          <div
            className="
              flex items-center gap-3 p-3
              bg-white/20 dark:bg-white/5
              rounded-xl border border-white/30 dark:border-red-700
              shadow-sm hover:shadow-md transition
            "
          >
            <img
              src='https://cdn-icons-png.flaticon.com/512/3262/3262970.png'
              className="w-6 h-6"
            />
            <div>
              <p className="text-[10px] font-bold text-yellow-200">Humidity</p>
              <p className="text-lg font-bold text-white">{today.humidity}%</p>
            </div>
          </div>

          {/* Wind */}
          <div
            className="
              flex items-center gap-3 p-3
              bg-white/20 dark:bg-white/5
              rounded-xl border border-white/30 dark:border-red-700
              shadow-sm hover:shadow-md transition
            "
          >
            <img
              src='https://cdn-icons-png.flaticon.com/512/5538/5538591.png'
              className="w-6 h-6"
            />
            <div>
              <p className="text-[10px] font-bold text-yellow-200">Wind</p>
              <p className="text-lg font-bold text-white">{today.windspeed} km/h</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


