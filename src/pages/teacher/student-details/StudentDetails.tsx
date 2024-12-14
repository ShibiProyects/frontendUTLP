import { useParams } from "react-router";

function StudentDetails() {
  const { id } = useParams<{ id: string }>();

  return <div className="">{id}</div>;
}
export default StudentDetails;
