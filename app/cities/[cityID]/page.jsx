"use client";
import React, { useState, useEffect } from "react";
import { GETcityDetails } from "@/app/api/route";
import Navbar from "@/app/components/navbar";
import Image from "next/image";

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
    <div className=" bg-base-100 h-screen">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-100 mb-2">{city.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-md text-white">
            <span className="font-semibold">Population:</span> {city.population}
          </p>
          <p className="text-md text-white">
            <span className="font-semibold">Latitude:</span> {city.latitude}
          </p>
          <p className="text-md text-white">
            <span className="font-semibold">Longitude:</span> {city.longitude}
          </p>
          <p className="text-md text-white">
            <span className="font-semibold">Region:</span> {city.region}
          </p>
          <p className="text-md text-white">
            <span className="font-semibold">Country:</span> {city.country}
          </p>
        </div>
        <Image
          src={`https://source.unsplash.com/random/?${city.region}`}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
