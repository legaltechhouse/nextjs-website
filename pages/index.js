import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css';

const name = 'Welcome to Legal Tech House';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title> {siteTitle} </title>
      </Head>
      <section className="bg-white">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="./images/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-1 fw-bold lh-1 mb-3">{name}</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Sign-up!</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn More</button>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="features-icons bg-dark text-center text-white">
        <h2 className="">Features</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                            <h3>Fully Responsive</h3>
                            <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"></i></div>
                            <h3>Bootstrap 5 Ready</h3>
                            <p className="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"></i></div>
                            <h3>Easy to Use</h3>
                            <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <section className="bg-light">
      <div className="container px-4 py-5">
        <h2 className="pb-2">Blog</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {allPostsData.map(({ id, date, title, icon }) => (
            <article className="feature col col-md-6" key={id}>
              <div className="feature-icon bg-primary bg-gradient">
                <i className={`bi bi-${icon}`}></i>
              </div>
              <h3 className="h4">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </h3>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

              <Link href={`/posts/${id}`}>
                <a className="icon-link">
                  Read More
                <i className="bi-arrow-right" role="img" aria-label="arrow right"></i>
                </a>
              </Link>
            </article>
          ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
