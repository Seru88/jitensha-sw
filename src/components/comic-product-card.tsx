/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RoRcjPRmTd6
 */
import { EjunkieProduct } from '@/app/comics/schema'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'

type Props = {
  comic: EjunkieProduct
}

export function ComicProductCard({ comic }: Props) {
  return (
    <Card className='relative mx-auto w-full overflow-hidden transition-transform duration-300 ease-out hover:scale-105'>
      <Link href={`/comics/${comic.id}`}>
        <AspectRatio
          ratio={240 / 340}
          className='transition-all hover:brightness-[.8]'
        >
          <Image
            src={comic.images[0] ?? ''}
            alt={comic.name ?? ''}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
          />
        </AspectRatio>
        <CardContent className='pointer-events-none absolute bottom-0 flex h-36 w-full flex-col justify-end bg-gradient-to-t from-black p-4'>
          <CardTitle className='text-lg font-semibold leading-6 text-white'>
            {comic.name ?? 'N/A'}
          </CardTitle>
          <div className='mt-2 flex flex-wrap gap-2 capitalize'>
            {comic.tags
              .filter(tag => tag !== null)
              .toSorted((a, b) => b!.length - a!.length)
              .map(tag => (
                <Badge key={tag} variant='secondary' className='badge-sm'>
                  {tag}
                </Badge>
              ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
