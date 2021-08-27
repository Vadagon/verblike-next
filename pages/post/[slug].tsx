import utilStyles from '../../styles/utils.module.scss'
// import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import { GraphQLClient } from "graphql-request";
import PostLayout from '../../components/page-layout'
const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);


export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
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
        author {
          id
          name
        }
        createdAt
        markdown
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
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
  const { posts } = await graphcms.request(`
    {
      posts {
        id
        title
        content{
          text
        }
        slug
        coverImage {
          id
          url
        }
        author {
          id
          name
        }
        markdown
      }
    }
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}


import Layout from '../../components/layout'

export default function Post({ post }) {
  return (
    <Layout>
      <PostLayout page={post}/>
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