import ModuleItem from "./components/ModuleItem";

function CourseModules() {
  const modules = [
    {
      id: 1,
      title: "Modulo 1",
      items: ["Recursos", "Videos", "Ayuda", "Test 1"],
    },
    {
      id: 2,
      title: "Modulo 2",
      items: ["Material adicional", "Ejercicios", "FAQ", "Test 2"],
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Nombre del curso</h1>
      <a href="#" className="text-blue-500 underline" target="_blank">
        Link Meet
      </a>

      <section className="mt-4">
        {modules.map((module) => (
          <ModuleItem
            key={module.id}
            title={module.title}
            items={module.items}
          />
        ))}
      </section>
    </div>
  );
}

export default CourseModules;
