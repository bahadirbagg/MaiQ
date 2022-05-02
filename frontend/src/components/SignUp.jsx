import React, {useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function SignUp(){

    const [data,setData] = useState({
        fullname:"",
        nickname:"",
        email:"",
        password:"",
        coin:100
    });
    const [error,setError] = useState("")
    const navigate = useNavigate();

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]:input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
            const url = "http://localhost:8080/api/users"
            axios.post(url,data)
            .then(res => {
                if (res.status === 201){
                    console.log("ress",res.data.message)  
                    navigate('/login') 
                    setError(res.data.message)
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
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Register</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="first_name">Full Name</label>
                    <input 
                        type='text'
                        className="border py-2 px-3 text-grey-800" 
                        name='fullname'
                        onChange={handleChange}
                        value={data.fullname}
                        required/>
                </div>
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
                {error && <div className="   mb-2 text-red-600">{error}</div>}
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="email">Email</label>
                    <input 
                        type='email'
                        className="border py-2 px-3 text-grey-800" 
                        name='email'
                        onChange={handleChange}
                        value={data.email}
                        required/>
                </div>
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
                <button className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
            </form>
            <a className="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900" href="/login">Already have an account?</a>
        </div>
    </div>
    )
}

export default SignUp;