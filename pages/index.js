import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css';

const name = 'Legal Tech House';

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
      <section className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <h1 className="display-5 fw-bolder text-white mb-2">Welcome to <br />  {name}</h1>
              <p className="lead fw-normal text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-primary btn-lg px-4 me-sm-3">Sign-up!</a>
                <a className="btn btn-outline-light btn-lg px-4">Learn More</a>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img src="./images/bootstrap-themes.png" className="img-fluid rounded-3 my-5" alt="Bootstrap Themes" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <section className="features-icons text-center bg-light">
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
      {/* Testimonial section */}
      <section className="py-5 bg-dark text-white">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10 col-xl-7">
              <div className="text-center">
                <div className="fs-4 mb-4 fst-italic">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</div>
                <div className="d-flex align-items-center justify-content-center">
                  <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                  <div className="fw-bold">
                    Tom Ato <span className="fw-bold text-primary mx-1">/</span>
                    CEO, Pomodoro
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container px-4 py-5">
          <h2 className="pb-2">Blog</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {allPostsData.map(({ id, date, title, description, icon }) => (
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
                <p>{description}</p>

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
