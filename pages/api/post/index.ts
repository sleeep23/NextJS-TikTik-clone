// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { allPostsQuery } from "../../../utils/queries";
import { client } from "../../../utils/client";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const query = allPostsQuery();
    // client 의 정보를 가져오기까지 기다린다.
    const data = await client.fetch(query);
    // 제대로 전송되었다면 200 상태와 data 를 프론트로 보낸다.
    res.status(200).json(data);
  }
}
