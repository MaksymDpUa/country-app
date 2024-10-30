"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

type Country = {
  countryCode: string;
  name: string;
};

export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/country/available`
        );
        setCountries(response.data);
      } catch (error) {
        console.log(error);
        setError("Cannot download List of countries");
      }
    };

    fetchCountries();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 py-8">
      {countries.map((country) => (
        <li
          key={country.countryCode}
          className="p-6 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
        >
          <Link
            href={`/countries/${country.countryCode}`}
            className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
