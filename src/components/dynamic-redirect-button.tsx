'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

type Props = { to: string } & ButtonProps

export function DynamicRedirectButton({ to, ...props }: Props) {
  const router = useRouter()
  const handleRedirect = () => {
    router.push(to)
  }
  return <Button {...props} onClick={handleRedirect} />
}
