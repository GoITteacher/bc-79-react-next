import { serverApi } from "./apiConfig";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  major: string;
  cohortYear: number;
  gpa: number;
  enrolled: boolean;
}

interface GetStudentsResponse {
  page: number;
  perPage: number;
  items: Student[];
}
export const getStudents = async (firstName: string) => {
  const params = {
    firstName,
  };
  const res = await serverApi.get<GetStudentsResponse>("/public/students", {
    params,
  });
  return res.data;
};
