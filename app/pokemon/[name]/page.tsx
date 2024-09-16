import Breadcrumb from "@/app/components/breadcrumb";

export default async function PokemonDetail({ params }: any) {
  const { name } = params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await res.json();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-24 py-1">
       <div></div>
      <div className="w-full flex justify-start mb-4">
        <Breadcrumb pokemonName={pokemon.name} />
      </div>

      <div className="flex justify-start">
        <div
          className="h-full card w-96 flex flex-col items-center
       bg-[#f0f2fa] rounded-lg overflow-hidden 
       transition-transform duration-300 ease-in-out hover:shadow-lg"
        >
          {/* Pokémon type color bar */}
          {/* <div
            className={`w-full h-[6px] ${typeColors[pokemon?.types[0]?.type?.name] || "bg-water"}`}
          ></div> */}

          <div className="card-image my-4">
            <img
              className="h-48 mx-auto"
              src={pokemon.sprites?.other?.home?.front_default || "/fallback-image.png"}
              alt={pokemon.name}
            />
          </div>

          <div className="text-center px-4 py-2">
            <h3 className="text-lg font-bold text-gray-900">
              {pokemon.name?.toUpperCase()}
            </h3>
            <h3 className="text-lg font-bold text-gray-900">
              {pokemon.types[0].type.name}
            </h3>
            <h3 className="text-lg font-bold text-gray-900">
              HT {pokemon?.height}, WT {pokemon?.weight}
            </h3>

            {/* Display Pokémon types */}
            {/* <div className="flex justify-center space-x-2 mt-2">
              {pokemon.types[0]?.type?.name && (
                <span
                  className={`text-xs px-2 py-1 rounded-full text-white ${typeColors[pokemon?.types[0]?.type?.name] || "bg-gray-400"
                    }`}
                >
                  {pokemon?.types[0].type?.name.toUpperCase()}
                </span>
              )}
              {pokemon?.types[1]?.type?.name && (
                <span
                  className={`text-xs px-2 py-1 rounded-full text-white ${typeColors[pokemon.types[1].type.name] || "bg-gray-400"
                    }`}
                >
                  {pokemon?.types[1]?.type?.name.toUpperCase()}
                </span>
              )}
            </div> */}
          </div>

          <div className="py-2">
            <p className="text-green-500 text-xs font-semibold">Shiny Available!</p>
          </div>
        </div>
      </div>
      <div></div>
    </main>

  );
}
