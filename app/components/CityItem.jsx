import Image from "next/image";

const CityItem = ({ city }) => {
  return (
    <div className="p-4 flex items-center justify-between border rounded shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-lg font-semibold">{city.name}</h2>

      <label
        htmlFor="my_modal_7"
        className="btn mt-2 px-4 py-2 rounded btn-primary"
      >
        Voir les détails
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col mb-6">
              <h1 className="text-xl text-white py-4 ">{city.name}</h1>
              <h2>{city.country}</h2>
            </div>

            <Image
              src={`https://source.unsplash.com/random/?${city.region}`}
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-md text-white">
              <span className="font-semibold">Population:</span>{" "}
              {city.population}
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
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default CityItem;
