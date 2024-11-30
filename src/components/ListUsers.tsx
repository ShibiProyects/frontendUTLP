import { useState } from "react";

interface ListUsersProps {
  name: string[];
}

function ListUsers({ name }: ListUsersProps) {
  const [searchInput, setSearchInput] = useState("");

  // Filtramos los nombres según la búsqueda
  const filteredNames = name.filter((res) =>
    res.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="pb-5 flex flex-col items-center">
        <label htmlFor="find_student">Buscar estudiante:</label>
        <input
          type="text"
          id="find_student"
          placeholder="Ingresar nombre"
          className="border rounded-md px-3 py-1"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <ul className="max-h-[50vh] overflow-y-scroll flex flex-col gap-2">
        {filteredNames.length > 0 ? (
          filteredNames.map((res, index) => (
            <li
              key={index}
              className="bg-gray-200 text-black rounded-md text-lg py-2 px-4"
            >
              {res}
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-lg">
            No se encontraron resultados
          </li>
        )}
      </ul>
    </>
  );
}

export default ListUsers;
