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
          <h1 className="title from-title">We Develop</h1>
        </div>
      </section>
      <section className="bg built-bg">
        <div className="card blur-background">
          <h1 className="title from-title">We have built</h1>
        </div>
      </section>
      <section className="bg chat-bg">
        <div className="card blur-background">
          <h1 className="title from-title">Chat with us</h1>
        </div>
      </section>
    </section>
  </>
)

export default IndexPage
