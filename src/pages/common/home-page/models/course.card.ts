import { Roles } from "@/models/user.model";

export type CourseCardModel = {
  title: string;
  teacher: string;
  href: string;
  role: Roles;
  img_url: string;
};
