export type EjunkieProduct = {
  id: string
  name: string
  price: string
  currency: string
  description: string
  details: string
  image: string
  thumbnail: string
  tagline: string
  purchased: number
  tags: (null | string)[]
  file_size: string
  images: (null | string)[]
}

// export const comics: EjunkieProduct[] = [
//   {
//     id: 'a',
//     name: 'comic1',
//     price: '7.00',
//     currency: 'USD',
//     description: 'something something',
//     details: 'more something',
//     image: 'url',
//     thumbnail: 'url',
//     tagline: 'a tag line',
//     purchased: 2,
//     tags: ['tag1', 'tag2'],
//     file_size: '1mb',
//     images: ['url', 'url']
//   }
// ]
