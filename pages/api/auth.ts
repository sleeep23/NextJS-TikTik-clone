import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // 요청이 POST 일때 request 의 body 에 있는 user 데이터를 user 라는 변수에 넣고
    const user = req.body;

    // sanity client 에 user 를 추가한다.
    client
      .createIfNotExists(user)
      .then(() => res.status(200).json("Login success"));
  }
}
