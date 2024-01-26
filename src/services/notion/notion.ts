import { Client } from '@notionhq/client'

const NOTION_TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN || ''

export const getNotionDataBase = async () => {
  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    })
    const response = await notion.databases.query({
      database_id: '0e49d3ba6f77494ba98f6aeeb18513bc',
    })
    return response
  } catch (error) {
    console.error(error)
    return ''
  }
}
