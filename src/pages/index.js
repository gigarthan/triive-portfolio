import React from "react"

import SEO from "../components/seo"
import "../styles/home.scss"

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
          <h1 className="title from-title">
            We are a creative Agency from the land of Pearls (Sri Lanka)
          </h1>
        </div>
      </section>
      <section className="bg solve-bg">
        <div className="card blur-background">
          <h1 className="title from-title">
            We focus solving problems in a pragmatic way to build your business
            to the next level
          </h1>
        </div>
      </section>
      <section className="bg dev-bg">
        <div className="card blur-background">
          <div>
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
          <h1 className="title from-title">We have built</h1>
        </div>
      </section>
      <section className="bg chat-bg">
        <div className="card blur-background">
          <div>
            <div className="dev-title">
              <h1 className="title from-title">Chat with us</h1>
            </div>
            <div className="services-container">
              <div className="services">
                <h2>Email</h2>
              </div>
              <div className="services">
                <h2>Facebook</h2>
              </div>
              <div className="services">
                <h2>LinkedIn</h2>
              </div>
              <div className="services">
                <h2>Twitter</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </>
)

export default IndexPage
