// @ts-nocheck
/* eslint-disable */

import { getNotionPage } from '@services/notion'

// import type { NotionPage } from '@services/notion/notion.types'

export async function GET () {
  const data = await getNotionPage('b84e67ff9f6647bebd238de7d216f317')
  if (!data) {
    return
  }

  const translatedData = Array.isArray(data?.results) &&
    data?.results.map(result => ({
      type: result.type,
      value: result[result.type].rich_text[0].plain_text,
    }))

  return Response.json(translatedData)
}
