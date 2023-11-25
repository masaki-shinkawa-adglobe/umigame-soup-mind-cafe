import { http, HttpResponse } from "msw";
import { GetUsers } from "@/types/api";

export const getUsers = http.get(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
  () =>
    HttpResponse.json<GetUsers>({
      name: "user",
    })
);
