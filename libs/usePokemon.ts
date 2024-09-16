// @ts-nocheck

"use client";
import { useState, useEffect } from "react";

const End_Point = `https://pokeapi.co/api/v2/`;

const getTypes = async () => {
  return await (await fetch(`${End_Point}type`)).json();
};

const getPokemons = async (items: any[] = []) => {
  try {
    const pokemons = await Promise.all(items);

    return pokemons.map(({ sprites, name, id, types }: any) => ({
      sprites,
      name,
      id,
      types: [types[0]?.type?.name, types[1]?.type?.name],
    }));
  } catch (error) { }
};

const Chunk_Size = 10;

export const usePokemon = () => {
  const [count, setCount] = useState<number>(1);
  const [finalCount, setFinalCount] = useState<number>(Chunk_Size);
  const [items, setItems] = useState<any[]>([]);
  const [_itemCopy, setItemCopy] = useState<any[]>([]);
  const [type, setType] = useState<any[]>([]);
  const [selectType, setSelectType] = useState<string>("normal");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    let filteredItems = items;

    if (selectType !== "normal") {
      filteredItems = items.filter(({ types }) => types.includes(selectType));
    }

    if (searchTerm) {
      filteredItems = filteredItems.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setItemCopy(filteredItems);
  }, [selectType, searchTerm, items]);

  const getPokemon = async () => {
    if (loading) return;
    setLoading(true);

    const _item = [];
    for (let item = count; item <= finalCount; item++) {
      _item.push(fetch(`${End_Point}pokemon/${item}`).then((re) => re.json()));
    }

    try {
      const data: any = await getPokemons(_item);
      setItems((prev) => [...prev, ...data]);
      setItemCopy((prev) => [...prev, ...data]);

      if (!type.length) {
        const { results }: any = await getTypes();
        setType(results);
      }

      setCount(finalCount + 1);
      setFinalCount(finalCount + Chunk_Size);

      if (data.length < Chunk_Size) setHasMore(false);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const filterPokemon = ({ name, type }: { name: string, type: string }) => {

    if (type == 'normal' || type == '') {
      setItemCopy(items);
      return
    }
    const filtered = items.filter(({ types, ...rest }) =>
      rest.name.includes(name) || types.includes(type)
    );
    setItemCopy(filtered);
  };

  const filterbySearch = ({ name, type }: { name: string, type: string }) => {
    console.log(items, 'Prince', name)

    if (name == '') {
      setItemCopy(items);
      return
    }
    const filtered = items.filter((p) =>p.name.toLowerCase().includes(name.toLowerCase()))
    setItemCopy(filtered);
  };

  return {
    _itemCopy,
    type,
    getPokemon,
    loading,
    hasMore,
    selectType,
    setSelectType,
    searchTerm,        
    setSearchTerm,
    filterPokemon,
    filterbySearch  
  };
};
