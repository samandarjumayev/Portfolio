import { useFormik } from "formik"
import { LoginSchema } from "./LoginSchema"
import { ArrowLeft, ArrowLeftFromLine, CircleArrowLeft, LogIn, SkipBack } from "lucide-react"
import { NavLink } from "react-router-dom"

const initialValues = {
    name: '',
    email: '',
    password: ''
}


export default function Login(){

    const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        onSubmit: (value) => {
            console.log(value);
            localStorage.setItem('user', JSON.stringify(value));
            localStorage.setItem('isAuth', true)
        }
    })

    return <div className="w-full h-screen bg-[#080720d7] flex items-center justify-center">
        
        <form onSubmit={handleSubmit} action="" className="w-[450px] py-7 px-5 bg-white rounded-lg flex flex-col gap-3">
            <NavLink to={'/'} className={`mb-[-5px] text-[#0073ff]`}>
                <ArrowLeft size={27} />
            </NavLink>
            <h1 className="text-2xl font-[monospace] font-semibold mb-2">Ma'lumotlaringiz</h1>
            
            <div>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Ismingiz"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-zinc-600 rounded w-full py-2 px-3 outline-none focus:ring-1"
                />
                <p className="text-[13px] text-red-600">{touched.name && errors.name}</p>
            </div>
            <div>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email (Emailingiz maxfiy saqlanadi..!)"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-zinc-600 rounded w-full py-2 px-3 outline-none focus:ring-1"
                />
                <p className="text-[13px] text-red-600">{touched.email && errors.email}</p>
            </div>
            <div>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password yarating"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border border-zinc-600 rounded w-full py-2 px-3 outline-none focus:ring-1"
                />
                <p className="text-[13px] text-red-600">{touched.email && errors.email}</p>
            </div>

            <button type="submit" className="flex items-center justify-center gap-2 bg-blue-600 w-full text-white py-2 rounded font-semibold text-[20px] cursor-pointer transition-all duration-100 active:duration-60 active:scale-95">Kirish <LogIn /></button>
        </form>

    </div>
}