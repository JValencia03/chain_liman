import { type Prisma, type Url } from '@prisma/client'
import { db } from '../../../../server/db'
import { UrlDeleteArgsSchema as zUrlDeleteArgsSchema } from '~/zod'
import { NextResponse } from 'next/server'

const deleteUrl = async (data: Prisma.UrlDeleteArgs): Promise<Url> => {
  return await db.url.delete({
    where: {
      id: data.where.id
    }
  })
}

export default async function DELETE (req: Request) {
  try {
    const parsedData = zUrlDeleteArgsSchema.parse(await req.json())

    const removeUrl = await deleteUrl(parsedData)
  
    return NextResponse.json(removeUrl, { status: 200 })
  } catch (error) {
    console.error('Unable to delete your link:', error)
    return NextResponse.json({ message: 'Unable to delete your link', error }, { status: 500 })
  }
}
