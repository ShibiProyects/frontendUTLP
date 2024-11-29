export type UserModel = {
  email: string;
  role: Roles.STUDENT_ROLE | Roles.TEACHER_ROLE;
};

export enum Roles {
  STUDENT_ROLE = "student",
  TEACHER_ROLE = "teacher",
}
