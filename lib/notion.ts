import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import { promises as fs } from 'fs'
import path from 'path'

const notionX = new NotionAPI()
const notion = new Client({ auth: process.env.NOTION_API_KEY })

const pagesDbId = 'e972b88ddaad4a3ba9770e3d3cc251b0'
const postsDbId = 'fda705b7c2ed4f359fa4cc59ff260c9d'

// Dynamic Pages

export async function getPages() {
  return getDatabasePages(pagesDbId)
}

export async function getPage(pageId: string) {
  const { page, blocks } = await getDatabasePage(pagesDbId, pageId)

  let title = ''
  let metaDescription = ''
  let cover: string | null = null
  let ogImage: string | null = null

  if ('properties' in page) {
    if (page.properties.Title.type === 'title') {
      title = page.properties.Title.title.map((t) => t.plain_text).join('')
    }
    if (page.properties.meta_description.type === 'rich_text') {
      metaDescription = page.properties.meta_description.rich_text.map((t) => t.plain_text).join('')
    }
    if (page.cover?.type === 'external') {
      cover = page.cover.external.url
    } else if (page.cover?.type === 'file') {
      cover = page.cover.file.url
    }
    if (
      page.properties.og_image?.type === 'files' &&
      page.properties.og_image.files[0]?.type === 'file'
    ) {
      ogImage = page.properties.og_image.files[0].file.url
    }
  }

  return { blocks, title, metaDescription, cover, slug: pageId }
}

// Blog Posts

export function getPosts() {
  return getDatabasePages(postsDbId)
}

export async function getPost(slug: string) {
  const { page, blocks } = await getDatabasePage(postsDbId, slug)

  let title = ''
  let metaDescription = ''
  let cover: string | null = null
  let ogImage: string | null = null

  if ('properties' in page) {
    if (page.properties.Title.type === 'title') {
      title = page.properties.Title.title.map((t) => t.plain_text).join('')
    }
    if (page.properties.meta_description.type === 'rich_text') {
      title = page.properties.meta_description.rich_text.map((t) => t.plain_text).join('')
    }
    if (page.cover?.type === 'external') {
      cover = page.cover.external.url
    } else if (page.cover?.type === 'file') {
      cover = page.cover.file.url
    }
    if (
      page.properties.og_image?.type === 'files' &&
      page.properties.og_image.files[0]?.type === 'file'
    ) {
      ogImage = page.properties.og_image.files[0].file.url
    }
  }
  return { blocks, title, metaDescription, cover, ogImage, slug }
}

// Internal

async function getDatabasePages(databaseId: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  console.log('getStaticPaths', response)

  const pages: Page[] = response.results
    .map((page) => {
      if ('properties' in page && page.properties.slug?.type === 'rich_text') {
        const slug = page.properties.slug.rich_text[0]?.plain_text
        return { id: page.id, slug }
      }
      return null
    })
    .filter((el) => el !== null)

  pagesCache.set(databaseId, pages)

  console.log('getPages result', pages)

  return pages.map((page) => {
    return { params: { slug: page.slug } }
  })
}

async function getDatabasePage(pagesDbId: string, pageSlug: string) {
  const pageCache = await pagesCache.get(pagesDbId, pageSlug)
  const page = await notion.pages.retrieve({ page_id: pageCache.id })
  // const blocks = (
  //   await notion.blocks.children.list({
  //     block_id: page_id,
  //     page_size: 100,
  //   })
  // ).results
  const blocks = await notionX.getPage(page.id)

  console.log('getPage page', page)
  console.log('getPage blocks', blocks)

  return { blocks, page }
}

type Page = { slug: string; id: string }

let pagesCache = {
  get: async (databaseId: string, slug: string): Promise<Page | null | undefined> => {
    const cachePath = path.join(process.cwd(), `notion.${databaseId}.db`)
    const data = await fs.readFile(cachePath)
    const pages: Page[] = JSON.parse(data as unknown as string)
    return pages.find((page) => page.slug === slug)
  },
  set: async (databaseId: string, pages: Page[]) => {
    const cachePath = path.join(process.cwd(), `notion.${databaseId}.db`)
    return await fs.writeFile(cachePath, JSON.stringify(pages))
  },
}
