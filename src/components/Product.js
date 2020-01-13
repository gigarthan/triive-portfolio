import React from "react"
import "../styles/product.scss"

export default function Product({ image, title, description, url }) {
  return (
    <a
      className="products"
      rel="noopener noreferrer"
      href={url}
      target="_blank"
    >
      <div>
        <h2>{title}</h2>
        <div>
          <img src={image} />
        </div>
        <h3>{description}</h3>
      </div>
    </a>
  )
}
