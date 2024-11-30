import { useState } from "react";

function ModuleItem({ title, items }: { title: string; items: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-red-500 p-4 rounded-md mb-4">
      <button
        onClick={toggleExpand}
        className="text-white font-semibold flex justify-between items-center w-full"
      >
        <span>{title}</span>
        <span>{isExpanded ? "▲" : "▼"}</span>
      </button>

      {isExpanded && (
        <ul className="mt-2 bg-red-200 rounded-md p-3 space-y-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ModuleItem;
