import { Client } from '@notionhq/client'

import type { IGetNotionDataBase, IGetNotionPage } from './notion.types'

const NOTION_TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN || ''

export const getNotionDataBase: IGetNotionDataBase = async database_id => {
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

export const getNotionPage: IGetNotionPage = async page_id => {
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
