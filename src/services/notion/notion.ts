import { Client } from '@notionhq/client'

const NOTION_TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN || ''

export const getNotionDataBase = async (database_id: string) => {
  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    })
    const response = await notion.databases.query({
      database_id,
    })
    return response
  } catch (error) {
    console.error(error)
    return ''
  }
}
