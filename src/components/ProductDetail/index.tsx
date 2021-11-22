import React from "react"
import { Product } from "../../../types/product"
import { Container, Image, ItemContainer } from "./styles"

export interface ProductDetailProps {
  product: Product
}

const ProductDetail = ({ product }: ProductDetailProps): JSX.Element => {
  return (
    <Container>
      <ItemContainer>
        <Image src={product.PictureURL} />
        <div>
          <h2>{product.Name}</h2>
          <h3>
            ${product.Price}{" "}
            <span className="line-through">${product.Retail_Price}</span>
          </h3>
        </div>
      </ItemContainer>
    </Container>
  )
}

export default ProductDetail
