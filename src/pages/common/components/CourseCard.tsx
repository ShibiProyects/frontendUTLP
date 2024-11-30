import { CommonRoutes, StudentRoutes } from "../../../../routes/routes";
import LinkStyled from "../../../components/LinkStyled";

function CourseCard() {
  return (
    <article className="relative w-[550px] bg-gray-300 text-center ">
      <img src="/a.png" className="h-[350px] w-full  " />
      <div className="min-h-[150px] py-2  ">
        <section>
          <h4>Curso</h4>
          <p>Profesor</p>
        </section>
        <LinkStyled
          href={`/${StudentRoutes.STUDENT}/${CommonRoutes.COURSE_MODULES}`}
        >
          Ver curso
        </LinkStyled>
      </div>
    </article>
  );
}
export default CourseCard;
