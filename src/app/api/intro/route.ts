import { getNotionPage } from '@services/notion'

export async function GET () {
  const data = await getNotionPage('b84e67ff9f6647bebd238de7d216f317')
  return Response.json(data)
}
