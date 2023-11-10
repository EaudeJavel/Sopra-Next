import { useRouter } from "next/navigation";

const CityItem = ({ city }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    // Navigate to the city detail page
    router.push(`/cities/${city.id}`);
  };

  return (
    <div className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-lg font-semibold">{city.name}</h2>
      <button
        className="mt-2 px-4 py-2 rounded btn-primary"
        onClick={handleViewDetails}
      >
        Voir les détails
      </button>
    </div>
  );
};

export default CityItem;
