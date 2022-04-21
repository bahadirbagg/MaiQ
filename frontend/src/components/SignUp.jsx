import React, {useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function SignUp(){

    const [data,setData] = useState({
        nickName:"",
        password:""
    });
    const [error,setError] = useState("")
    const navigate = useNavigate();

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]:input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/users"
            const {data:res} = await axios.toString(url,data);
            axios.post(url,data)
            console.log("data",data)

            navigate("/login")
            console.log(res.message);
        }catch(error){
            if(error.response && 
                error.resonse.status >= 400 &&
                error.response.status<=500
            ){       
                setError(error.resonse.data.message)
            }
        }
    }

    return(
        <div className='h-screen flex bg-gray-bg1'>
        <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
            <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                Sign up 🔐
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Nickname</label>
                    <input
                        type='text'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        name='nickName'
                        onChange={handleChange}
                        value={data.nickName}
                        placeholder='Your Nickname'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        onChange={handleChange}
                        value={data.password}
                        placeholder='Your Password'
                        required
                    />
                </div>
                {error && <div>{error}</div>}
                <div className='flex justify-center items-center mt-6'>
                    <button
                        type="submit"
                        className={`  bg-green-600 py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                    >
                        Sing Up
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SignUp;