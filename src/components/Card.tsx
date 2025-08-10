
import { ReactNode } from 'react'
export default function Card({children}:{children:ReactNode}){
  return <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">{children}</div>
}
