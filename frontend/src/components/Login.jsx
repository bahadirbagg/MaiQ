import React, {useState } from "react";
import axios from "axios";

function Login(){

    const [data,setData] = useState({
        nickname:"",
        password:""
    });
    const [error,setError] = useState("")

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]:input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:8080/api/auth"
            axios.post(url,data)
            .then(res => {
                if (res.status === 201){
                    console.log("ress",res.data.message)  
                    console.log("resstats",res.status)  
                    localStorage.setItem("token",res.status);
                    localStorage.setItem("nickname",data.nickname);
                    window.location = "/" 
                }         
            })
            .catch((err)=> {
                console.log("err",err.response.data.message)
                setError(err.response.data.message)
            })
    }

    return(
        <div className="flex justify-center items-center h-screen w-full bg-blue-400">
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="last_name">Nickname</label>
                    <input 
                        type='text'
                        className="border py-2 px-3 text-grey-800" 
                        name='nickname'
                        onChange={handleChange}
                        value={data.nickname}
                        required/>
                </div>
                {error === 'Invalid Nickname' &&<div className="text-red-600">{error}</div>}
                
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="password">Password</label>
                    <input 
                        type='password'
                        className="border py-2 px-3 text-grey-800" 
                        name='password'
                        onChange={handleChange}
                        value={data.password}
                        required/>
                </div>
                {error === 'Yanlış Şifre' &&<div className="text-red-600">{error}</div>}
                <button className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Login</button>
            </form>
            <a className="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900" href="/Signup">Dont have an account?</a>
        </div>
    </div>
    )
}

export default Login;