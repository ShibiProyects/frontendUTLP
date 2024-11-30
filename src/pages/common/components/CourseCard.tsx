import { useState } from "react";
import { Roles } from "../../../../models/user.model";
import LinkStyled from "../../../components/LinkStyled";
import Modal from "../../../components/Modal";
import ListUsers from "../../../components/ListUsers";

function CourseCard({
  title,
  teacher,
  href,
  role,
}: {
  title: string;
  teacher: string;
  href: string;
  role: Roles;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <article className="relative w-[550px] bg-gray-300 text-center ">
      <img src="/a.png" className="h-[350px] w-full  " />
      <div className="min-h-[150px] py-2  ">
        <section>
          <h4> {title} </h4>
          <p> {teacher} </p>
        </section>
        <LinkStyled href={href}>Ver curso</LinkStyled>
        {role == Roles.TEACHER_ROLE && (
          <button onClick={handleOpenModal}>Administrar</button>
        )}
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <h4 className="pb-2">Estudiantes inscritos</h4>

            <ListUsers
              name={[
                "Matias",
                "Nico",
                "Ale",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
                "Nico",
                "Ale",
                "Nath",
              ]}
            />
          </Modal>
        )}
      </div>
    </article>
  );
}
export default CourseCard;
