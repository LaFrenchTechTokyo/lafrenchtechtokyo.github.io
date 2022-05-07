import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

const notionX = new NotionAPI()
const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function getPage(page_id: string) {
  const page = await notion.pages.retrieve({ page_id })
  // const blocks = (
  //   await notion.blocks.children.list({
  //     block_id: page_id,
  //     page_size: 100,
  //   })
  // ).results
  const blocks = await notionX.getPage(page_id)

  console.log('getPage page', page)
  console.log('getPage blocks', blocks)

  let title = ''
  let cover: string | null = null

  if ('properties' in page) {
    if (page.properties.Title.type === 'title') {
      title = page.properties.Title.title.map((t) => t.plain_text).join('')
    }
    if (page.cover?.type === 'external') {
      cover = page.cover.external.url
    }
  }
  return { blocks, title, cover, slug: page_id }
}

export async function getPages() {
  const response = await notion.databases.query({
    database_id: 'e972b88ddaad4a3ba9770e3d3cc251b0',
  })
  console.log('getStaticPaths', response)

  const result = response.results.map((page) => {
    return { params: { slug: page.id } }
  })

  console.log('getPages result', result)

  return result
}
