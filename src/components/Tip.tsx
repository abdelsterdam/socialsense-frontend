
export default function Tip({text}:{text:string}){
  return (
    <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
      <div className="text-sm">
        <span className="inline-block mr-2 px-2 py-0.5 rounded bg-zinc-800">AI Tip</span>
        {text}
      </div>
    </div>
  )
}
