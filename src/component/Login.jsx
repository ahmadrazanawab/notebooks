import React, {useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const host = "http://localhost:7000/api/v1/user/login";

    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email,password})
        })
        const json = await response.json();
        console.log(json);
        console.log(json.success)
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            history.push('/')
            alert("Login successfully");
        }
        else {
            alert("please check email and password");
        }
    }
  return (
    <div className="bg-slate-600 md:pt-28  pt-20 h-[100vh]">
          <form action="" onSubmit={handleSubmit}>
              <div className="md:mx-44 mx-6 my-2"><h4 className="text-2xl font-semibold text-slate-100">Login to continue with Notebook</h4></div>
        <div className="flex flex-col md:mx-44 mx-6 my-2">
              <label htmlFor="email" className="text-xl font-bold text-slate-200">Email</label>
              <input type="email" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder='Enter your email'/>  
        </div>
        <div className="flex flex-col md:mx-44 mx-6 my-2">
              <label htmlFor="password" className="text-xl font-bold text-slate-200">Password</label>
              <input type="password" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300" value={password} onChange={(e)=>setPassword(e.target.value)}  name="password" id="password" placeholder='Enter your password'/>
        </div>
        <div   className="md:mx-44 mx-6 py-2 my-2"><button type="submit" className="btn bg-cyan-400 font-bold text-slate-100 rounded-md shadow-sm hover:scale-95 px-4 py-2 cursor-pointer ">Login</button></div>
    </form>
</div>
  )
}

export default Login
