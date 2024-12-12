import { Roles } from "../../../../models/user.model";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModalListUsers } from "@/components/ui/ModalListUsers";

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
  return (
    <Card className="relative w-[550px] bg-slate-200  text-center mb-5">
      <img src="/a.png" className="h-[350px] w-full  " />
      <div>
        <CardHeader>
          <CardTitle>
            <h4>{title}</h4>
          </CardTitle>
          <CardDescription>
            <p>{teacher}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-4 flex justify-center">
          <Button>
            <Link to={href}>Ver curso</Link>
          </Button>
          {role == Roles.TEACHER_ROLE && <ModalListUsers />}
        </CardContent>
      </div>
    </Card>
  );
}
export default CourseCard;
