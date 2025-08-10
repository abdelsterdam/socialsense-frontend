
import { useState } from 'react'

type Message = { role: 'user'|'assistant', content: string }

export default function Chat(){
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hoi! Ik ben je persoonlijke AI social media buddy. Waar wil je vandaag aan werken?' }
  ])
  const [input, setInput] = useState('')

  async function send(){
    if(!input.trim()) return
    const userMsg: Message = { role: 'user', content: input }
    setMessages(m => [...m, userMsg])
    setInput('')
    try{
      const res = await fetch(import.meta.env.VITE_API_URL + '/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content })
      })
      const data = await res.json()
      setMessages(m => [...m, { role: 'assistant', content: data.reply }])
    }catch{
      setMessages(m => [...m, { role: 'assistant', content: 'Er ging iets mis; maar hier is een tip: post 3x per week en test 2 formats parallel.' }])
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      <div className="flex-1 space-y-2 overflow-y-auto pr-1">
        {messages.map((msg, i)=>(
          <div key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 ${msg.role==='assistant'?'bg-zinc-900':'bg-brand text-white ml-auto'}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Stel een vraag aan je buddy..." className="flex-1 bg-zinc-900 rounded-2xl px-3 py-3 outline-none border border-zinc-800" />
        <button onClick={send} className="px-4 rounded-2xl bg-brand">⟶</button>
      </div>
    </div>
  )
}
