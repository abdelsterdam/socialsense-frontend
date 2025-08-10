
import { ReactNode } from 'react'
export default function ChartShell({title, children}:{title:string, children:ReactNode}){
  return (
    <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
      <div className="font-semibold mb-2">{title}</div>
      <div className="h-48">{children}</div>
    </div>
  )
}
