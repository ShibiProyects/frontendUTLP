import { useState } from "react";
import { Roles } from "../../../../models/user.model";
import LinkStyled from "../../../components/ui/LinkStyled";
import Modal from "../../../components/Modal";
import ListUsers from "../../../components/ListUsers";
import ButtonStyled from "../../../components/ui/ButtonStyled";

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
    <article className="relative w-[550px] bg-slate-200 rounded-xl overflow-hidden  text-center ">
      <img src="/a.png" className="h-[350px] w-full  " />
      <div className="min-h-[150px] py-2 flex flex-col gap-2   ">
        <div className="">
          <h4 className="font-medium"> {title} </h4>
          <h6> {teacher} </h6>
        </div>
        <div className="flex gap-2 justify-center items-center py-2 ">
          <LinkStyled primary href={href}>
            Ver curso
          </LinkStyled>
          {role == Roles.TEACHER_ROLE && (
            <ButtonStyled onclick={handleOpenModal}>Administrar</ButtonStyled>
          )}
          {isModalOpen && (
            <Modal onClose={handleCloseModal}>
              <h5 className="pb-4">Estudiantes inscritos</h5>
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
                ]}
              />
            </Modal>
          )}
        </div>
      </div>
    </article>
  );
}
export default CourseCard;
