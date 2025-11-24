import { useContext, useState } from "react"
import { UserContext } from "../App"
import { Folder, Home, Info, InfoIcon, LogIn, Menu, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header(){
    const {isDark, setIsDark} = useContext(UserContext);
    const [hide, setHide] = useState(false);
    const isAuth = localStorage.getItem('isAuth');
    const user = JSON.parse(localStorage.getItem('user'));
    return <>
        {/* HEADER & NAVIGATION */}
        <header className={`${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} h-[90px] border-b sticky top-0 z-50 transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold flex items-center gap-1">
                    Jumayev <span className={isDark ? 'text-cyan-400' : 'text-blue-500'}>/</span>
                </h1>
                
                <nav className="hidden md:flex gap-8 items-center font-medium">
                    <NavLink to={'/'} className={({isActive}) => isActive ? `${isDark ? `text-cyan-400` : `text-blue-500`}` : `` }>Home</NavLink>
                    <NavLink to={'/about'} className={({isActive}) => isActive ? `${isDark ? `text-cyan-400` : `text-blue-500`}` : `` }>About</NavLink>
                    <NavLink to={'/projects'} className={({isActive}) => isActive ? `${isDark ? `text-cyan-400` : `text-blue-500`}` : `` }>Projects</NavLink>
                    <NavLink to={'/chat'} className={({isActive}) => isActive ? `${isDark ? `text-cyan-400` : `text-blue-500`}` : `` }>Chat</NavLink>
                </nav>

                <div className="h-full flex items-center justify-between gap-2">
                    <button onClick={() => setIsDark(!isDark)} className={`${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'} p-2 rounded-lg transition-colors cursor-pointer`}>
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {isAuth ? (
                        <NavLink title="Profile" to={'/profile'} className={`${isDark ? 'bg-orange-600 hover:bg-slate-700 ' : 'bg-blue-600 hover:bg-slate-300'} text-white h-[35px] w-[35px] flex items-center justify-center rounded-full transition-colors cursor-pointer`}>
                            <p className="text-[14px] font-semibold font-[cursive]">{user.name.slice(0, 1)}</p>
                        </NavLink>
                    ) : (
                        <NavLink to={'/login'} className={`${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'} p-2 rounded-lg transition-colors cursor-pointer`}>
                            <LogIn color="cyan" size={20} />
                        </NavLink>
                    )}

                    <button onClick={() => setHide(!hide)} className={`${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'} md:hidden flex p-2 rounded-lg transition-colors cursor-pointer`}>
                        <Menu size={20} />
                    </button>
                </div>

                {/* MD: Hide Menu */}
                <div onClick={(e) => {
                    setHide(false);
                }} className={`${hide ? `flex` : `hidden`} md:hidden fixed bottom-0 left-0 backdrop-blur-[2px] w-full h-[calc(100vh-90px)] items-end`}>

                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} className={`${isDark ? `bg-slate-950` : `bg-white border-slate-500`} w-full mx-auto flex flex-col pb-5 px-13 rounded-tl-[20px] rounded-tr-[20px] shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,rgba(14,30,37,0.32)_0px_2px_16px_0px] transition-all duration-300`}>
                        <div className="w-full h-[25px] flex items-start justify-center mt-3">
                            <div className={`${isDark ? `bg-slate-700` : `bg-gray-300`} w-[60%] h-[7px] rounded-full transition-all duration-300`}></div>
                        </div>
                        <div className={`w-full flex flex-col gap-[11px] my-6 transition-all duration-300`}>
                            <NavLink onClick={() => setHide(false)} to={'/'} className={`${isDark ? `` : `text-blue-500`} w-full border border-gray-400/40 shadow-md shadow-black-50 flex items-center justify-center py-2 rounded gap-2 transition-all duration-200 active:duration-70 active:scale-95`}><Home /> Home</NavLink>
                            <NavLink onClick={() => setHide(false)} to={'/about'} className={`${isDark ? `` : `text-blue-500`} w-full border border-gray-400/40 shadow-md shadow-black-50 flex items-center justify-center py-2 rounded gap-2 transition-all duration-200 active:duration-70 active:scale-95`}><InfoIcon /> About</NavLink>
                            <NavLink onClick={() => setHide(false)} to={'/projects'} className={`${isDark ? `` : `text-blue-500`} w-full border border-gray-400/40 shadow-md shadow-black-50 flex items-center justify-center py-2 rounded gap-2 transition-all duration-200 active:duration-70 active:scale-95`}><Folder /> Projects</NavLink>
                            <NavLink onClick={() => setHide(false)} to={'/'} className={`${isDark ? `` : `text-blue-500`} w-full border border-gray-400/40 shadow-md shadow-black-50 flex items-center justify-center py-2 rounded gap-2 text-red-600 transition-all duration-200 active:duration-70 active:scale-95`}><Info /> Report</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    </>
}