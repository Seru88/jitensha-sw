import { getProduct, getProducts } from '@/lib/ejunkie-api'
import { EjunkieProduct } from '@/schema'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/ui/carousel'
import { CarouselItem } from '@/components/ui/carousel'
import { CarouselContent } from '@/components/ui/carousel'
import { CarouselNext } from '@/components/ui/carousel'
import { CarouselPrevious } from '@/components/ui/carousel'
import { FadeIn } from '@/components/fade-in'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  const data = await getProducts()
  return (data.products as EjunkieProduct[]).map(comic => ({
    id: comic.id
  }))
}

export default async function ComicProductPage({ params }: Props) {
  const data = await getProduct(params.id)
  const products = data.products as EjunkieProduct[]
  const comic = products.length ? products[0] : null

  return (
    <FadeIn>
      <div className='grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12'>
        <div className='grid gap-4 md:gap-6'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            {comic?.name}
          </h1>
          <div className='flex flex-wrap items-center gap-2 capitalize'>
            {comic?.tags
              .filter(tag => tag !== null)
              .toSorted((a, b) => b!.length - a!.length)
              .map(tag => (
                <div key={tag} className='badge badge-secondary font-semibold'>
                  {tag}
                </div>
              ))}
          </div>
          <div className='grid gap-2 text-base lg:gap-4 xl:gap-6'>
            <p>{comic?.details}</p>
          </div>
          <div className='grid gap-4 md:gap-6'>
            <div className='flex items-center gap-2 text-sm'>
              {/* <CalendarIcon className="w-4 h-4 fill-muted" /> */}
              <span className='text-sm text-gray-500 dark:text-gray-400'>
                Published on June 23, 2023
              </span>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              {/* <DownloadIcon className="w-4 h-4 fill-muted" /> */}
              <span className='text-sm text-gray-500 dark:text-gray-400'>
                Includes PDF, ePub, and Kindle formats
              </span>
            </div>
          </div>
          <div className='grid gap-4 md:gap-6'>
            <div className='grid gap-2'>
              <Label className='text-base' htmlFor='color'>
                Color
              </Label>
              <RadioGroup
                className='flex items-center gap-2'
                defaultValue='full'
                id='color'
              >
                <Label
                  className='flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                  htmlFor='color-full'
                >
                  <RadioGroupItem id='color-full' value='full' />
                  Full Color
                </Label>
                <Label
                  className='flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                  htmlFor='color-bw'
                >
                  <RadioGroupItem id='color-bw' value='bw' />
                  B&W{'\n                              '}
                </Label>
              </RadioGroup>
            </div>
            <div className='grid gap-2'>
              <Label className='text-base' htmlFor='format'>
                Format
              </Label>
              <RadioGroup
                className='flex items-center gap-2'
                defaultValue='pdf'
                id='format'
              >
                <Label
                  className='flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                  htmlFor='format-pdf'
                >
                  <RadioGroupItem id='format-pdf' value='pdf' />
                  PDF{'\n                              '}
                </Label>
                <Label
                  className='flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                  htmlFor='format-epub'
                >
                  <RadioGroupItem id='format-epub' value='epub' />
                  ePub{'\n                              '}
                </Label>
                <Label
                  className='flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                  htmlFor='format-kindle'
                >
                  <RadioGroupItem id='format-kindle' value='kindle' />
                  Kindle
                </Label>
              </RadioGroup>
            </div>
          </div>
          <div className='grid gap-2 md:gap-4'>
            <div className='text-2xl font-bold'>{`$${comic?.price} USD`}</div>
            <Button size='lg'>Buy Now</Button>
          </div>
        </div>
        <div className='grid gap-4 md:gap-6'>
          <Carousel className='mx-auto w-full max-w-md overflow-hidden'>
            <CarouselContent>
              {comic?.images
                .filter(src => src !== null)
                .map((src, i) => (
                  <CarouselItem key={i}>
                    <AspectRatio ratio={3 / 4}>
                      <Image
                        alt='Cover'
                        className='object-cover'
                        src={src!}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}

              {/* <CarouselItem>
                <img
                  alt='Cover'
                  className='aspect-auto object-cover'
                  height={225}
                  src='/placeholder.svg'
                  width={400}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Cover'
                  className='aspect-auto object-cover'
                  height={225}
                  src='/placeholder.svg'
                  width={400}
                />
              </CarouselItem> */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='flex flex-col gap-2'>
            <Button size='sm' variant='outline'>
              Preview
            </Button>
            <Button size='sm' variant='outline'>
              Add to Library
            </Button>
          </div>
        </div>
        <div className='grid gap-4 md:col-span-2 md:gap-6'>
          <h3 className='text-xl font-bold'>You might also like</h3>
          <div className='grid gap-4 gap-y-0 md:gap-6 lg:grid-cols-2 xl:grid-cols-2'>
            <div className='flex gap-4'>
              <img
                alt='Cover'
                className='aspect-[3/4] rounded-lg object-cover'
                height={180}
                src='/placeholder.svg'
                width={120}
              />
              <div className='grid gap-2.5'>
                <h4 className='font-semibold tracking-tighter'>
                  The Intergalactic Adventures of Nebula Jones
                </h4>
                <p className='text-sm leading-none tracking-tight'>
                  by John J. Johnson
                </p>
                <Button size='sm'>View</Button>
              </div>
            </div>
            <div className='flex gap-4'>
              <img
                alt='Cover'
                className='aspect-[3/4] rounded-lg object-cover'
                height={180}
                src='/placeholder.svg'
                width={120}
              />
              <div className='grid gap-2.5'>
                <h4 className='font-semibold tracking-tighter'>
                  The Secret of the Crystal Moon
                </h4>
                <p className='text-sm leading-none tracking-tight'>
                  by A. R. Adventure
                </p>
                <Button size='sm'>View</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
