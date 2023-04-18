// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { type Country, validatePassword } from '@/utils/validate-password'
import type { NextApiRequest, NextApiResponse } from 'next'


type ResponseData = Country | {
  error: string
}

const normalizedRequestBody = (body: string) => {
  try {
    return JSON.parse(body)['password']
  } catch {
    return null
  }
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const attemptedPassword = normalizedRequestBody(req.body)

  if (!attemptedPassword) {
    res.status(404).json({ error: 'Špatné heslo' })
    return
  }

  const result = validatePassword(attemptedPassword)

  if (result) {
    res.status(200).json({ ...result })
  } else {
    res.status(404).json({ error: 'Špatné heslo' })

  }

}
