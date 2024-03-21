import { ComicProductCard } from '@/components/comic-product-card'
import type { Metadata } from 'next'
import { EjunkieProduct } from './schema'
import { getProducts } from '@/lib/ejunkie-api'

export const metadata: Metadata = {
  title: 'JitenshaSW - Shop',
  description: 'Generated by create next app',
}

export default async function Comics() {
  const data = await getProducts()
  const products = data.products as EjunkieProduct[]

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {products.map(prod => (
          <ComicProductCard key={prod.id as string} comic={prod} />
        ))}
      </div>
    </div>
  )
}
