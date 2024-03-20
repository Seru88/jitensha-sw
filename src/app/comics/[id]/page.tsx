import { getProduct, getProducts } from '@/lib/ejunkie-api'
import { EjunkieProduct } from '../schema'

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  const data = await getProducts()
  return (data.products as EjunkieProduct[]).map(comic => ({
    id: comic.id,
  }))
}

export default async function ComicProductPage({ params }: Props) {
  const data = await getProduct(params.id)
  const products = data.products as EjunkieProduct[]
  const comic = products.length ? products[0] : null

  return <div>
    <h2>{comic?.name}</h2>
    <span>{comic?.price}</span>
  </div>
}
