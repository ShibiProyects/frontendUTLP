import { useParams } from "react-router";

function StudentDetails() {
  const { id: studentId } = useParams<{ id: string }>();

  return <div className="">a{studentId}</div>;
}
export default StudentDetails;
