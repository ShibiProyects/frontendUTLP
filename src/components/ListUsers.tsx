import { Search } from "lucide-react";
import { useState } from "react";

interface ListUsersProps {
  name: string[];
  status?: "green" | "red" | "yellow";
}

function ListUsers({ name, status }: ListUsersProps) {
  const [searchInput, setSearchInput] = useState("");

  const filteredNames = name.filter((res) =>
    res.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="pb-5 flex flex-col items-center">
        <div className="flex items-center bg-bg_inputs px-2 py-1 rounded-lg   ">
          <span className=" h-6 w-6 ">
            <Search />
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
              className="items-center justify-between hover:bg-accent  mx-2 text-black rounded-md text-lg  py-2 px-4 flex  "
            >
              {res}
              <div className="flex gap-2 relative items-center">
                <span className="text-sm">Estudiante</span>
                <div
                  className={`${
                    status === "green"
                      ? "bg-success"
                      : status === "red"
                      ? "bg-danger"
                      : "bg-dark"
                  } rounded-full h-3 w-3 border`}
                ></div>
              </div>
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
