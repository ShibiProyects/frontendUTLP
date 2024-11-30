import { Link } from "react-router-dom";
import { CommonRoutes, StudentRoutes } from "../../../../routes/routes";

function CourseCard() {
  return (
    <article className="relative w-[550px] bg-gray-300 text-center ">
      <img src="/a.png" className="h-[350px] w-full  " />
      <div className="min-h-[150px] py-2 ">
        <h4>Curso</h4>
        <h5>Profesor</h5>
        <Link
          to={`/    ${StudentRoutes.STUDENT}/${CommonRoutes.COURSE_MODULES}`}
          replace
        >
          Ver curso
        </Link>
      </div>
    </article>
  );
}
export default CourseCard;
