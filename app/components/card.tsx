"use client";
import Link from "next/link";

export const typeColors: any = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  psychic: "bg-purple-500",
  ice: "bg-blue-300",
  dragon: "bg-indigo-500",
  dark: "bg-gray-800",
  fairy: "bg-pink-500",
  normal: "bg-gray-400",
  fighting: "bg-orange-700",
  flying: "bg-indigo-300",
  poison: "bg-purple-700",
  ground: "bg-yellow-600",
  rock: "bg-gray-600",
  bug: "bg-green-600",
  ghost: "bg-indigo-700",
  steel: "bg-gray-500",
};

function Card({
  sprites,
  name,
  id,
  isLast,
  getPokemons,
  types,
}: any) {

  return (
    <>
     <Link href={`/pokemon/${name}`}>
        <div
          className="cursor-pointer card w-60 flex flex-col items-center bg-[#f0f2fa]  rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-lg"
        >
          <div
            className={`w-full h-[6px] ${typeColors[types[0]] || "bg-gray-300"}`}
          ></div>
          <div className="card-image my-4">
            <img
              className="h-20 mx-auto"
              src={sprites?.other?.home?.front_default || "/fallback-image.png"}
              alt={name}
            />
          </div>

          <div className="text-center px-4 py-2">
            <h3 className="text-lg font-bold text-gray-900">
              {name?.toUpperCase()}
            </h3>

            <div className="flex justify-center space-x-2 mt-2">
              {types[0] && (
                <span
                  className={`text-xs px-2 py-1 rounded-full text-white ${typeColors[types[0]] || "bg-gray-400"
                    }`}
                >
                  {types[0].toUpperCase()}
                </span>
              )}
              {types[1] && (
                <span
                  className={`text-xs px-2 py-1 rounded-full text-white ${typeColors[types[1]] || "bg-gray-400"
                    }`}
                >
                  {types[1].toUpperCase()}
                </span>
              )}
            </div>
          </div>

          <div className="py-2">
            <p className="text-green-500 text-xs font-semibold">See More ....!</p>
          </div>
        </div>
      </Link>
      {
        isLast &&
        <div
          onClick={getPokemons}
          className="cursor-pointer card w-60 flex flex-col items-center bg-[#f0f2fa]  rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-lg"
        >
          <div className="text-center h-full flex items-center px-4 py-2">
            <button   onClick={getPokemons} className="font-bold">Load More.....</button>
          </div>
        </div>
      }
    </>
  );
}

export default Card;
