import { PropsWithChildren } from "react";

export function FadeIn(props: PropsWithChildren) {
   return <div className="animate-in fade-in duration-300">{props.children}</div>
}