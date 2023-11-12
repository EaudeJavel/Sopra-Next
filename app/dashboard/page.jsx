"use client";
import { useState, useEffect } from "react";
import { GETFrenchCities } from "../api/route";
import Navbar from "../components/navbar";
import CityItem from "../components/CityItem";
import SearchForm from "../components/searchForm";
import SortCities from "../components/sort";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const citiesPerPage = 1;

  const handleSortChange = (sortOption) => {
    const sortedCities = [...cities];

    switch (sortOption) {
      case "+name":
        sortedCities.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "-population":
        sortedCities.sort((a, b) => b.population - a.population);
        break;
      case "+population":
        sortedCities.sort((a, b) => a.population - b.population);
        break;
    }

    setCities(sortedCities);
  };

  useEffect(() => {
    const fetchInitialCities = async () => {
      setIsLoading(true);
      try {
        const result = await GETFrenchCities("");
        setCities(result);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialCities();
  }, []);

  const handleSearchResult = async (searchQuery) => {
    try {
      const result = await GETFrenchCities(searchQuery);
      setCities(result);
      setCurrentPage(1); // Reset to first page after new search
    } catch (error) {
      console.error("Failed to fetch cities:", error);
    }
  };

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current cities for pagination
  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCities = cities.slice(indexOfFirstCity, indexOfLastCity);

  return (
    <main className="h-screen bg-base-100">
      <Navbar />

      <div className="container mx-auto flex flex-col justify-center items-center">
        <SearchForm onSearchChange={handleSearchResult} />
        <SortCities onSortChange={handleSortChange} />
        <ul className="w-full py-8">
          {isLoading ? (
            <p>Loading cities...</p>
          ) : cities.length > 0 ? (
            currentCities.map((city) => <CityItem key={city.id} city={city} />)
          ) : (
            <p>No cities found.</p>
          )}
        </ul>

        {/* Pagination Controls */}
        <div>
          {Array.from(
            { length: Math.ceil(cities.length / citiesPerPage) },
            (_, i) => i + 1
          ).map((number) => (
            <button key={number} onClick={() => paginate(number)}>
              {number}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
