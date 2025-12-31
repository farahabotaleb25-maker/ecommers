'use client'

import { useParams } from 'next/navigation'
import ProductDetails from '../../../src/Pages/ProductDetails'

export default function ProductDetailPage() {
  const params = useParams()
  
  return <ProductDetails productId={params.id} />
}
