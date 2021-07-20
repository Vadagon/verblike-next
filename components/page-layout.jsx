import Image from "next/image";
import Link from "next/link";
// import '../styles/post.scss'
import Date from "/components/date"

export default function PostLayout({ page }) {
    console.log(page);
    return (
        <main className="content">
            <link
                rel="stylesheet"
                href="https://web.archive.org/web/20210305153011cs_/https://extension.expert/wp-content/themes/chrome.expert/css/post.css"
            />
            <article
                id="post-77"
                className="blog__listing post-77 post type-post status-publish format-standard has-post-thumbnail hentry category-chrome category-publication tag-chrome tag-extensions tag-pending-review tag-publication tag-review tag-web-store"
            >
                <div className="blog__listing-thumbnail">
                    {page.coverImage&&<Image
                        priority
                        width={page.coverImage.width}
                        height={page.coverImage.height}
                        src={page.coverImage.url}
                        className="img-fluid wp-post-image jetpack-lazy-image"
                        alt="Extensions Status"
                    />}
                </div>
                {/*<!-- .post-thumbnail -->*/}

                <h1 className="blog__listing-title">
                    {page.title}
                </h1>

                {/*<!-- <h3 className="blog__listing-title"><a href="#">Dolores lucilius periculis id usu, iudicabit definitionem eu vel numquam consequuntur no mei</a></h3> -->*/}
                {page.author&&
                <ul className="blog__listing-meta">
                    <li>
                        <label>
                            <i className="fa fa-user"></i> Author:
                        </label>
                        <a
                            className="url fn n"
                            // href="https://web.archive.org/web/20210305153011/https://extension.expert/blog/author/vadagon/"
                        >
                            {page.author.name}
                        </a>
                    </li>
                    <li>
                        <label>
                            <i className="fa fa-calendar"></i> Published:
                        </label>
                        <a
                            // href="https://web.archive.org/web/20210305153011/https://extension.expert/blog/what-the-meaning-of-the-color-pending-review/"
                            rel="bookmark"
                        >
                            <Date className="entry-date published updated" dateString={page.createdAt} />
                        </a>
                    </li>
                    {/*							<!-- <li>
                                <label><i className="fa fa-comments"></i> Commnents : </label>
                                <a href="#">2</a>
                            </li> -->*/}
                </ul>
}

                <div className="blog__listing-content">
                    <div className="blog__listing-content--text" dangerouslySetInnerHTML={{ __html: page.content.html }}>
                        {/* <p>
                            If you bothered what orange / red / yellow color of Pending Review
                            mean in
                            <a href="https://web.archive.org/web/20210305153011/https://chrome.google.com/webstore/devconsole">
                                Web Store Developer Dashboard
                            </a>
                            . You are in a right place.
                        </p>

                        <p>
                            Firstly, there is no official documentations about that. So
                            everything what is below is just an assumption.
                        </p>

                        <h2>Our story case</h2>

                        <ul>
                            <li>We put an extension in an update on December 3rd</li>
                            <li>It was in “Pending Review” status for 4 days.</li>
                            <li>
                                Last 2 days “Pending Review” font color was changed to orange.
                            </li>
                            <li>Update finally got published on December 7th</li>
                        </ul>

                        <p>
                            And we got a lot of similar stories, except one… We have orange
                            label “Pending Review” for about half a year… You decide what to
                            think.
                        </p>

                        <h2>Conclusion</h2>

                        <p>
                            It seems that the colour means automatic vs manual review process.
                        </p>

                        <p>Black Pending Review – automatic process</p>

                        <p>Orange – manual process</p> */}
                    </div>
                    {/* <ul className="blog__listing-content--tags">
                        <li>
                            <a
                                href="https://web.archive.org/web/20210305153011/https://extension.expert/blog/tag/chrome/"
                                rel="tag"
                            >
                                chrome
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20210305153011/https://extension.expert/blog/tag/extensions/"
                                rel="tag"
                            >
                                extensions
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20210305153011/https://extension.expert/blog/tag/pending-review/"
                                rel="tag"
                            >
                                pending review
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20210305153011/https://extension.expert/blog/tag/publication/"
                                rel="tag"
                            >
                                publication
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20210305153011/https://extension.expert/blog/tag/review/"
                                rel="tag"
                            >
                                review
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://web.archive.org/web/20210305153011/https://extension.expert/blog/tag/web-store/"
                                rel="tag"
                            >
                                web store
                            </a>
                        </li>
                    </ul> */}
                </div>
            </article>
        </main>
    );
}
