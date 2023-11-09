"use client";
import { useEffect, useState } from "react";
import { GETCity } from "../api/route";

import Navbar from "../components/navbar";
import SearchForm from "../components/searchForm";

const Distance = () => {
  const [city, setCity] = useState("");
  const [dataFromAPI, setDataFromAPI] = useState([]);

  const handleCityChange = (search) => {
    setCity(search);
  };

  useEffect(() => {
    async function getCity() {
      try {
        const data = await GETCity(city);
        setDataFromAPI(data);
      } catch (error) {
        console.error("Failed to fetch city data:", error);
        // Handle the error accordingly
      }
    }
    if (city) {
      getCity();
    }
  }, []);

  return (
    <section className="h-screen bg-base-100">
      <Navbar />

      <h1>Distance</h1>
      <SearchForm onSearchChange={handleCityChange} />

      <div>
        <ul>
          {dataFromAPI.map((city) => (
            <li key={city.wikiDataId}>{city.city}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Distance;
