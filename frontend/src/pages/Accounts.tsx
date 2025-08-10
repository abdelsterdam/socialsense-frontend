
export default function Accounts(){
  const btn = "flex items-center justify-between bg-zinc-900 rounded-2xl p-4 border border-zinc-800";
  return (
    <div className="space-y-4">
      <div className="text-2xl font-semibold">Beheer je Accounts</div>
      <div className="text-sm text-zinc-400">Koppel je sociale profielen.</div>

      <div className="text-sm text-zinc-400">Gekoppelde Accounts</div>
      <div className="text-zinc-500 text-sm">Nog geen accounts gekoppeld.</div>

      <div className="text-sm text-zinc-400">Koppel een nieuw account</div>
      <button className={btn}>Koppel Instagram <span>→</span></button>
      <button className={btn}>Koppel TikTok <span>→</span></button>
      <button className={btn}>Koppel YouTube <span>→</span></button>
    </div>
  )
}
