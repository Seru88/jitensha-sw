export async function getProduct(id: string): Promise<Record<string, unknown>> {
  const res = await fetch(`https://api.e-junkie.com/api/153220/${id}/?page=1`, {
    method: 'POST',
    body: require('querystring').stringify({
      key: process.env.EJUNKIE_API_KEY,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res.json()
}

export async function getProducts(): Promise<Record<string, unknown>> {
  const res = await fetch('https://api.e-junkie.com/api/153220/?page=1', {
    method: 'POST',
    body: require('querystring').stringify({
      key: process.env.EJUNKIE_API_KEY,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res.json()
}
