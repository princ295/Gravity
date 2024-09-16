'use client'
import Filter from "./filter"

export default function Header({ filterPokemon, types, filterbySearch } :any) {

  return (
    <nav className="w-10/12 px-0 py-4 flex items-center justify-between mx-auto my-1 max-w-screen-lg">
      <div className="text-2xl font-bold flex items-center">
        <h6 className="m-0 text-black text-2xl tracking-tighter font-semibold">
          🧸 Pokemon
        </h6>
      </div>

      <Filter types={types} onFilter={filterPokemon} filterbySearch={filterbySearch}/>
    </nav>
  )
}