"use client";
import React, { useState, useEffect } from "react";
import { GETcityDetails } from "@/app/api/route";

export default function Page({ params }) {
  const [city, setCity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCityDetails = async () => {
    try {
      const result = await GETcityDetails(params.cityID);
      setCity(result);
    } catch (error) {
      console.error("Failed to fetch city details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (params.cityID) {
      fetchCityDetails();
    }
  }, [params.cityID]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!city) {
    return <div>City details not found</div>;
  }

  return (
    <div>
      <h1>{city.name}</h1>
      <p>Population: {city.population}</p>
      <p>Latitude: {city.latitude}</p>
      <p>Longitude: {city.longitude}</p>
      <p>Region: {city.region}</p>
      <p>Country: {city.country}</p>
    </div>
  );
}
