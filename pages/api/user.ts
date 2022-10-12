// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { userStore } from '../../utils/company';


type Data = {
  user: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { user } = req.body;
  // validate
  if (userStore.find((x: { username: any; }) => x.username === user.username))
    throw `User with the username "${user.username}" already exists`;

  userStore.create(user);
  // res.status(200).json({ user: 'John Doe' })
  return res.status(200).json({
    user: ''
  });
}
