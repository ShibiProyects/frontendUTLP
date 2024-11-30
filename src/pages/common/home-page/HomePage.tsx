import { useEffect, useState } from "react";
import { useUserContext } from "../../../../context/UserProvider";
import CourseCard from "../components/CourseCard";

function HomePage() {
  const { user } = useUserContext();
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/course.json/1")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res);
  //     });
  // }, [user?.email]);

  return (
    <div>
      <CourseCard />
    </div>
  );
}
export default HomePage;
