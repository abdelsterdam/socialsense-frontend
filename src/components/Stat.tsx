
export default function Stat({label, value, sub}:{label:string,value:string,sub?:string}){
  return (
    <div>
      <div className="text-zinc-400 text-xs">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      {sub && <div className="text-xs text-zinc-400 mt-1">{sub}</div>}
    </div>
  )
}
