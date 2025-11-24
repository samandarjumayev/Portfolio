import { useContext } from "react"
import { UserContext } from "../App"
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Profile(){
    const {isDark} = useContext(UserContext);
    const navigate = useNavigate()

    return <div className={`${isDark ? `bg-slate-900 text-white` : `bg-blue-50 text-slate-900`} w-full h-[calc(100vh-90px)] flex items-center justify-center`}>
        <button onClick={() => {
            localStorage.removeItem('isAuth');
            localStorage.removeItem('user');
            setTimeout(() => {
                navigate('/');
            }, 2000)
        }} className={`${isDark ? `text-white` : `text-white shadow-lg`} bg-red-600 hover:bg-red-500 flex items-center gap-2 py-2 px-5 rounded text-xl cursor-pointer font-semibold`}>Log Out <LogOut /></button>
    </div>
}