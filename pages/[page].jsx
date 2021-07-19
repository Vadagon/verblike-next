import utilStyles from '../styles/utils.module.scss'
// import { getAllPostIds, getPostData } from '../lib/posts'
import Date from '../components/date'
import Head from 'next/head'
import PostLayout from '../components/page-layout'
import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);


export async function getStaticProps({ params }) {
  const { page } = await graphcms.request(
    `
    query Page($slug: String!) {
      page(where: { slug: $slug }) {
        id
        title
        createdAt
        content{
          text
          html
        }
        slug
        coverImage {
          id
          url
          width
          height
        }
      }
    }
  `,
    {
      slug: params.page,
    }
  );

  return {
    props: {
      page,
    },
  };
}


// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }

// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getStaticPaths() {
  const { pages } = await graphcms.request(`
    {
      pages {
        id
        title
        content{
          text
        }
        slug
        coverImage {
          id
          url
          width
          height
        }
      }
    }
  `);
  return {
    paths: pages.map(({ slug }) => ({
      params: { page: slug },
    })),
    fallback: false,
  };
}


import Layout from '../components/layout'

export default function Post({ page }) {
  return (
    <Layout>
      <PostLayout page={page}/>
      {/* <Head>
        <title>{page.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{page.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={page.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
      </article> */}
    </Layout>
  )
}