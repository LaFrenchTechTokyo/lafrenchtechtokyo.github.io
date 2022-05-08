import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import { getPost, getPosts } from '../../lib/notion'
import Head from 'next/head'

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
            <Head>
              <title>{content.title} | Next.js Blog Example</title>
              <meta property="og:image" content={content.ogImage} />
            </Head>
            <h1>{content.title}</h1>
            {content.cover ? <img src={content.cover} alt="cover" /> : <></>}
            <NotionRenderer recordMap={content.blocks} fullPage={false} darkMode={false} />
          </>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getPosts()

  const result = {
    paths,
    fallback: false, // false or 'blocking'
  }

  console.log('getStaticPaths result', result)
  console.log('getStaticPaths result paths', result.paths)

  return result
}

export async function getStaticProps({ params }) {
  const page = await getPost(params.slug)
  return {
    props: {
      content: page,
    },
  }
}
