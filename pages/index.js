import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

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
      <section className="bg-dark pt-5 mb-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-6 fw-bolder text-white mb-2">
              <span className="d-block">
                We build </span>
              <span className="d-block">
                <span className="text-primary">websites</span> for <span className="text-primary">Lawfirms</span>
              </span>
            </h1>
            <p className="lead fw-normal text-white-50 mb-4">LegalTechHouse helps you digially transform your lawfirm business by bringing it online!</p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">

              <Link href={`/pricing`}>
                <a className="btn btn-primary btn-lg px-4 me-sm-3">Get Started</a>
              </Link>
              <Link href={`/features`}>
                <a className="btn btn-outline-light btn-lg px-4">Learn More</a>
              </Link>
            </div>
          </div>

          <div className="row align-items-center justify-content-center mb-n5">
            <div className="col text-center me-n5">
              <div className="device" data-device="Macbook2015" data-orientation="portrait" data-color="black">
                <div className="screen">
                  <img src="/images/home.png" className="img-fluid" alt="Bootstrap Themes" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-3 text-center ms-n5 mb-n5">
              <div className="device device-mobile" data-device="iPhone7" data-orientation="portrait" data-color="black">
                <div className="screen">
                  <img src="/images/home-mobile.png" className="img-fluid" alt="Bootstrap Themes" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-icons text-center bg-light d-none">
        <div className="container">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">Product Features</h2>
                <p className="text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                <h3 className="h4 fw-bolder">Fully Responsive Websites</h3>
                <p className="lead fw-normal mb-0">Our websites will look great on any device, no matter the size!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"></i></div>
                <h3 className="h4 fw-bolder">Bootstrap 5 Ready</h3>
                <p className="lead fw-normal mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary"></i>
                </div>
                <h3 className="h4 fw-bolder">Easy to Use</h3>
                <p className="lead fw-normal mb-0">Ready to use with your own content, or customize the source files!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial section */}
      <section className="py-5 bg-dark text-white d-none">
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
      <section className="bg-light d-none">
        <div className="container px-4 py-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">Our blog</h2>
                <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
              </div>
            </div>
          </div>
          <div className="row gx-5 justify-content-center">
            {allPostsData.map(({ id, date, title, description }) => (
              <article className="col-10 col-sm-6 col-lg-4 mb-5" key={id}>
                <div className="card h-100 shadow border-0">
                  <Link href={`/posts/${id}`}>
                    <a>
                      <img src="https://dummyimage.com/600x350/ced4da/6c757d" className="card-img-top" alt={title} />
                    </a>
                  </Link>
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>

                    <Link href={`/posts/${id}`}>
                      <a className="text-decoration-none link-dark stretched-link">
                        <h2 className="h5 card-title mb-3">
                          {title}<br />
                          <span className="d-block h6">

                          </span>
                        </h2>
                      </a>
                    </Link>
                    <p className="card-text mb-0">{description}</p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="small">
                      <div className="text-muted"><Date dateString={date} /> &middot; 6 min read</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
