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

export const getNotionPage = async (page_id: string) => {
  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    })
    const page = await notion.pages.retrieve({ page_id })
    const block = await notion.blocks.retrieve({ block_id: page.id })
    const response = await notion.blocks.children.list({
      block_id: block.id,
      page_size: 50,
    })
    return response
  } catch (error) {
    console.error(error)
    return ''
  }
}
