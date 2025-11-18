import { useContext } from "react"
import { UserContext } from "../App"
import { Moon, Sun } from "lucide-react";

export default function Header(){
    const {isDark, setIsDark} = useContext(UserContext);
    return <>
        {/* HEADER & NAVIGATION */}
        <header className={`${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border-b sticky top-0 z-50 transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold flex items-center gap-1">
                Jumayev <span className={isDark ? 'text-cyan-400' : 'text-blue-500'}>/</span>
            </h1>
            
            <nav className="hidden md:flex gap-8 items-center">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-blue-500'} transition-colors pb-2 border-b-2 ${item === 'About' ? (isDark ? 'border-cyan-400 text-cyan-400' : 'border-blue-500 text-blue-500') : 'border-transparent'}`}
                >
                    {item}
                </a>
                ))}
            </nav>

            <button
                onClick={() => setIsDark(!isDark)}
                className={`${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'} p-2 rounded-lg transition-colors cursor-pointer`}
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            </div>
        </header>
    </>
}