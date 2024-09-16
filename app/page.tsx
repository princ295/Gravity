'use client'
import { usePokemon } from "@/libs/usePokemon";
import Card from "./components/card";
import Header from "./components/header";

export default function Home() {
  const { _itemCopy, filterPokemon, type, filterbySearch, getPokemon } = usePokemon();
  return (
    <>
      <Header filterPokemon={filterPokemon} types={type} filterbySearch={filterbySearch} />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 py-1">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 mx-auto my-1 max-w-screen-lg"
        >
          {_itemCopy.map((pokemon: any, idx) => (
            <Card {...pokemon} isLast={_itemCopy.length-1 == idx} getPokemons={getPokemon}/>
          ))}
        </div>
      </main>
    </>
  );
}
