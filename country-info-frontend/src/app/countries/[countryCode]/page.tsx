import { Border, Country } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import PopulationChart from "./PopulationChart";

async function getCountryInfo(countryCode: string): Promise<Country> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/country/${countryCode}`
  );
  return response.data;
}

export default async function CountryInfo({
  params,
}: {
  params: { countryCode: string };
}) {
  const { countryCode } = await params;
  const country: Country = await getCountryInfo(countryCode);

  return (
    <div className="p-6 md:p-10 w-full mx-auto bg-gray-50 rounded-lg shadow-lg space-y-6">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          {country.name}
        </h1>
        <div className="flex justify-center">
          <Image
            src={country.flag}
            alt={`${country.name} Flag`}
            width={120}
            height={80}
            className="border border-gray-300 shadow-sm rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Neighboring Countries
          </h2>
          <ul className="space-y-2">
            {country.borders.map((border: Border) => (
              <li
                key={border.countryCode}
                className="text-gray-700 text-lg hover:text-blue-500"
              >
                <Link href={`/countries/${border.countryCode}`}>
                  {border.commonName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Population Over Time
          </h2>
          <PopulationChart populationData={country.population} />
        </div>
      </div>
    </div>
  );
}
