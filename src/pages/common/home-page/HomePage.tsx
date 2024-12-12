import { useUserContext } from "../../../../context/UserProvider";
import CourseCard from "../components/CourseCard";
import { Roles } from "../../../../models/user.model";
import {
  CommonRoutes,
  StudentRoutes,
  TeacherRoutes,
} from "../../../../routes/routes";

function HomePage() {
  const { user } = useUserContext();
  // const jwtt = localStorage.getItem("jwt");

  // fetch("http:/localhost:400/user/courses", {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${jwtt}`,
  //   },
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Error en la solicitud");
  //     }
  //     return response.json();
  //   })
  //   .then((res) => console.log(res))
  //   .catch((error) => console.error(error));

  return (
    <div className=" p-3 flex flex-wrap justify-between">
      {user?.role == Roles.TEACHER_ROLE ? (
        <>
          <CourseCard
            title="BDD - 1"
            teacher="Gentleman programing"
            href={`/${TeacherRoutes.TEACHER}/${CommonRoutes.COURSE_MODULES}`}
            role={Roles.TEACHER_ROLE}
          />
          <CourseCard
            title="BDD - 1"
            teacher="Gentleman programing"
            href={`/${TeacherRoutes.TEACHER}/${CommonRoutes.COURSE_MODULES}`}
            role={Roles.TEACHER_ROLE}
          />
          <CourseCard
            title="BDD - 1"
            teacher="Gentleman programing"
            href={`/${TeacherRoutes.TEACHER}/${CommonRoutes.COURSE_MODULES}`}
            role={Roles.TEACHER_ROLE}
          />
          <CourseCard
            title="BDD - 1"
            teacher="Gentleman programing"
            href={`/${TeacherRoutes.TEACHER}/${CommonRoutes.COURSE_MODULES}`}
            role={Roles.TEACHER_ROLE}
          />
        </>
      ) : (
        <CourseCard
          title="BDD - 1"
          teacher="Gentleman programing"
          href={`/${StudentRoutes.STUDENT}/${CommonRoutes.COURSE_MODULES}`}
          role={Roles.STUDENT_ROLE}
        />
      )}
    </div>
  );
}
export default HomePage;
