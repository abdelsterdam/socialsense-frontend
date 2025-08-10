
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Analytics from './pages/Analytics'
import Accounts from './pages/Accounts'

function Tab({to, label, icon}: {to:string,label:string,icon?:string}){
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <NavLink to={to} className={`flex-1 text-center py-3 rounded-2xl ${active ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}>
      <div className="text-sm">{label}</div>
    </NavLink>
  );
}

export default function App(){
  return (
    <div className="min-h-screen bg-black text-white px-4 max-w-md mx-auto">
      <header className="pt-6 pb-3 flex items-center justify-between">
        <div className="font-bold text-xl">SocialSense</div>
        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">M</div>
      </header>
      <div className="pb-24">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/accounts" element={<Accounts/>} />
        </Routes>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800">
        <div className="max-w-md mx-auto flex gap-2 p-2">
          <Tab to="/" label="Dashboard"/>
          <Tab to="/chat" label="Chat"/>
          <Tab to="/analytics" label="Analytics"/>
          <Tab to="/accounts" label="Accounts"/>
        </div>
      </nav>
    </div>
  )
}
