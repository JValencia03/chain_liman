import { NextResponse } from 'next/server'
import { db } from '../../../../server/db'
import { UrlCreateInputSchema as zUrlCreateInputSchema } from '~/zod'
import {  type Prisma, type Url } from '@prisma/client'

const generateShortUrl = (): string => {
  return Math.floor(Math.random() * 1000000).toString() // Placeholder for future implementation
}

const createUrl = async (data: Prisma.UrlCreateInput): Promise<Url> => {
  return await db.url.create({
  data: {
    originalUrl: data.originalUrl,
    shortUrl: data.shortUrl ?? generateShortUrl() 
  }
})
}

export default async function POST (req: Request) {
  try {
    const parsedData = zUrlCreateInputSchema.parse(await req.json())

    const newUrl = await createUrl(parsedData)

    return NextResponse.json(newUrl, { status: 201 })
  } catch (error) {
    console.error('Error creating the URL', error)
    return NextResponse.json({ message: 'Error creating the URL', error }, { status: 500 })
  }
}
