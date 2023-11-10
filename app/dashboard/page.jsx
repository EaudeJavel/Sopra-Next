"use client";
import Navbar from "../components/navbar";
import SearchForm from "../components/searchForm";
import { GETFrenchCities } from "../api/route";
import { useState, useCallback } from "react";
import _ from "lodash";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // Debounced function to fetch cities based on search input
  const fetchCities = useCallback(
    _.debounce(async (search) => {
      if (!search) {
        setCities([]);
        setIsFetching(false);
        return;
      }

      setIsFetching(true);
      try {
        const result = await GETFrenchCities(search);
        setCities(result);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
      setIsFetching(false);
    }, 500),
    []
  );

  const handleSearchChange = (search) => {
    fetchCities(search);
  };

  // Placeholder component
  const Placeholder = () => (
    <div>
      <p>Type in the search bar to list French cities...</p>
    </div>
  );

  return (
    <main className="h-screen bg-base-100">
      <Navbar />
      <h1>Home</h1>

      <div>
        <SearchForm onSearchChange={handleSearchChange} />
        {isFetching ? (
          <div>Loading...</div>
        ) : cities.length > 0 ? (
          <ul>
            {cities.map((city) => (
              <li key={city.id}>{city.name}</li>
            ))}
          </ul>
        ) : (
          <Placeholder />
        )}
      </div>
    </main>
  );
}
