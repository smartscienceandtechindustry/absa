// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("absa");
  const user = req.body;
  console.log(user);

  const users = db.collection("users");
  const sb = await users.insertOne(user);
  res.status(200).json({ status: sb });
}
