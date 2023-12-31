import axios from "axios";
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const headers = {
  "X-RapidAPI-Key": "8094ab2603msh6650165a30e5a65p1e591cjsn9a584f9e8e3e",
  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
};

// This function gets cities from the API
export async function GETCities() {
  const url = `${GEO_API_URL}/cities`;

  const options = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function GETFrenchCities(search, sort = "+population") {
  const url = `${GEO_API_URL}/cities`;

  const options = {
    method: "GET",
    url: url,
    params: { countryIds: "FR", namePrefix: search, sort: sort },
    headers: headers,
    limit: "10",
  };

  console.log(options);

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export async function GETcityDetails(cityID) {
  const url = `${GEO_API_URL}/cities/${cityID}`;

  const options = {
    method: "GET",
    url: url,
    headers: headers,
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

// This is a function that gets the distance between two cities.
export async function GetDistanceBetweenTwoCities(cityID) {
  const url = `${GEO_API_URL}/cities/${cityID}/distance`;

  const options = {
    method: "GET",
    headers: headers,
    params: { toCityId: "Q60" },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result).data;
  } catch (error) {
    console.error(error);
  }
}
