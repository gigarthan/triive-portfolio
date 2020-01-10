import React from "react"
import "../styles/product.scss"

export default function Product({ image, title, description }) {
  return (
    <div className="products">
      <h2>{title}</h2>
      <div>
        <img src={image} />
      </div>
      <h3>{description}</h3>
    </div>
  )
}
