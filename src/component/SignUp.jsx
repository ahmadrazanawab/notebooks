import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SignUp = () => {
    const host = "http://localhost:7000/api/v1/user/createuser";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({name,email,password})
        })
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            history.push('/login');
            alert("Sign Up successfully");
        }
        else {
            alert("please check email and password");
        }

    }
  return (
    <div className="bg-slate-600 md:pt-28  pt-20 h-[100vh]">
          <form action="" onSubmit={handleSubmit}>
              <div className="md:mx-44 mx-6 my-2"><h4 className="text-2xl font-semibold text-slate-100">SignUp to continue with Notebook</h4></div>
        <div className="flex flex-col md:mx-44 mx-6 my-2">
              <label htmlFor="name" className="text-xl font-bold text-slate-200">Name</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300"   name="name" id="name" placeholder='Enter your name'/>  
        </div>
        <div className="flex flex-col md:mx-44 mx-6 my-2">
              <label htmlFor="email" className="text-xl font-bold text-slate-200">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300"  name="email" id="email" placeholder='Enter your email'/>  
        </div>
        <div className="flex flex-col md:mx-44 mx-6 my-2">
              <label htmlFor="password" className="text-xl font-bold text-slate-200">Password</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300"  name="password" id="password" placeholder='Enter your password'/>
        </div>
        <div   className="md:mx-44 mx-6 py-2 my-2"><button type="submit" className="btn bg-cyan-400 font-bold text-slate-100 rounded-md shadow-sm hover:scale-95 px-4 py-2 cursor-pointer ">SignUp</button></div>
    </form>
</div>
  )
}

export default SignUp
