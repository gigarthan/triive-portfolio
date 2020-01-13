import React from "react"
import SEO from "../components/seo"
import "../styles/home.scss"
import Product from "../components/Product"
import triiveStore from "../images/triive.png"
import compassion from "../images/compassion.png"
import techNutpam from "../images/technutpam.png"
import antomMaths from "../images/antom.png"
import moocRec from "../images/mooc.png"

const products = [
  {
    title: "Triive Ecommerce",
    description: "Which is a marketplace for homemade items",
    image: triiveStore,
    url: "https://triive.lk/",
  },
  {
    title: "TheCompassion.org",
    description:
      "A Charity organization focuses on War affected northern part of Sri Lanka",
    image: compassion,
    url: "https://thecompassion.org/",
  },
  {
    title: "TechNutpam",
    description: "Tamil Technology Blog",
    image: techNutpam,
    url: "https://technutpam.xyz/",
  },
  {
    title: "Antommaths.com",
    description: "A personal blog for maths subject",
    image: antomMaths,
    url: "http://antommaths.com/",
  },
  {
    title: "MOOCRecHumanity",
    description: "Mooc Recommender Engine",
    image: moocRec,
    url: "https://moocrechumanity.netlify.com/",
  },
]

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="home">
      <section className="bg intro-bg">
        <div className="card blur-background">
          <h1 className="title">
            <span className="title-sm">Welcome to</span> triive
          </h1>
        </div>
      </section>
      <section className="bg from-bg">
        <div className="card blur-background">
          <div className="card-content">
            <h1 className="title from-title">
              We are a creative Agency from the land of Pearls (Sri Lanka)
            </h1>
          </div>
        </div>
      </section>
      <section className="bg solve-bg">
        <div className="card blur-background">
          <div className="card-content">
            <h1 className="title from-title">
              We focus solving problems in a pragmatic way to build your
              business to the next level
            </h1>
          </div>
        </div>
      </section>
      <section className="bg dev-bg">
        <div className="card blur-background">
          <div className="card-content">
            <div className="dev-title">
              <h1 className="title from-title">We Develop</h1>
            </div>
            <div className="services-container">
              <div className="services">
                <h2>Website Designing & Development</h2>
              </div>
              <div className="services">
                <h2>Mobile Application Designing & Development</h2>
              </div>
              <div className="services">
                <h2>Social Media Management</h2>
              </div>
              <div className="services">
                <h2>Business Data Analysis</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg built-bg">
        <div className="card blur-background">
          <div className="built-container card-content">
            <div>
              <div className="dev-title">
                <h1 className="title from-title">We have built</h1>
              </div>
              <div className="products-container">
                {products.map(product => (
                  <Product {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg chat-bg">
        <div className="card blur-background">
          <div className="card-content">
            <div className="dev-title">
              <h1 className="title from-title">Chat with us</h1>
            </div>
            <div className="services-container">
              <div className="services pointer">
                <h2>Email</h2>
              </div>
              <div className="services pointer">
                <h2>Facebook</h2>
              </div>
              <a
                href="https://www.linkedin.com/company/triive-agency/"
                target="_blank"
              >
                <div className="services linkedin pointer">
                  <h2>LinkedIn</h2>
                </div>
              </a>
              <a href="https://twitter.com/gigarthan" target="_blank">
                <div className="services twitter pointer">
                  <h2>Twitter</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </>
)

export default IndexPage
