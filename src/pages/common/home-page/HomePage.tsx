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

  return (
    <div>
      {user?.role == Roles.TEACHER_ROLE ? (
        <CourseCard
          title="BDD - 1"
          teacher="Gentleman programing"
          href={`/${TeacherRoutes.TEACHER}/${CommonRoutes.COURSE_MODULES}`}
          role={Roles.TEACHER_ROLE}
        />
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
