export type UserModel = {
  jwt: string;
  role: Roles.STUDENT_ROLE | Roles.TEACHER_ROLE;
};

export enum Roles {
  STUDENT_ROLE = "Student",
  TEACHER_ROLE = "Teacher",
}
