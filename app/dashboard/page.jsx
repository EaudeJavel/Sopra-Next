"use client";
import Navbar from "../components/navbar";
import SearchForm from "../components/searchForm";
import { GETCities } from "../api/route";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataFromAPI, setDataFromAPI] = useState([]);

  useEffect(() => {
    async function getCities() {
      const cities = await GETCities();
      setDataFromAPI(cities);
    }
    getCities();
  }, []);

  if (!dataFromAPI) return null;

  const handleSearchChange = (search) => {
    console.log(search);
  };

  return (
    <main className="h-screen bg-base-100">
      <Navbar />
      <h1>Home</h1>

      <div>
        <SearchForm onSearchChange={handleSearchChange} />
        <ul>
          {dataFromAPI.map((city) => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
