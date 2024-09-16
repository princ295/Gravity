export default function Filter({ types, onFilter, filterbySearch }: any) {

  const handleInputChange = (e: any) => filterbySearch({ name: e.target.value });
  const handleTypeChange = (e: any) => onFilter({ type: e.target.value });

  return (
    <>
      <div className="flex items-center">
        <input
          className="bg-gray-200 w-80 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight text-sm focus:outline-none focus:border-gray-200"
          id="inline-full-name"
          type="text"
          placeholder="Search by name..."
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center">
        <select onChange={handleTypeChange} className="bg-gray-50 border border-gray-300
       text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose Type</option>
          {types.map((type: any) => (
            <option key={type} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
