import {NextApiRequest, NextApiResponse} from 'next';

export default async function Email(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  console.log(body);
  res.status(200).json({status: 'success'});
}
