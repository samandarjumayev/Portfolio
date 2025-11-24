import { Navigate } from "react-router-dom";

export default function ProtectedRouter({ children }){
    let isAuth = localStorage.getItem('isAuth');

    if(!isAuth){
        return <Navigate to={'/login'} />
    }

    return children
}