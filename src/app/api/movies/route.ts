import { getNotionDataBase } from '@services/notion'

export async function GET () {
  const data = await getNotionDataBase('0e49d3ba6f77494ba98f6aeeb18513bc')
  console.log(data)
  return Response.json({ data })
}
