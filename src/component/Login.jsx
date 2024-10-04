import React from 'react'

const Login = () => {
  return (
    <div className="bg-slate-600 md:pt-28  pt-20 h-[100vh]">
          <form action="">
              <div className="md:mx-44 mx-6 my-2"><h4 className="text-2xl font-semibold text-slate-100">Login to continue with Notebook</h4></div>
        <div className="flex flex-col md:mx-44 mx-6 my-2">
              <label htmlFor="email" className="text-xl font-bold text-slate-200">Email</label>
              <input type="email" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300"  name="email" id="email" placeholder='Enter your email'/>  
        </div>
        <div className="flex flex-col md:mx-44 mx-6 my-2">
              <label htmlFor="password" className="text-xl font-bold text-slate-200">Password</label>
              <input type="password" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300"  name="password" id="password" placeholder='Enter your password'/>
        </div>
        <div   className="md:mx-44 mx-6 py-2 my-2"><button type="submit" className="btn bg-cyan-400 font-bold text-slate-100 rounded-md shadow-sm hover:scale-95 px-4 py-2 cursor-pointer ">Login</button></div>
    </form>
</div>
  )
}

export default Login
