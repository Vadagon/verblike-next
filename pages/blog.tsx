import Link from '../components/link'
import Layout from '../components/layout'
import Head from 'next/head'
import { GraphQLClient } from "graphql-request";
import Date from "../components/date"
import Image from 'next/image'
const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);


export async function getStaticProps() {
    const { posts } = await graphcms.request(
        `
    query Posts() {
      posts {
        id
        title
        excerpt
        slug
        createdAt
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
      }
    }
  `
    );

    return {
        props: {
            posts,
        },
    };
}

export default function Blog({ posts }) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <section className="section-grey" id="blog">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title"><a href="#">Blog</a></h2>
                            <p className="section-subtitle">Latest news, tips and best practices.</p>
                        </div>
                    </div>
                    <div className="row">
                        {posts.map((post) => {
                            // console.log(post);
                            return (
                                <div className="col-md-4" key={post.id}>
                                    <div className="blog-item" >
                                        <div className="popup-wrapper">
                                            <div className="popup-gallery">
                                                <Link as={`/post/${post.slug}`} href="/post/[slug]">
                                                    {post.coverImage && <Image src={post.coverImage.url} alt={post.title} width={post.coverImage.width} height={post.coverImage.height} />}
                                                    <span className="eye-wrapper2"><i className="fa fa-link eye-icon"></i></span>
                                                </Link>
                                            </div>
                                        </div>
                                        {/*</Link>*/}
                                        <div className="blog-item-inner">
                                            <h3 className="blog-title"><Link className="blog-icons last" as={`/post/${post.slug}`} href="/post/[slug]">{post.title}</Link></h3>
                                            <i className="fa fa-calendar-o"></i>
                                            &nbsp;&nbsp;
                                            {/* {Date(post.createdAt})} */}
                                            <Date dateString={post.createdAt} />

                                            <div> {post.excerpt} </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </Layout>
    )
}