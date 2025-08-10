
import Card from '../components/Card'
import Stat from '../components/Stat'
import Tip from '../components/Tip'
import { useEffect, useState } from 'react'

type Summary = {
  followers: number;
  views: number;
  engagementRate: number;
  bestPlatform: string;
  tip: string;
}

export default function Dashboard(){
  const [data, setData] = useState<Summary | null>(null)

  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL + '/api/summary')
      .then(r=>r.json()).then(setData).catch(()=>{
        setData({
          followers: 24800, views: 156000, engagementRate: 6.2, bestPlatform: 'TikTok', tip: 'Je Instagram Reels presteren 35% beter tussen 18:00–20:00.'
        })
      })
  },[])

  return (
    <div className="space-y-4">
      <div>
        <div className="text-2xl font-semibold">Goedemorgen, mo</div>
        <div className="text-xs text-zinc-400">zondag 10 augustus</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card><Stat label="Totale volgers" value={`${data?.followers?.toLocaleString() ?? '—'}`} sub="+12% deze maand"/></Card>
        <Card><Stat label="Totale views" value={`${data?.views?.toLocaleString() ?? '—'}`} sub="+8% deze week"/></Card>
        <Card><Stat label="Engagement rate" value={`${data?.engagementRate ?? '—'}%`} sub="+1.4% vs vorig"/></Card>
        <Card><Stat label="Beste platform" value={`${data?.bestPlatform ?? '—'}`} sub="42% van totaal"/></Card>
      </div>

      <Tip text={data?.tip ?? 'Persoonlijke tip verschijnt hier op basis van je data.'} />

      <a href="/chat" className="block text-center bg-white text-black rounded-2xl py-3 font-medium">Vraag je AI buddy iets →</a>

      <div className="grid grid-cols-2 gap-3">
        <a href="/analytics" className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 text-center">Analytics</a>
        <a href="/accounts" className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 text-center">Accounts</a>
      </div>
    </div>
  )
}
