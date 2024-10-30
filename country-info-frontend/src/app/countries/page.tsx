import CountryList from "./СountryList";

export default function CountryPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
       List of Countries
      </h1>
      <CountryList />
    </div>
  );
}
