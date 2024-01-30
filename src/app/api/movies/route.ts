// @ts-nocheck
/* eslint-disable */

import { getNotionDataBase } from '@services/notion'

// import type { NotionDataBase } from '@services/notion'

export async function GET () {
  const data = await getNotionDataBase('0e49d3ba6f77494ba98f6aeeb18513bc')
  if (!data) {
    return
  }

  const translatedData = Array.isArray(data?.results) &&
    data?.results.map(result => ({
      name: result.properties.Name[result.properties.Name.type][0].plain_text,
      value: result.properties.Tags.multi_select.map(select => select.name),
    }))

  return Response.json(translatedData)
}
