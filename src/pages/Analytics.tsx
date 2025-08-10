
import ChartShell from '../components/ChartShell'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts'
import { useEffect, useState } from 'react'

export default function Analytics(){
  const [growth, setGrowth] = useState<any[]>([])
  const [engagement, setEngagement] = useState<any[]>([])

  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL + '/api/analytics')
      .then(r=>r.json()).then((d)=>{
        setGrowth(d.growth); setEngagement(d.engagement);
      }).catch(()=>{
        setGrowth([
          { month: 'Jan', value: 4000 },{ month: 'Feb', value: 3000 },{ month: 'Mrt', value: 4800 },{ month: 'Apr', value: 4300 },{ month: 'Mei', value: 6000 },{ month: 'Jun', value: 5800 },
        ])
        setEngagement([
          { platform: 'Instagram', value: 4.5 },
          { platform: 'TikTok', value: 8.1 },
          { platform: 'YouTube', value: 2.3 },
        ])
      })
  }, [])

  return (
    <div className="space-y-4">
      <div className="text-2xl font-semibold">Uitgebreide Analytics</div>
      <ChartShell title="Volgersgroei (Totaal)">
        <LineChart data={growth} width={320} height={160}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" dot />
        </LineChart>
      </ChartShell>
      <ChartShell title="Engagement per Platform (%)">
        <BarChart data={engagement} width={320} height={160}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="platform" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ChartShell>
    </div>
  )
}
