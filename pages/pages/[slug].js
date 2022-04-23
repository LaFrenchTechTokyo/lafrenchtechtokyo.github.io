import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion/src/styles.css'
import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

export default function Post({ content, preview }) {
  const router = useRouter()
  if (!router.isFallback && !content?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <div className="container">
        <div className="header" />
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <h1>{content.title}</h1>
            {content.cover ? <img src={content.cover} alt="cover" /> : <></>}
            <NotionRenderer recordMap={content.blocks} fullPage={false} darkMode={false} />
          </>
        )}
      </div>
    </Layout>
  )
}

const notion = new Client({ auth: 'secret_oE9r4wDHpEaX0ionAlwyDcJFqb1M6TGlgHXy0bTKehW' })
export const notionX = new NotionAPI()

export async function getStaticPaths() {
  const response = await notion.databases.query({
    database_id: 'e972b88ddaad4a3ba9770e3d3cc251b0',
  })
  console.log('getStaticPaths', response)

  const result = {
    paths: response.results.map((page) => {
      return { params: { slug: page.id } }
    }),
    fallback: false, // false or 'blocking'
  }

  console.log('getStaticPaths result', result)
  console.log('getStaticPaths result paths', result.paths)

  return result
}

export async function getStaticProps({ params }) {
  const responseO = await notion.pages.retrieve({ page_id: params.slug })
  const blocks = await notionX.getPage(params.slug)

  const title = responseO.properties.Title.title.map((t) => t.plain_text).join('')
  const cover = responseO.cover?.external?.url
  console.log('getStaticProps page', responseO)
  console.log('getStaticProps blocks', blocks)
  return {
    props: {
      content: { blocks, title, cover, slug: params.slug },
    },
  }
}
