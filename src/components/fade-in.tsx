import { PropsWithChildren } from 'react'

export function FadeIn(props: PropsWithChildren) {
  return <div className='duration-300 animate-in fade-in'>{props.children}</div>
}
