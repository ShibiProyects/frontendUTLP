import { useState } from "react";
import { SVGlens } from "../../assets/Icons";

interface ListUsersProps {
  name: string[];
}

function ListUsers({ name }: ListUsersProps) {
  const [searchInput, setSearchInput] = useState("");

  const filteredNames = name.filter((res) =>
    res.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="pb-5 flex flex-col items-center">
        <div className="flex items-center bg-bg_inputs px-2 py-1 rounded-lg   ">
          <span className=" h-6 w-6 ">
            <SVGlens />
          </span>
          <input
            type="text"
            id="find_student"
            placeholder="Buscar estudiante"
            className="border rounded-md px-3 py-1 bg-transparent outline-none  "
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <ul className="overflow-y-scroll flex flex-col h-[40vh]">
        {filteredNames.length > 0 ? (
          filteredNames.map((res, index) => (
            <li
              key={index}
              className="items-center justify-between hover:bg-bg_inputs  mx-2 text-black rounded-md text-lg  py-2 px-4 flex  "
            >
              {res}
              <span className="text-sm">Estudiante</span>
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
