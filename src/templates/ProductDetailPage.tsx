import React from "react"
import { Product } from "../../types/product"
import ProductDetail from "../components/ProductDetail"

export interface ProductDetailPageProps {
  pageContext: {
    product: Product
  }
}

const ProductDetailPage = ({
  pageContext,
}: ProductDetailPageProps): JSX.Element => {
  const { product } = pageContext
  return <ProductDetail product={product} />
}

export default ProductDetailPage
